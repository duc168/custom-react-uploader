import { UploadFileModel } from '../interface'

export const onSelectFileToUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
  currentFiles: UploadFileModel[],
  updateFiles: (newFiles: UploadFileModel[]) => void,
  onError: (message: string, file: File | undefined) => void
): void => {
  try {
    if (e.target.files !== null) {
      const files = e.target.files as any
      const blobFile = files[0]
      if (blobFile === undefined) {
        onError('NO_FILE', blobFile)
        return
      }
      const readerAsDataURL = new FileReader()
      readerAsDataURL.onload = (e) => {
        if (e && e.target !== null) {
          const uploadFile = e.target.result
          if (
            currentFiles
              .filter((i) => i.isUploaded === false)
              .map((i) => i.fileName)
              .includes(blobFile.name)
          ) {
            onError('EXISTED', blobFile)
            return
          }
          const newList = [
            ...currentFiles,
            {
              fileName: blobFile.name,
              file: uploadFile,
              blob: blobFile,
              isUploaded: false,
            } as UploadFileModel,
          ]
          updateFiles(newList)
        }
      }
      readerAsDataURL.readAsDataURL(blobFile)
    }
  } catch (error) {
    console.log(error)
  }
}

export const onSelectFilesToUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
  currentFiles: UploadFileModel[],
  updateFiles: (newFiles: UploadFileModel[]) => void,
  onError: (message: string, file: File | undefined) => void
): void => {
  try {
    if (e.target.files !== null) {
      const files = e.target.files as any
      const length = files.length
      let result: UploadFileModel[] = []
      for (let idx = 0; idx < length; idx++) {
        const blobFile = files[idx]
        if (blobFile === undefined) {
          onError('NO_FILE', blobFile)
          return
        }
        const readerAsDataURL = new FileReader()
        readerAsDataURL.onload = (e) => {
          if (e && e.target !== null) {
            const uploadFile = e.target.result
            if (
              currentFiles
                .filter((i) => i.isUploaded === false)
                .map((i) => i.fileName)
                .includes(blobFile.name)
            ) {
              onError('EXISTED', blobFile)
            } else {
              result.push({
                fileName: blobFile.name,
                file: uploadFile,
                blob: blobFile,
                isUploaded: false,
              } as UploadFileModel)
            }

          }
        }
        readerAsDataURL.readAsDataURL(blobFile)
      }
      const sync = () => {
        if (result.length === length) {
          updateFiles([
            ...currentFiles,
            ...result
          ])
        } else {
          setTimeout(() => {
            sync()
          }, 100)
        }
      }
      sync()

    }
  } catch (error) {
    console.log(error)
  }
}

export const convertFileListToListOfFiles = (fileList: FileList) => {
  const length = fileList.length;
  // eslint-disable-next-line prefer-const
  let result: File[] = [];
  for (let i = 0; i < length; i++) {
    const file = fileList[i];
    result.push(file)
  }
  return result
}

export const onDropFileToUpload = (
  files: File[],
  currentFiles: UploadFileModel[],
  updateFiles: (newFiles: UploadFileModel[]) => void,
  onError: (message: string, file: File) => void
): void => {
  try {
    const newFileModels: UploadFileModel[] = []
    if (files.length > 0) {
      files.forEach((blobFile) => {
        if (
          currentFiles
            .filter((i) => i.isUploaded === false)
            .map((i) => i.fileName)
            .includes(blobFile.name)
        ) {
          onError('EXISTED', blobFile)
          return
        }
        const reader = new FileReader();
        reader.readAsDataURL(blobFile);
        reader.onloadend = function () {
          const base64data = reader.result;
          newFileModels.push(
            {
              fileName: blobFile.name,
              file: base64data,
              blob: blobFile,
              isUploaded: false,
            } as UploadFileModel,
          )
        }

      })
    }
    const sync = () => {
      if (newFileModels.length === files.length) {
        updateFiles([
          ...currentFiles,
          ...newFileModels
        ])
      } else {
        setTimeout(() => {
          sync()
        }, 100)
      }
    }
    sync()
  } catch (error) {
    console.log(error)
  }
}

export const getBlobFromUrl = (url: string): Promise<File> => {
  return new Promise((resolve, reject) => {
    try {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'blob';
      request.onload = function () {        
        resolve(request.response)
      };
      request.send();
    } catch (error) {
      reject(error)
    }
  })
}


export const convertUrlToUploadFileModel = (input: string, defaultFileName: string = '', isUploaded: boolean = false): Promise<UploadFileModel> => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
        const inputUrl = input + ''
        getBlobFromUrl(inputUrl).then(blobFile => {
          reader.readAsDataURL(blobFile);
          reader.onloadend = function () {
            const base64data = reader.result;
            resolve({
              fileName: blobFile.name ?? defaultFileName + '',
              file: base64data,
              blob: blobFile,
              isUploaded: isUploaded,
            })
          }
        }).catch((err) => {
          reject(err)
        })
    } catch (error) {
      reject(error)
    }
  })
}



let currentSetTimeoutId: any
type UpdateUploadFileType = 'SHOW' | 'HIDE'
let orderedList: { fileUrl: string, value:  string | number }[] = [] 
let checkList: ({
  fileUrl: string,
  value: UploadFileModel | number
})[] = []
export const updateFileAsync = async (fileUrl: string, onSuccess: (type: UpdateUploadFileType, data?: UploadFileModel) => void) => {
  if (currentSetTimeoutId) {
    clearTimeout(currentSetTimeoutId)
    currentSetTimeoutId = undefined    
  }  
  if (fileUrl.length === 0) {
    checkList.push({
      fileUrl,
      value: 123
    })
    orderedList.push({
      fileUrl,
      value: 123
    })
  } else {
    orderedList.push({
      fileUrl,
      value: 'HAS_VALUE'
    })
    const result = await convertUrlToUploadFileModel(fileUrl)
    checkList.push({
      fileUrl,
      value: result
    })
  }
  currentSetTimeoutId = setTimeout(() => {    
    if (checkList.length > 0) {
      const lastItem = orderedList[orderedList.length - 1]
      if (lastItem) {
        const theActualLastItem = checkList.find(f => f.fileUrl === lastItem.fileUrl)
        if (theActualLastItem) {
          if (typeof theActualLastItem.value === 'number') {
            onSuccess('HIDE')
          } else {
            onSuccess('SHOW', theActualLastItem.value)    
          }
        } else {
          onSuccess('HIDE')    
        }        
      } else {
        onSuccess('HIDE')  
      }      
    } else {
      onSuccess('HIDE')
    }
    checkList = []
    clearTimeout(currentSetTimeoutId)
    currentSetTimeoutId = undefined
    orderedList = []
  }, 250)
}