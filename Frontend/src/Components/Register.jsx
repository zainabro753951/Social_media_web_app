import React from "react";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "./Button";
import SmallPop from "./SmallPop";
import { IoWifiSharp } from "react-icons/io5";
import { AiOutlineInteraction } from "react-icons/ai";
const Register = () => {
  return (
    <div className="w-full bg-slate-950 text-white font-family-poppins">
      <div className="max-w-[1200px] mx-auto min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 my-10 items-center overflow-hidden rounded-3xl bg-slate-800 w-[80%]">
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
                  icon={<AiOutlineInteraction />}
                  text={"Interact"}
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
          <div className="px-16 py-24">
            <div className="flex items-center gap-1.5">
              <span className="p-2 bg-theme-blue rounded-md">
                <IoMdShare />
              </span>
              <h2 className="text-theme-blue font-semibold">ShareFun</h2>
            </div>
            <div className="mt-4">
              <h1 className=" font-semibold">Create your account</h1>
            </div>
            <form
              action=""
              method="post"
              className="mt-8 w-full flex flex-col gap-5"
            >
              <div className="flex flex-col gap-8">
                <div className="w-full flex gap-3">
                  <div className="flex flex-col w-full">
                    <label
                      className="text-gray-300 mb-1 text-sm"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="py-2.5 w-full rounded-lg border bg-transparent"
                      placeholder="John"
                      id="firstName"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className="text-gray-300 mb-1 text-sm"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="py-2.5 w-full rounded-lg border bg-transparent"
                      placeholder="Dock"
                      id="lastName"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-300 mb-1 text-sm" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="py-2.5 w-full rounded-xl border bg-transparent"
                    placeholder="example@example.com"
                    id="email"
                  />
                </div>
                <div className="flex w-full gap-3">
                  <div className="flex w-full flex-col">
                    <label
                      className="text-gray-300 mb-1 text-sm"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="py-2.5 w-full rounded-xl border bg-transparent"
                      placeholder="*** ***"
                      id="password"
                    />
                  </div>
                  <div className="flex w-full flex-col">
                    <label
                      className="text-gray-300 mb-1 text-sm"
                      htmlFor="Conpassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="py-2.5 w-full rounded-xl border bg-transparent"
                      placeholder="*** ***"
                      id="Conpassword"
                    />
                  </div>
                </div>
              </div>

              <Button
                text={"Creact Account"}
                bgColor={"theme-blue"}
                hoverBg={"opacity-70"}
              />
            </form>
            <div className="mt-4">
              <p className="text-gray-300 text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="text-theme-blue">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
