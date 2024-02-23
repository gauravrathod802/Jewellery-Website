import React from "react";
import "./CustomerStory.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomerStory = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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
  return (
    <div className="containers">
      <h1>Customer Story</h1>
      <Carousel responsive={responsive}>
        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Priyanka</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              eveniet quo tempora dignissimos perspiciatis, praesentium fuga
              facilis quidem nesciunt officiis nemo earum ipsam ab animi hic
              commodi eius voluptatibus dolore?
            </p>
          </div>
          <div className="bottom-img">
            <img src="https://www.giva.co/cdn/shop/files/PD096_5-min_9c05bf40-261f-4b5b-866d-9f70ee7d2e01.jpg?v=1699533271&width=320" />
          </div>
        </div>

        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Sonali</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              eveniet quo tempora dignissimos perspiciatis, praesentium fuga
              facilis quidem nesciunt officiis nemo earum ipsam ab animi hic
              commodi eius voluptatibus dolore?
            </p>
          </div>
          <div className="bottom-img">
            <img src="https://www.giva.co/cdn/shop/files/PD096_5-min_9c05bf40-261f-4b5b-866d-9f70ee7d2e01.jpg?v=1699533271&width=320" />
          </div>
        </div>

        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Monali</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              eveniet quo tempora dignissimos perspiciatis, praesentium fuga
              facilis quidem nesciunt officiis nemo earum ipsam ab animi hic
              commodi eius voluptatibus dolore?
            </p>
          </div>
          <div className="bottom-img">
            <img src="https://www.giva.co/cdn/shop/files/PD096_5-min_9c05bf40-261f-4b5b-866d-9f70ee7d2e01.jpg?v=1699533271&width=320" />
          </div>
        </div>

        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Priyanka</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              eveniet quo tempora dignissimos perspiciatis, praesentium fuga
              facilis quidem nesciunt officiis nemo earum ipsam ab animi hic
              commodi eius voluptatibus dolore?
            </p>
          </div>
          <div className="bottom-img">
            <img src="https://www.giva.co/cdn/shop/files/PD096_5-min_9c05bf40-261f-4b5b-866d-9f70ee7d2e01.jpg?v=1699533271&width=320" />
          </div>
        </div>

        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Avani</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab explicabo, ad est pariatur soluta! Aliquid reprehenderit ipsam, quas omnis quibusdam, est adipisci, ipsa nihil esse corporis dolores praesentium voluptatem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              eveniet quo tempora dignissimos perspiciatis, praesentium fuga
              facilis quidem nesciunt officiis nemo earum ipsam ab animi hic
              commodi eius voluptatibus dolore?
            </p>
          </div>
          <div className="bottom-img">
            <img src="https://www.giva.co/cdn/shop/files/PD096_5-min_9c05bf40-261f-4b5b-866d-9f70ee7d2e01.jpg?v=1699533271&width=320" />
          </div>
        </div>

      </Carousel>
      ;
    </div>
  );
};

export default CustomerStory;
