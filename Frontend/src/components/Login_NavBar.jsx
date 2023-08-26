// import output from '../assets/images/output.png'
import Logofinal from '../assets/images/Logofinal.png'

export default function Login_Navbar() {
return(
  <div className="flex justify-between h-1/6 bg-blue-800">
    <div className='-mt-20'>
      {/* <img src={output} className='w-1/2'/> */}
      <img src={Logofinal} className='w-1/2'/>

    </div>
    <div className="flex gap-20 mr-10 mt-0 text-end">
      {/* <button className='hover:underline text-xl hover:bg-white hover:text-blue-900 hover:-translate-y-1 hover:ease-out h-10 mt-5 p-2 text-white rounded-md font-bold font-inter'>Reception</button>
      <button className='hover:underline text-xl  hover:bg-white hover:text-blue-900 hover:-translate-y-1 hover:ease-out h-10 mt-5 p-2 text-white rounded-md font-bold font-inter'>Nurse</button>
      <button className='hover:underline text-xl hover:bg-white hover:text-blue-900 hover:-translate-y-1 hover:ease-out h-10 mt-5 p-2 text-white rounded-md font-bold font-inter'>Doctor</button> */}/
      <button class="group text-white opacity-95 tracking-tight transition-all duration-300 ease-in-out" href="#">
  <span class="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
    Reception
  </span>
</button>
      <button class="group text-white opacity-95 tracking-tight transition-all duration-300 ease-in-out" href="#">
  <span class="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
    Nurse
  </span>
</button>
      <button class="group text-white opacity-95 tracking-tight transition-all duration-300 ease-in-out" href="#">
  <span class="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
    Doctor
  </span>
</button>
    </div>
  </div>
)
}