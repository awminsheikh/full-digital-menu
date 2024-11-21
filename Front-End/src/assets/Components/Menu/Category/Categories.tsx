import { useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import categories from "./categoryList";
import Category from "./Category";
interface Props {
  handleClicke: (categoryId: number) => void;
}
const Categories = ({handleClicke} : Props) => {
   // State to keep track of the selected category ID
   const [activeCategoryId, setActiveCategoryId] = useState<number>(1);

   // Function to handle click and set active category
   const handleClick = (categoryId: number) => {
     setActiveCategoryId(categoryId); // Update the active category ID
     handleClicke(categoryId); // Call the parent handler
   };
  return <div className="w-full bg-yellow-400" dir="rtl">
     <Swiper className="p-3"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {
categories.map((category) => (
    <SwiperSlide
    onClick={() => handleClick(category.id)}
    className={`rounded-lg ${category.id === activeCategoryId && "bg-black text-yellow-400" }`}
    >
        <Category name={category.name} id={category.id} image={category.image} />
     </SwiperSlide>
))
     }
    </Swiper>
  </div>;
};

export default Categories;
