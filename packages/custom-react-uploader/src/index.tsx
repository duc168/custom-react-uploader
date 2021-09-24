import Uploader, { Props as UploaderProps } from './Uploader'
import { UploadFileModel as UploadFileModelType } from './Uploader/interface'
import { 
    convertUrlToUploadFileModel as convertUrlToUploadFileModelHelper, 
    updateFileAsync as updateFileAsyncHelperHelper
} from './Uploader/helpers/reader'

export type Props = UploaderProps
export type UploadFileModel = UploadFileModelType
export const convertUrlToUploadFileModel = convertUrlToUploadFileModelHelper
export const updateFileAsync = updateFileAsyncHelperHelper
export default Uploader