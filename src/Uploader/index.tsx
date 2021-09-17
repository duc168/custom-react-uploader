import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import UploadIconSvg from  "./assets/wa-upload-icon.svg"
import MinusIconSvg from "./assets/wa-minus-icon.svg"
// import { ReactComponent as UploadIconSvg } from "./assets/wa-upload-icon.svg";
// import { ReactComponent as MinusIconSvg } from "./assets/wa-minus-icon.svg";
import {
  convertFileListToListOfFiles,
  onDropImageToUpload,
  onSelectImagesToUpload,
  onSelectImageToUpload,
} from "./helpers/reader";
import { UploadImageModel } from "./interface";
export interface Props {
  currentImages: UploadImageModel[];
  updateCurrentImages: (images: UploadImageModel[]) => void;
  onError: (message: string, file: File | undefined) => void;
  acceptFiles?: string[];
  renderText?: () => JSX.Element;
  multiple?: boolean
}
const UploadImages: React.FC<Props> = ({
  currentImages,
  updateCurrentImages,
  onError,
  acceptFiles = ["png", "jpg", "jpeg"],
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
  const imageUploadInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setDraggingStatus] = useState(false);
  const onClickUploadImages = () => {
    imageUploadInputRef.current?.click();
  };
  const removeUploadImage = (img: UploadImageModel) => {
    updateCurrentImages(
      currentImages.filter((ui) => ui.fileName !== img.fileName)
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
      onDropImageToUpload(
        convertFileListToListOfFiles(files),
        currentImages,
        updateCurrentImages,
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
        onClick={onClickUploadImages}
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
        ref={imageUploadInputRef}
        className={styles.imageInput}
        onChange={(e) =>
            onSelectImagesToUpload(
            e,
            currentImages,
            updateCurrentImages,
            onError
          )
        }
        type="file"
        multiple
        accept={acceptFiles.map((a) => `.${a}`).join(", ")}
      />
        :
        <input
          ref={imageUploadInputRef}
          className={styles.imageInput}
          onChange={(e) =>
            onSelectImageToUpload(
              e,
              currentImages,
              updateCurrentImages,
              onError
            )
          }
          type="file"
          accept={acceptFiles.map((a) => `.${a}`).join(", ")}
        />
        }
        
      </div>
      {currentImages.length > 0 && (
        <div className={styles.uploadedImages}>
          {currentImages.map((ui) => (
            <div
              key={Math.random() * 8888 + "custom-react-uploader"}
              className={styles.image}
            >
              <div
                className={styles.deleteImageIcon}
                onClick={() => removeUploadImage(ui)}
              >
                <MinusIconSvg />
              </div>
              <img alt="icon" className={styles.img} src={ui.file ?? ui.url} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadImages;
