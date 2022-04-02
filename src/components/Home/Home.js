import React from "react";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div className="md:px-16 py-8">
      <div className="flex flex-col justify-center h-[80vh] items-center">
        <h1 className=" font-mono text-xl md:text-5xl ">
        <ReactTyped
                strings={[
                    'Crypto Market Is Here!',
                    'See Daily Update',
                    'Crypto Is Future!']}
                    typeSpeed={30}
                    backSpeed={40}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
        </ReactTyped>
        </h1>
        <Link to='/coins' className="py-2 px-3 text-white mt-3 rounded-full bg-cyan-600">
          Explore Coins
        </Link>
      </div>
    </div>
  );
};

export default Home;
