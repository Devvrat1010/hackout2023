import React, { useEffect } from "react";
import Login_Navbar from "../components/Login_NavBar";
import TypeWriter from "typewriter-effect/dist/core";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SignOutButton, useAuth } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Reception() {
  const { isSignedIn } = useAuth();

  const typewriter = React.useRef(null);
  useEffect(() => {
    const typewriterInstance = new TypeWriter(typewriter.current, {
      delay: 70,
      loop: true,
      deleteSpeed: 10,
    });
    typewriterInstance
      .pause(500)
      .typeString("Transforming ")
      .pause(500)
      .typeString("Healthcare ")
      .pause(500)
      .typeString("Digitally")
      .pause(3000)
      .deleteChars(9)
      .start();
  }, []);

  return (
    <div className="h-screen">
      <Login_Navbar />
      <div className=" title-font sm:text-4xl text-4xl mb-2 mt-10 font-semibold text-blue-500 p-10 font-Roboto Slab">
        WELCOME TO HEALTHSYNC
        <br></br>
        <span className="leading-loose text-blue-900 font-bold">
          {" "}
          <span className="text-4xl" ref={typewriter}></span>
        </span>
      </div>
      <div className="flex gap-x-10 justify-between p-10">
        <div className="-mt-12">
          <h1 className="text-xl font-poppins text-slate-500 tracking-tight opacity-95">
            At <span className="text-blue-900 italic">HealthSync</span>, we're
            pioneering a new era in healthcare<br></br> by harnessing the power
            of technology to elevate patient care,<br></br> simplify medical
            processes.Our platform is a testment to the<br></br> fusion of
            innovation and compassionate healthcare, designed <br></br> to
            empower medical professionals, streamline patient experiences,{" "}
            <br></br>
          </h1>
          <div className="flex -ml-16">
            <div className="flex gap-3">
              <AiFillInstagram className="text-3xl mt-8 ml-16 text-blue-900 hover:text-blue-700" />
              <p className=" mt-6 text-4xl">|</p>
            </div>
            <div className="flex gap-3 -ml-10">
              <BiLogoGmail className="text-3xl mt-8 ml-14 text-blue-900 hover:text-blue-700" />
              <p className=" mt-6 text-4xl">|</p>
            </div>
            <div className="flex -ml-10">
              <FaFacebookF className="text-3xl mt-8 ml-12 text-blue-900 hover:text-blue-700" />
            </div>
            <div className="mt-5 ml-64">
              <button className="bg-blue-800 text-white px-6 py-4 rounded-sm transition duration-300 ease-in-out transform hover:translate-y-1 hover:bg-blue-600 hover:text-black font-semibold">
                About Us
              </button>
            </div>
          </div>
        </div>
        <div className="-mt-60 max-w-lg mx-auto relative overflow-hidden">
          <img
            className="mr-10 w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 "
            src="https://doodleipsum.com/700/flat?i=ca2314396afed76441fb67a45df7649d"
          />
        </div>

        {/* <div className="ml-3 title-font sm:text-4xl text-3xl mb-4 font-light text-gray-900 p-10 font-poppins transition duration-300 ease-in-out transform hover:scale-105">
        WELCOME TO HEALTHSYNC
        <br />
        <span className="leading-normal text-blue-900 font-bold">
          <span ref={typewriter}></span>
        </span>
      </div>
      <div className="flex gap-x-10 justify-between p-10">
        <div className="-mt-12">
          <h1 className="text-lg font-bebas opacity-70 leading-5">
            At <span className="text-blue-900 italic font-semibold">HealthSync</span>, we're pioneering a new era in healthcare<br />
            by harnessing the power of technology to elevate patient care,<br />
            simplify medical processes. Our platform is a testament to the<br />
            fusion of innovation and compassionate healthcare, designed <br />
            to empower medical professionals, streamline patient experiences,
          </h1>
        </div>
        <div className="-mt-96">
          <img className="mr-10" src="https://doodleipsum.com/700/flat?i=ca2314396afed76441fb67a45df7649d" alt="HealthSync" />
        </div>  */}
        <div></div>
        {isSignedIn && (
          <SignOutButton className="cursor-pointer font-mono rounded-lg px-2 text-center py-2 border border-solid border-white border-1 hover:bg-white hover:text-black transition-all" />
        )}
      </div>
    </div>
  );
}
