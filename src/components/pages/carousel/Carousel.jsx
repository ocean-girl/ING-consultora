import Carousel from "react-material-ui-carousel";
import { imagesCarousel } from "./CarouselImage";
import Item from "./Items";

function CarouselIntro() {
  return (
    <Carousel>
      {imagesCarousel.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselIntro;
