import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { useSelector } from "react-redux";
import "../../../node_modules/swiper/swiper.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

import styles from "./stories.module.scss";
import { storyData } from "./storyData";

SwiperCore.use([Navigation]);

export default function Stories() {
  const location = useLocation();
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);
  const pageName = location.pathname.split("/")[1];

  console.log(pageName);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef(null); // Ref để tham chiếu đến Swiper

  const handleNextButtonClick = () => {
    swiperRef.current.swiper.slideNext(); // Di chuyển tới slide kế tiếp khi nút "Next" được bấm
  };

  const handlePrevButtonClick = () => {
    swiperRef.current.swiper.slidePrev(); // Di chuyển tới slide trước đó khi nút "Prev" được bấm
  };

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    swiper.on("reachBeginning", () => {
      setIsBeginning(true);
    });
    swiper.on("reachEnd", () => {
      setIsEnd(true);
    });
    swiper.on("fromEdge", () => {
      setIsBeginning(false);
      setIsEnd(false);
    });
  }, []);

  return (
    <div className={`${styles.stories} mt-3`}>
      <div className="container-fluid p-0">
        <Swiper
          className={`position-relative`}
          ref={swiperRef}
          spaceBetween={8}
          slidesPerView={pageName === "" ? 5 : 3}
          loop={false}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {pageName === "" && (
            <SwiperSlide
              className={`${styles.item} d-flex flex-column justify-content-between`}
            >
              <img
                src={`http://localhost:19000/assets/${
                  userNow.userAvatar !== ""
                    ? userNow.userAvatar
                    : "defaultUserAvatar.png"
                }`}
                className={`${styles.userAvatar}`}
                alt=""
              />
              <div
                className={`${styles.createStory} border-top position-relative d-flex flex-column align-items-center justify-content-center`}
              >
                <div
                  className={`${styles.createBtn} position-absolute d-flex align-items-center justify-content-center`}
                >
                  <AddCircleRoundedIcon className={`${styles.icon}`} />
                </div>
                <div className={`${styles.title}`}>Create news</div>
              </div>
            </SwiperSlide>
          )}
          {storyData.map((data, index) => (
            <SwiperSlide
              key={index}
              className={`${styles.item} position-relative d-flex`}
            >
              <img src={data.img} className={`${styles.img}`} alt="" />
              {pageName === "" && (
                <div
                  className={`${styles.info} position-absolute d-flex flex-column justify-content-between p-2`}
                >
                  <img
                    className={`${styles.avatar}`}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wTSQmZNeyfJ1GNYRHZjCpYLN6ul8o5R0kg&usqp=CAU "
                    alt=""
                  />
                  <div className={`${styles.userName}`}>userName</div>
                </div>
              )}
            </SwiperSlide>
          ))}
          <div
            className={`${styles["custom-swiper-button-next"]} position-absolute d-flex justify-content-center align-items-center`}
            onClick={handleNextButtonClick}
            style={{ visibility: isEnd ? "hidden" : "visible" }}
          >
            <KeyboardArrowRightOutlinedIcon />
          </div>
          <div
            className={`${styles["custom-swiper-button-prev"]} position-absolute d-flex justify-content-center align-items-center`}
            onClick={handlePrevButtonClick}
            style={{ visibility: isBeginning ? "hidden" : "visible" }}
          >
            <KeyboardArrowLeftOutlinedIcon />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
