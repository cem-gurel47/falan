import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import CarouselArrowButton from "./CarouselArrowButton";
import { useState } from "react";

import type { Blog } from "@/types/blog";

type Props = {
  data: Blog[];
};

const CarouselComponent = ({ data }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        className="w-full cursor-grab"
        autoPlay
        infiniteLoop
        swipeable
        emulateTouch
        interval={5000}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <CarouselArrowButton
              type="next"
              onClickHandler={onClickHandler}
              isVisible={isHovered}
            />
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <CarouselArrowButton
              type="prev"
              onClickHandler={onClickHandler}
              isVisible={isHovered}
            />
          )
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {data.map((blog) => (
            <CarouselItem key={blog.sys.id} blog={blog} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {data.map((blog) => (
            <CarouselItem key={blog.sys.id} blog={blog} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {data.map((blog) => (
            <CarouselItem key={blog.sys.id} blog={blog} />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
