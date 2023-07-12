import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import CarouselArrowButton from "./CarouselArrowButton";
import { useState } from "react";

import type { Article } from "@/types/article";

type Props = {
  data: Article[];
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
          {data.map((article) => (
            <CarouselItem key={article.id} article={article} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {data.map((article) => (
            <CarouselItem key={article.id} article={article} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {data.map((article) => (
            <CarouselItem key={article.id} article={article} />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
