import React, { useEffect } from "react";
import Login_Navbar from "../components/Login_NavBar";
import TypeWriter from "typewriter-effect/dist/core";

export default function Reception() {
  const typewriter = React.useRef(null);
  useEffect(() => {
    const typewriterInstance = new TypeWriter(typewriter.current, {
      delay: 70,
      loop: true,
      deleteSpeed: 10,
  });
  typewriterInstance
      .pause(500)
      .typeString('Transforming ')
      .pause(500)
      .typeString('Healthcare ')
      .pause(500)
      .typeString('Digitally')
      .pause(3000)
      .deleteChars(9)
      .start();
  }, []);

  return (
    <div>
      <Login_Navbar />
      <div className="ml-3 title-font sm:text-4xl text-3xl mb-4 font-light text-gray-900 p-10 font-poppins transition duration-300 ease-in-out transform hover:scale-105">
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
        </div>
      </div>
    </div>
  );
}
