import React, { useEffect, useRef, useState } from 'react'
import Uploader, { convertUrlToUploadFileModel, UploadFileModel }  from 'custom-react-uploader'
import styles from './styles.module.scss'
const testUrl = `https://media.istockphoto.com/photos/desk-lamp-picture-id534400418?b=1&k=20&m=534400418&s=170667a&w=0&h=kWgxXtGPOGYwOg5WdvFebM_z3wAQBUG2wrTf24oBWTc=`
const Container: React.FC<any> = () => {
    const containerRef = useRef(null)
    const [images, setImages] = useState<UploadFileModel[]>([])
    useEffect(() => {
        convertUrlToUploadFileModel(testUrl, 'testName.jpg').then((res) => {
            setImages([res])
        })
    }, [])
    return <div className={styles.container} ref={containerRef}>
        <Uploader currentFiles={images} updateCurrentFiles={setImages} onError={(message, file) => {
            console.log('error ', message, file)
        }} multiple={true}
            onlyShowFileInfo={false}        
        />
    </div>
}

export default Container