import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLoaderData } from "react-router";
import Cards from "../components/Cards";

const Home = () => {

    const datas = useLoaderData();
    // console.log(datas);

  return (
    <div className=''>
      <div className="hero bg-base-200 min-h-screen mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-9/12">
            <h1 className="text-5xl font-bold">
              Join The Race, Push Your Limits.
            </h1>
            <p className="py-6">
              A marathon is a long-distance running race with an official
              distance of 42.195 kilometers (26.2 miles). It tests the
              endurance, determination, and mental strength of each participant.
              Completing a marathon is a great personal achievement and often
              symbolizes perseverance and commitment.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={2}
          >
            <SwiperSlide>
              <div className="card bg-base-100 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                {/* <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-base-100 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                {/* <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-base-100 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                {/* <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {
          datas.map(data => <Cards key={data.id} data = {data}></Cards>)
        }
      </div>
    </div>
  );
};

export default Home;
