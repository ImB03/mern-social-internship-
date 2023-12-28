import React, { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./dropzoneFile.module.scss";
import { MyContext } from "../../hook/context/postState";

export default function DropzoneFile({ inputFiles, setInputFiles }) {
  const onDrop = useCallback((acceptedFiles) => {
    setInputFiles(acceptedFiles.map((file) => URL.createObjectURL(file)));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={`${styles.dropzone}`}>
      {inputFiles[0] ? (
        <div className={`${styles.displayFiles} position-relative`}>
          <img src={inputFiles[0]} className={`${styles.fileImg}`} alt="" />
          <div
            onClick={() => {
              setInputFiles('');
            }}
            className={`${styles.closeFile} position-absolute d-flex justify-content-center align-items-center`}
          >
            <ClearIcon className={`${styles.icon}`} />
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`${styles.dropzoneFiles} d-flex justify-content-center align-items-center`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className={`${styles.caption}`}>Drop the files here...</div>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <FileUploadOutlinedIcon className={`${styles.icon}`} />
              <div className={`${styles.caption}`}>
                Drag and drop, or click to select files
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
