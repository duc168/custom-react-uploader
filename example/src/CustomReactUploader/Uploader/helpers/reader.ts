import { UploadImageModel } from '../interface'

export const onSelectImageToUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
  currentImages: UploadImageModel[],
  updateImages: (newImages: UploadImageModel[]) => void,
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
          const uploadImage = e.target.result
          if (
            currentImages
              .filter((i) => i.isUploaded === false)
              .map((i) => i.fileName)
              .includes(blobFile.name)
          ) {
            onError('EXISTED', blobFile)
            return
          }
          const newList = [
            ...currentImages,
            {
              fileName: blobFile.name,
              file: uploadImage,
              blob: blobFile,
              isUploaded: false,
            } as UploadImageModel,
          ]
          updateImages(newList)
        }
      }
      readerAsDataURL.readAsDataURL(blobFile)
    }
  } catch (error) {
    console.log(error)
  }
}

export const onSelectImagesToUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
  currentImages: UploadImageModel[],
  updateImages: (newImages: UploadImageModel[]) => void,
  onError: (message: string, file: File | undefined) => void
): void => {
  try {
    if (e.target.files !== null) {
      const files = e.target.files as any
      const length = files.length
      let result: UploadImageModel[] = []
      for (let idx = 0; idx < length; idx++) {
        const blobFile = files[idx]
        if (blobFile === undefined) {
          onError('NO_FILE', blobFile)
          return
        }
        const readerAsDataURL = new FileReader()
        readerAsDataURL.onload = (e) => {
          if (e && e.target !== null) {
            const uploadImage = e.target.result
            if (
              currentImages
                .filter((i) => i.isUploaded === false)
                .map((i) => i.fileName)
                .includes(blobFile.name)
            ) {
              onError('EXISTED', blobFile)
            } else {
              result.push({
                fileName: blobFile.name,
                file: uploadImage,
                blob: blobFile,
                isUploaded: false,
              } as UploadImageModel)
            }
            
          }
        }
        readerAsDataURL.readAsDataURL(blobFile)
      }
      const sync = () => {
        if (result.length === length) {
          updateImages([
        ...currentImages,
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

export const onDropImageToUpload = (
  images: File[],
  currentImages: UploadImageModel[],
  updateImages: (newImages: UploadImageModel[]) => void,
  onError: (message: string, file: File) => void
): void => {
  try {
    const newImageModels: UploadImageModel[] = []
    if (images.length > 0) {
      images.forEach((blobFile) => {
        if (
          currentImages
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
          newImageModels.push(
            {
              fileName: blobFile.name,
              file: base64data,
              blob: blobFile,
              isUploaded: false,
            } as UploadImageModel,
          )
        }

      })
    }
    const sync = () => {
      if (newImageModels.length === images.length) {
        updateImages([
          ...currentImages,
          ...newImageModels
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
