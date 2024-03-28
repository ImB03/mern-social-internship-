import React, { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./dropzoneCoverAvatar.module.scss";
import { MyContext } from "../../hook/context/state";
import { Image } from "cloudinary-react";

export default function DropzoneCoverAvatar({
  dataInputCoverAvatar,
  setDataInputCoverAvatar,
}) {
  const [file, setfile] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      setDataInputCoverAvatar(acceptedFiles[0]);
      setfile(acceptedFiles[0]);
    },
    [setDataInputCoverAvatar]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={`${styles.dropzone}`}>
      {dataInputCoverAvatar ? (
        <div className={`${styles.displayFiles} position-relative`}>
          {file === "" ? (
            <Image
              cloudName={process.env.REACT_APP_CLOUD_NAME}
              publicId={dataInputCoverAvatar}
              className={`${styles.fileImg}`}
            />
          ) : (
            <img
              src={URL.createObjectURL(dataInputCoverAvatar)}
              className={`${styles.fileImg}`}
              alt=""
            />
          )}

          <div
            onClick={() => {
              setDataInputCoverAvatar("");
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
