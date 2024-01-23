import React, { useEffect, useRef, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import styles from "./inputUpdateUser.module.scss";

export default function InputUpdateUser() {
  const [displayInput, setDisplayInput] = useState(false);

  const inputRef = useRef(null);

  const handleFocusInput = () => {
    if (displayInput && inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (displayInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [displayInput]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleFocusInput();
        setDisplayInput(true);
      }}
      className={`${styles.inputUpdateUser} ${
        displayInput && "border-bottom"
      } ps-3 mb-3 d-flex flex-column justify-content-center`}
    >
      <div
        className={`${styles.label} ${!displayInput && "fs-6"} ${
          displayInput && "mt-2"
        } d-flex align-items-center`}
      >
        <HomeOutlinedIcon
          className={`${styles.icon} ${!displayInput && "fs-4"} me-1`}
        />
        Current Province/City at
      </div>
      {displayInput && (
        <input
          ref={inputRef}
          className={`${styles.input} mb-2`}
          type="text"
          name=""
        />
      )}
    </div>
  );
}
