import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div>
        <h2 className="text-center font-semibold text-3xl pt-5">
          Contact <span className="text-red-500">Our Office</span>
        </h2>
        <p className="m-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          laboriosam obcaecati nihil mollitia quibusdam nam magni, sequi illum
          commodi hic voluptates necessitatibus fugit temporibus iusto odio
          accusantium. Dignissimos, repellat a. Temporibus possimus sequi amet
          repudiandae beatae laborum illo minima alias tempore dolorum. Ut ipsum
          sequi reiciendis autem animi excepturi unde laborum eaque repellendus
          earum debitis omnis, facilis velit dignissimos sit. Inciduriores
        </p>
        <div className="w-80 mx-auto">
          <Link to="/contact/DhakaAddress">
            <button className="text-white mb-2 bg-gradient-to-r from-orange-600 to-red-500 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Dhaka Office
            </button>
          </Link>
          <Link to="/contact/RangpurAddress">
            <button onClick={()=>console.log('click')} className="text-white mb-2 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-3 mx-auto sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Rangpur Office
            </button>
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Contact;
