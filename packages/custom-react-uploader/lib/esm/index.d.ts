import React from 'react';

interface UploadFileModel$1 {
    file?: any;
    fileName: string;
    blob: any;
    isUploaded: boolean;
    url?: string;
    original_url?: string;
}

interface Props$1 {
    currentFiles: UploadFileModel$1[];
    updateCurrentFiles: (files: UploadFileModel$1[]) => void;
    onError: (message: string, file: File | undefined) => void;
    acceptFiles?: string[];
    renderText?: () => JSX.Element;
    multiple?: boolean;
    onlyShowFileInfo?: boolean;
}
declare const UploadImages: React.FC<Props$1>;

declare type Props = Props$1;
declare type UploadFileModel = UploadFileModel$1;
declare const convertUrlToUploadFileModel: (input: string, defaultFileName?: string, isUploaded?: boolean) => Promise<UploadFileModel$1>;
declare const updateFileAsync: (fileUrl: string, onSuccess: (type: "SHOW" | "HIDE", data?: UploadFileModel$1 | undefined) => void) => Promise<void>;

export { Props, UploadFileModel, convertUrlToUploadFileModel, UploadImages as default, updateFileAsync };
//# sourceMappingURL=index.d.ts.map
