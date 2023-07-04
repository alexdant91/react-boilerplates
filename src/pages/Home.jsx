import useFetch from "../hooks/useFetch";
import constants from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const token = useSelector((state) => state.auth.token);
  const [products] = useFetch(`${constants.API_HOST}/products`);
 
 

  // const dispatch = useDispatch()

  // const handleAdd = async (product) => {

  //   try {
  //     const results = await axios({
  //       url: `${constants.API_HOST}/cart/${product.id}`,
  //       method: "PUT",
  //       data: {
  //         qnt:  1
  //       },
  //       headers: {
  //         "Authorization": token,
  //       }
  //     });

  //     const data = results.data;
  //     dispatch(add(data))

  //   } catch(err) {
  //     console.error(err);
  //   }
  // }
 

  const handleAdd = async (id) => {

    console.log(`${constants.API_HOST}/cart/`);
    try {
      const results = await axios({
        url: `${constants.API_HOST}/cart`,
        method: "POST",
        data: {
          productId: id,
          qnt: 1,
        },
        headers: {
          Authorization: token,
        },
      });
      
      toast("product added", {type:"success"})
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(products);
  return (
    <>
      <div className="flex p-12 gap-4">
        {products &&
          products.products.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm"
              >
                <div className="flex justify-center items-center">
                  <img
                    style={{ height: "240px", width: "auto" }}
                    className="rounded-t-lg"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                      {product.title}
                    </h5>
                  </a>
                  <div className="flex justify-between">
                    <span>{product.price}</span>
                    {token ? (
                      <button
                        href="#"
                        onClick={()=> handleAdd( product.id)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add to cart
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Login to add
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
