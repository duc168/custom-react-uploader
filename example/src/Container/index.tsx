import React, { useRef, useState } from 'react'
import Uploader, { UploadImageModel }  from 'custom-react-uploader'
// import Uploader, { UploadImageModel } from '../CustomReactUploader'
import styles from './styles.module.scss'
const Container: React.FC<any> = () => {
    const containerRef = useRef(null)
    const [images, setImages] = useState<UploadImageModel[]>([])
    return <div className={styles.container} ref={containerRef}>
        <Uploader currentImages={images} updateCurrentImages={setImages} onError={(message, file) => {
            console.log('error ', message, file)
        }} multiple={true} />
    </div>
}

export default Container