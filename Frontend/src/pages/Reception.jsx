import Login_Navbar from "../components/Login_NavBar"
import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
  strings: ['Transforming Healthcare Digitally'],
  autoStart: true,
});
export default function Reception() {
  return (
    <div>
      <Login_Navbar />
      <div className=" title-font sm:text-4xl text-3xl mb-4 font-light text-gray-900 p-10 font-poppins transition duration-300 ease-in-out transform hover:scale-105">WELCOME TO HEALTHSYNC
       <br></br><span className="leading-normal text-blue-900 font-bold">Transforming Healthcare<br></br> Digitally</span>
</div>
      <div className="flex gap-x-10 justify-between p-10">
        <div className="-mt-12"> 
          <h1 className="text-lg font-bebas opacity-70 leading-5 "> 
          At <span className="text-blue-900 italic font-semibold">HealthSync</span>, we're pioneering a new era in healthcare<br></br> by harnessing the power of technology to elevate patient care,<br></br> simplify medical processes.Our platform is a testment to the<br></br> fusion of innovation and compassionate healthcare, designed <br></br> to empower medical professionals, streamline patient experiences, <br></br>
          </h1>
        </div>
        <div className="-mt-96">
          <img className="mr-10 " src="https://doodleipsum.com/700/flat?i=ca2314396afed76441fb67a45df7649d"/>
        </div>
      </div>
    </div>
  );
}
