import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import product1 from "../data/product1.jpg";
import product2 from "../data/product2.jpg";
import product3 from "../data/product3.jpg";

const Cart = () => {
  const { isCart, setIsCart } = useStateContext();
  const [itemNum, setItemNum] = useState(0);
  const [itemState, setItemState] = useState("");
  // let itemNum = 0;
  // useEffect(() => {
  //   if (itemState === "increase") setItemNum(itemNum + 1);
  //   if (itemState === "decrease") setItemNum(itemNum - 1);
  // }, []);

  console.log(itemState, itemNum);
  const increase = () => {
    if (!itemState) return;
    if (itemState === "increase") setItemNum(itemNum + 1);
    else if (itemState === "decrease") setItemNum(itemNum - 1);
  };
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484b52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={() => setIsCart(false)}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="container ml-8 mr-10 w-full flex flex-col">
          <ul className="mt-8">
            <li className="flex gap-8 ">
              <img
                className=" w-[25%] rounded-2xl shadow-lg"
                src={product1}
                alt="product"
              />
              <div className="flex flex-col  w-full  text-base">
                <h3 className="font-semibold text-lg">Toyota</h3>
                <p className=" text-gray-400 font-semibold ">Car Product</p>
                <div className="mt-6">
                  <span className=" mr-12 ">$250</span>
                  <span
                    className="px-4 my-2 border-solid border-2 border-zinc-200 m-0 cursor-pointer"
                    onClick={() => {
                      increase();
                      setItemState("decrease");
                    }}
                  >
                    -
                  </span>
                  <span className="px-4 my-2 border-solid border-2 border-zinc-200 m-0 cursor-pointer">
                    {itemNum}
                  </span>
                  <span
                    className="px-4 my-2 border-solid border-2 border-zinc-200 m-0 cursor-pointer"
                    onClick={() => {
                      increase();
                      setItemState("increase");
                    }}
                  >
                    +
                  </span>
                </div>
              </div>
            </li>

            <li className="flex gap-8 mt-8">
              <img
                className=" w-[25%] rounded-2xl shadow-lg"
                src={product2}
                alt="product"
              />
              <div className="flex flex-col  w-full  text-base">
                <h3 className="font-semibold text-lg">Rayban</h3>
                <p className=" text-gray-400 font-semibold ">Sun glasses</p>
                <div className="mt-6">
                  <span className=" mr-12 ">$790</span>
                  <span className="px-4 my-2 border-solid border-2 border-zinc-200 m-0 cursor-pointer">
                    -
                  </span>
                  <span className="px-4 my-2 border-solid border-2 border-zinc-200 m-0 cursor-pointer">
                    0
                  </span>
                  <span className="px-4 my-2 border-solid border-2 border-zinc-200 m-0 cursor-pointer">
                    +
                  </span>
                </div>
              </div>
            </li>

            <li className="flex gap-8 mt-8">
              <img
                className=" w-[25%] rounded-2xl shadow-lg"
                src={product3}
                alt="product"
              />
              <div className="flex flex-col  w-full  text-base">
                <h3 className="font-semibold text-lg">Apple watch</h3>
                <p className=" text-gray-400 font-semibold ">Apple</p>
                <div className="mt-6">
                  <span className=" mr-12 ">$1120</span>
                  <span className="px-4 my-2 border-solid border-2 border-zinc-200 m-0 cursor-pointer">
                    -
                  </span>
                  <span className="px-4 my-2 border-solid border-2 border-zinc-200 m-0 ">
                    0
                  </span>
                  <span className="px-4 my-2 border-solid border-2 border-zinc-200 m-0 ">
                    +
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
