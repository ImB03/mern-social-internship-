import React, { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./dropzoneUserAvatar.module.scss";
import { MyContext } from "../../hook/context/state";

export default function DropzoneUserAvatar({
  dataInputUserAvatar,
  setDataInputUserAvatar,
}) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setDataInputUserAvatar(
        acceptedFiles.map((file) => URL.createObjectURL(file))[0]
      );
    },
    [setDataInputUserAvatar]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={`${styles.dropzone}`}>
      {dataInputUserAvatar ? (
        <div className={`${styles.displayFiles}`}>
          <img
            src={dataInputUserAvatar}
            className={`${styles.fileImg}`}
            alt=""
          />
          <div
            onClick={() => {
              setDataInputUserAvatar("");
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