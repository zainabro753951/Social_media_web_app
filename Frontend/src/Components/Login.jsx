import React from "react";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "./Button";
import SmallPop from "./SmallPop";
import { IoWifiSharp } from "react-icons/io5";
import { AiOutlineInteraction } from "react-icons/ai";
const Login = () => {
  return (
    <div className="w-full bg-slate-950 text-white font-family-poppins">
      <div className="max-w-[1200px] mx-auto min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 my-10 items-center overflow-hidden rounded-3xl bg-slate-800 w-[80%]">
          <div className="px-16 py-24">
            <div className="flex items-center gap-1.5">
              <span className="p-2 bg-theme-blue rounded-md">
                <IoMdShare />
              </span>
              <h2 className="text-theme-blue font-semibold">ShareFun</h2>
            </div>
            <div className="mt-4">
              <h1 className=" font-semibold">Log in to your account</h1>
              <h2 className="text-gray-500 text-sm">Welcome back.</h2>
            </div>
            <form
              action=""
              method="post"
              className="mt-8 w-full flex flex-col gap-5"
            >
              <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                  <label className="text-gray-300 mb-1 text-sm" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="py-2.5 w-full rounded-full border bg-transparent"
                    placeholder="example@example.com"
                    id="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-gray-300 mb-1 text-sm"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="py-2.5 w-full rounded-full border bg-transparent"
                    placeholder="example@example.com"
                    id="password"
                  />
                </div>
              </div>
              <div className="w-full flex justify-end">
                <Link className="text-theme-blue transition-all duration-200 hover:opacity-75">
                  Forget password ?
                </Link>
              </div>
              <Button
                text={"Login"}
                bgColor={"theme-blue"}
                hoverBg={"opacity-70"}
              />
            </form>
            <div className="mt-4">
              <p className="text-gray-300 text-center">
                Don't have a account ?{" "}
                <Link to={"/register"} className="text-theme-blue">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-theme-blue flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center gap-10 relative">
              <div className="absolute -left-10 top-0">
                <SmallPop
                  icon={<IoWifiSharp />}
                  text={"Connect"}
                  textColor={"black"}
                  bgColor={"white"}
                />
              </div>
              <div className="absolute -left-2 bottom-16">
                <SmallPop
                  icon={<AiOutlineInteraction />}
                  text={"Interact"}
                  textColor={"black"}
                  bgColor={"white"}
                />
              </div>
              <div className="absolute -right-10 top-5">
                <SmallPop
                  icon={<IoMdShare />}
                  text={"Share"}
                  textColor={"black"}
                  bgColor={"white"}
                />
              </div>
              <div className="w-[200px] rounded-full shadow-xl overflow-hidden h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src="/imgs/login.jpeg"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-gray-300">
                  Connect with friends and have share for fun.
                </h2>
                <h3 className="text-sm text-gray-300 opacity-95 mt-1 text-center">
                  Share memories for your friends and world.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
