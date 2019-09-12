import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Button
} from "reactstrap";

const items = [
  {
    src:
      "https://d2idx9epdcbzys.cloudfront.net/media/magentothem/banner7/intpromo_home_d-slider1_w36_starzplay.jpg",
    altText: "Slide 1"
  },
  {
    src:
      "https://d2idx9epdcbzys.cloudfront.net/media/magentothem/banner7/intpromo_home_d-slider1_w36_limelight.jpg",
    altText: "Slide 2"
  },
  {
    src:
      "https://d2idx9epdcbzys.cloudfront.net/media/magentothem/banner7/intpromo_home_d-slider1_w36_sitara.jpg",
    altText: "Slide 3"
  },
  {
    src:
      "https://d2idx9epdcbzys.cloudfront.net/media/magentothem/banner7/intpromo_home_d-slider1_w36_jfragrances.jpg",
    altText: "Slide 4"
  },
  {
    src:
      "https://d2idx9epdcbzys.cloudfront.net/media/magentothem/banner7/intpromo_home_d-slider1_w36_jazaa.jpg",
    altText: "Slide 5"
  },
  {
    src:
      "https://d2idx9epdcbzys.cloudfront.net/media/magentothem/banner7/intpromo_home_d-slider1_w36_SL2019.jpg",
    altText: "Slide 7"
  },
  {
    src:
      "https://d2idx9epdcbzys.cloudfront.net/media/magentothem/banner7/intpromo_home_d-slider1_w36_giorgio.jpg",
    altText: "Slide 8"
  },
  {
    src:
      "https://d2idx9epdcbzys.cloudfront.net/media/magentothem/banner7/intpromo_home_d-slider1_w36_steals999.jpg",
    altText: "Slide 9"
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} className="slider" alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <React.Fragment>
        <Carousel
          className="w-75"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            alt="pre"
            className="previousCarosel"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            alt="next"
            className="nextCarosel"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
        <img
          className="series-img"
          alt="PAk vs Sl series"
          src="https://d2idx9epdcbzys.cloudfront.net/media//intpromo_home_d-rigt_w36_SL2019.gif"
        />
        <img
          className="series-img2"
          alt="shopping-img"
          src="https://d2idx9epdcbzys.cloudfront.net/media//intpromo_home_d-rigt_w14_deals.jpg"
          alt="Deals of the week"
        />
        <Button className="get-in-touch" color="danger">
          {" "}
          Get in Touch
        </Button>
      </React.Fragment>
    );
  }
}

export default Slider;
