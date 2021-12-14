# Custom React Uploader

## Usage
##### _One line of code worths thousands lines of explanations._

```typescript
import React, { useEffect, useState } from 'react'
import Uploader, { convertUrlToUploadFileModel, UploadFileModel }  from 'custom-react-uploader'
import styles from './styles.module.scss'
const testUrl = `https://media.istockphoto.com/photos/desk-lamp-picture-id534400418?b=1&k=20&m=534400418&s=170667a&w=0&h=kWgxXtGPOGYwOg5WdvFebM_z3wAQBUG2wrTf24oBWTc=`
const Container: React.FC<any> = () => {
    const [images, setImages] = useState<UploadFileModel[]>([])
    useEffect(() => {
        convertUrlToUploadFileModel(testUrl, 'testName.jpg').then((res) => {
            setImages([res])
        })
    }, [])
    return <div className={styles.container}>
        <Uploader currentFiles={images} updateCurrentFiles={setImages} onError={(message, file) => {
            console.log('error ', message, file)
            }} multiple={true}
            onlyShowFileInfo={false}        
        />
    </div>
}

export default Container
```

## Development
1. Git clone the project ``https://github.com/duc168/custom-react-uploader.git``
2. Install lerna globally if you have not installed lerna yet, run ``yarn global add lerna``
3. Run ``yarn`` to install the first packages
4. ``yarn start`` to start developing
5. ``yarn stop`` to stop developing
6. ``yarn build`` to build a new version

##### _Happy coding!_
