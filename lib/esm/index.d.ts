import React from 'react';

interface UploadImageModel$1 {
    file?: any;
    fileName: string;
    blob: any;
    isUploaded: boolean;
    url?: string;
    original_url?: string;
}

interface Props$1 {
    currentImages: UploadImageModel$1[];
    updateCurrentImages: (images: UploadImageModel$1[]) => void;
    onError: (message: string, file: File | undefined) => void;
    acceptFiles?: string[];
    renderText?: () => JSX.Element;
    multiple?: boolean;
}
declare const UploadImages: React.FC<Props$1>;

declare type Props = Props$1;
declare type UploadImageModel = UploadImageModel$1;

export { Props, UploadImageModel, UploadImages as default };
//# sourceMappingURL=index.d.ts.map
