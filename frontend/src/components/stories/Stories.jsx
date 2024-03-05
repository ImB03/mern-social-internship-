// import React from "react";
// import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// import { useLocation } from "react-router-dom";

// import styles from "./stories.module.scss";
// import { useSelector } from "react-redux";

// export default function Stories() {
//   const location = useLocation();

//   const imgs = [
//     "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
//   ];

//   return (
//     <div className={`${styles.stories} mt-3`}>
//       <div className="container-fluid p-0">
//         <div className="row gx-2">
//           {location.pathname === "/" && (
//             <div
//               className={`${styles.createStories} ${
//                 location.pathname === "/profile" && "col-4"
//               } ${location.pathname === "/" && "col"}`}
//             >
//               <div
//                 className={`${styles.wrapper} d-flex flex-column justify-content-end`}
//               >
//                 <img
//                   className={`${styles.img} position-relative`}
//                   src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                   alt=""
//                 />
//                 <div className={`${styles.info} position-absolute`}>
//                   <i
//                     className={`${styles.icon} fa-solid fa-circle-plus ms-3`}
//                   ></i>
//                   <div className={`${styles.name} ms-3 mb-2`}>create</div>
//                 </div>
//               </div>
//             </div>
//           )}
//           <div
//             className={`${styles.createStories} ${
//               location.pathname === "/profile" && "col-4"
//             } ${location.pathname === "/" && "col"}`}
//           >
//             <div
//               className={`${styles.wrapper} d-flex flex-column justify-content-end`}
//             >
//               <img
//                 className={`${styles.img} position-relative`}
//                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className={`${styles.info} position-absolute`}>
//                 <div className={`${styles.name} ms-3 mb-2`}>name</div>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`${styles.createStories} ${
//               location.pathname === "/profile" && "col-4"
//             } ${location.pathname === "/" && "col"}`}
//           >
//             <div
//               className={`${styles.wrapper} d-flex flex-column justify-content-end`}
//             >
//               <img
//                 className={`${styles.img} position-relative`}
//                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className={`${styles.info} position-absolute`}>
//                 <div className={`${styles.name} ms-3 mb-2`}>name</div>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`${styles.createStories} ${
//               location.pathname === "/profile" && "col-4"
//             } ${location.pathname === "/" && "col"}`}
//           >
//             <div
//               className={`${styles.wrapper} d-flex flex-column justify-content-end`}
//             >
//               <img
//                 className={`${styles.img} position-relative`}
//                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className={`${styles.info} position-absolute`}>
//                 <div className={`${styles.name} ms-3 mb-2`}>name</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useSelector } from "react-redux";
import "../../../node_modules/swiper/swiper-bundle.css";

import styles from "./stories.module.scss";
import { storyData } from "./storyData";

export default function Stories() {
  const location = useLocation();

  const imgs = [
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className={`${styles.stories} mt-3`}>
      <div className="container-fluid p-0">
        <Swiper
          className={``}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={24}
          slidesPerView={4}
          loop={false}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {storyData.map((data) => (
            <SwiperSlide className={`${styles.item}`}>1</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
