import React, { useRef, useState } from 'react'
// import Uploader, { UploadImageModel }  from 'custom-react-uploader'
import Uploader, { UploadFileModel } from '../CustomReactUploader'
import styles from './styles.module.scss'
const Container: React.FC<any> = () => {
    const containerRef = useRef(null)
    const [images, setImages] = useState<UploadFileModel[]>([])
    return <div className={styles.container} ref={containerRef}>
        <Uploader currentFiles={images} updateCurrentFiles={setImages} onError={(message, file) => {
            console.log('error ', message, file)
        }} multiple={true}
            onlyShowFileInfo={true}        
        />
    </div>
}

export default Container