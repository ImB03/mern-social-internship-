import React, { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./dropzoneFile.module.scss";
import { MyContext } from "../../hook/context/state";

export default function DropzoneFile({ inputFiles, setInputFiles }) {
  const [file, setfile] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      setInputFiles(acceptedFiles[0]);
      setfile(acceptedFiles[0]);
    },
    [setInputFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={`${styles.dropzone}`}>
      {inputFiles || file ? (
        <div className={`${styles.displayFiles} position-relative`}>
          <img
            src={
              file !== ""
                ? URL.createObjectURL(inputFiles)
                : `https://mern-social-internship.onrender.com/assets/${inputFiles}`
            }
            className={`${styles.fileImg}`}
            alt=""
          />
          <div
            onClick={() => {
              setInputFiles("");
              setfile("");
            }}
            className={`${styles.closeFile} position-absolute d-flex justify-content-center align-items-center`}
          >
            <ClearIcon className={`${styles.icon}`} />
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`${styles.dropzoneFiles} p-3 d-flex justify-content-center align-items-center`}
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
