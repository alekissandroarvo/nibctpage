import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
  return (
    <div>
      <center>
        <Carousel
          showThumbs=""
          width="40%"
          infiniteLoop
          useKeyboardArrows
          autoPlay
        >
          <div>
            <img
              src="https://scontent.ffln3-1.fna.fbcdn.net/v/t1.6435-9/69258094_2350652165055840_6160818500903370752_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=_NnLdTa5QY4AX-a07Xr&_nc_ht=scontent.ffln3-1.fna&oh=00_AT8f8J7BqzLd8l46jmKyFl_rrkhR_JCgfv6YuwzbyoLq8A&oe=6251F02D"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://scontent.ffln3-1.fna.fbcdn.net/v/t1.6435-9/68881093_2348747081913015_4831011955076497408_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Z7jNHf9dVb4AX99cbRc&_nc_ht=scontent.ffln3-1.fna&oh=00_AT8IA56GpW-eLj37uhVrTo4JeflI4c4mW0ZtOo7UlvVLAg&oe=6252F325"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://scontent.ffln3-1.fna.fbcdn.net/v/t1.6435-9/67511097_2288659111255146_759303304005025792_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=PVhvIHhPXa4AX_R_BNA&_nc_ht=scontent.ffln3-1.fna&oh=00_AT9pMUTjxLeasawrvxI4A2rrvrjsjTUeGgCVOeCxKDwPEw&oe=62528E09"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://scontent.ffln3-1.fna.fbcdn.net/v/t1.6435-9/54200876_2076181459169580_625379201444216832_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=6CZTDSnWWsQAX83oIgB&_nc_ht=scontent.ffln3-1.fna&oh=00_AT-rf7RHkkwR4JTXhMVVftlG5ndLSKZ8ks01msivfpks_g&oe=625072FE"
              alt="image"
            />
          </div>
        </Carousel>
      </center>
    </div>
  );
}
export default CarouselComponent;
