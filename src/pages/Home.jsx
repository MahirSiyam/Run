import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLoaderData } from "react-router";
import Cards from "../components/Cards";

const Home = () => {
  const datas = useLoaderData();
  // console.log(datas);

  window.scrollTo(0, 0);

  return (
    <div className="bg-orange-50">
      <div className="hero  min-h-screen mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-9/12">
            <h1 className="text-5xl font-bold">
              Join The Race, Push Your Limits.
            </h1>
            <p className="py-6 text-gray-500">
              A marathon is a long-distance running race with an official
              distance of 42.195 kilometers (26.2 miles). It tests the
              endurance, determination, and mental strength of each participant.
              Completing a marathon is a great personal achievement and often
              symbolizes perseverance and commitment.
            </p>
            <button className="btn bg-orange-500 font-bold text-gray-900">Get Started</button>
          </div>
        
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1667791275929-5701d83734c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxtYXJhdGhvbnxlbnwwfHwwfHx8MA%3D%3D"
                className=""
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle bg-gray-300">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle bg-gray-300">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1720799535177-29230374fa5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM2fHxtYXJhdGhvbnxlbnwwfHwwfHx8MA%3D%3D"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle bg-gray-300">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle bg-gray-300">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full justify-center"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1663088634087-c2ef9926e842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHxtYXJhdGhvbnxlbnwwfHwwfHx8MA%3D%3D"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle bg-gray-300">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle bg-gray-300">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1553503881-4de3e0d7bb79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc1fHxtYXJhdGhvbnxlbnwwfHwwfHx8MA%3D%3D"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle bg-gray-300">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle bg-gray-300">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-t-8 border-white">

            <h1 className="text-center text-4xl font-bold mt-10 mb-5">All Category</h1>
            <p className="text-center text-lg mb-20 text-gray-500">Marathon categories typically include Full Marathon (42.195 km), Half Marathon (21.097 km), 10K, 5K, and fun runs, catering to all fitness levels and age groups. Some events also feature wheelchair races, relay marathons, and junior categories to encourage inclusive participation.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 p-5">
          {datas.map((data) => (
            <Cards key={data.id} data={data}></Cards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
