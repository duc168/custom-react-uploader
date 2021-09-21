import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
// import UploadIconSvg from '@/assets/icons/wa-upload-icon.svg'
// import MinusIconSvg from '@/assets/icons/wa-minus-icon.svg'
// import XIconSvg from "@/assets/x-icon.svg";
import { ReactComponent as UploadIconSvg } from "./assets/wa-upload-icon.svg";
import { ReactComponent as MinusIconSvg } from "./assets/wa-minus-icon.svg";
import { ReactComponent as XIconSvg } from "./assets/x-icon.svg";
import {
  convertFileListToListOfFiles,
  onDropFileToUpload,
  onSelectImagesToUpload,
  onSelectImageToUpload,
} from "./helpers/reader";
import { UploadFileModel } from "./interface";
export interface Props {
  currentFiles: UploadFileModel[];
  updateCurrentFiles: (files: UploadFileModel[]) => void;
  onError: (message: string, file: File | undefined) => void;
  acceptFiles?: string[];
  renderText?: () => JSX.Element;
  multiple?: boolean
  onlyShowFileInfo?: boolean
}
const UploadImages: React.FC<Props> = ({
  currentFiles,
  updateCurrentFiles,
  onError,
  acceptFiles = ["png", "jpg", "jpeg"],
  onlyShowFileInfo = false,
  renderText = () => {
    return (
      <span>
        Drag and drop jpg or png files here<br /> or{" "} <br />
        <span className={styles.highlight}>
          Click to select files from your device
        </span>
      </span>
    );
  },
  multiple = false
}) => {
  const fileUploadInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setDraggingStatus] = useState(false);
  const onClickUploadFiles = () => {
    fileUploadInputRef.current?.click();
  };
  const removeUploadFile = (img: UploadFileModel) => {
    updateCurrentFiles(
      currentFiles.filter((ui) => ui.fileName !== img.fileName)
    );
  };
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingStatus(true);
  };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingStatus(false);
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingStatus(true);
    return false;
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingStatus(false);
    const files = e.dataTransfer.files;
    if (files) {
      onDropFileToUpload(
        convertFileListToListOfFiles(files),
        currentFiles,
        updateCurrentFiles,
        onError
      );
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={`${styles.uploadImages} ${
          isDragging ? styles.dragging : ""
        }`}
        onClick={onClickUploadFiles}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <div className={styles.icon}>
          <UploadIconSvg />
        </div>
        <div className={styles.text}>{renderText()}</div>
        {multiple ?
        <input
        ref={fileUploadInputRef}
        className={styles.imageInput}
        onChange={(e) =>
            onSelectImagesToUpload(
            e,
            currentFiles,
            updateCurrentFiles,
            onError
          )
        }
        type="file"
        multiple
        accept={acceptFiles.map((a) => `.${a}`).join(", ")}
      />
        :
        <input
          ref={fileUploadInputRef}
          className={styles.imageInput}
          onChange={(e) =>
            onSelectImageToUpload(
              e,
              currentFiles,
              updateCurrentFiles,
              onError
            )
          }
          type="file"
          accept={acceptFiles.map((a) => `.${a}`).join(", ")}
        />
        }
        
      </div>
      {currentFiles.length > 0 && (
        <div className={styles.uploadedImages}>
          {currentFiles.map((ui) => (
            <div
              key={Math.random() * 8888 + "_custom-react-uploader"}
              className={`${styles.image} ${onlyShowFileInfo ? styles.info : ''}`}
            >
              {onlyShowFileInfo ? 
               <div
               className={styles.removeFileIcon}
               onClick={() => removeUploadFile(ui)}
             >
               <XIconSvg />
             </div>
              :<div
                className={styles.deleteImageIcon}
                onClick={() => removeUploadFile(ui)}
              >
                <MinusIconSvg />
              </div>}
              {onlyShowFileInfo ? <div className={styles.fileName}>{ui.fileName}</div> :
              <img alt="icon" className={styles.img} src={ui.file ?? ui.url} />
              }
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadImages;
