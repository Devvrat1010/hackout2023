import logo from '../assets/images/logo_bg.png'

export default function Login_Navbar() {
return(
  <div className="flex justify-between">
    <div>
      <img src={logo} className='w-40 '/>
    </div>
    <div className="flex gap-20 mr-10 mt-0">
      <button className='hover:underline text-xl hover:bg-white hover:text-blue-900 hover:-translate-y-1 hover:ease-out h-10 mt-5 p-2 text-blue-900 rounded-md'>Reception</button>
      <button className='hover:underline text-xl  hover:bg-white hover:text-blue-900 hover:-translate-y-1 hover:ease-out h-10 mt-5 p-2 text-blue-900 rounded-md'>Nurse</button>
      <button className='hover:underline text-xl hover:bg-white hover:text-blue-900 hover:-translate-y-1 hover:ease-out h-10 mt-5 p-2 text-blue-900 rounded-md'>Doctor</button>
    </div>
  </div>
)
}