import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
//import { images } from "./images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from "../../common/title/Title";
import ddm from "../../../../public/ddm250.jpg";
import aromitalia from "../../../../public/aromitalia250.jpg";
import emeveve from "../../../../public/emeveve250.jpg";
import entin from "../../../../public/entin250.jpg";
import envairo from "../../../../public/envairo250.jpg";
import sicop from "../../../../public/sicop250.jpg";
import sp from "../../../../public/SP250.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MyImageCarousel() {
  return (
    <div>
      <Container
        sx={{
          maxWidth: "100%",
          paddingTop: 2,
          paddingBottom: 4,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Title title={"CLIENTES"} />

        <Carousel
          draggable={false}
          swipeable={false}
          arrows={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-50-px"
        >
          <div>
            <img src={envairo} height={304} alt="" />
          </div>
          <div>
            <img src={entin} height={304} alt="" />
          </div>
          <div>
            <img src={aromitalia} height={304} alt="" />
          </div>
          <div>
            <img src={sicop} height={304} alt="" />
          </div>
          <div>
            <img src={ddm} height={304} alt="" />
          </div>
          <div>
            <img src={sp} height={304} alt="" />
          </div>
          <div>
            <img src={emeveve} height={304} alt="" />
          </div>
        </Carousel>
      </Container>
    </div>
  );
}
