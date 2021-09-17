# Custom React Uploader

### _One line of code worths thousands lines of explanations._

```typescript
import React, { useState } from 'react'
import Uploader, { UploadImageModel }  from 'custom-react-uploader'
import styles from './styles.module.scss'
const Container: React.FC<any> = () => {
    const [images, setImages] = useState<UploadImageModel[]>([])
    return <div className={styles.container}>
        <Uploader currentImages={images} updateCurrentImages={setImages} onError={(message, file) => {
            console.log('error ', message, file)
        }} multiple={true} />
    </div>
}

export default Container
```
