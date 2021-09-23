# Custom React Uploader

## Usage
##### _One line of code worths thousands lines of explanations._

```typescript
import React, { useRef, useState } from 'react'
import Uploader, { UploadImageModel }  from 'custom-react-uploader'
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
```

## Development
1. Git clone the project ``https://github.com/duc168/custom-react-uploader.git``
2. Install lerna globally if you have not installed lerna yet, run ``yarn add lerna -g``
3. Run ``yarn`` to install the first packages
4. ``yarn start`` to start developing
5. ``yarn stop`` to stop developing
6. ``yarn build`` to build a new version

##### _Happy coding!_