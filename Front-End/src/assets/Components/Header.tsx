import logo from "../image/logo.png"
const Header = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="bg-yellow-400 w-full h-[10vh] absolute top-0 right-0 left-0 z-[-1}"></div>
        <div className="bg-black w-[75%] h-[27vh] rounded-lg z-10 p-2 text-white flex justify-center items-center flex-col">
            <p className='text-sm font-thin'>restaurant name here</p>
            <img src={logo} className='w-32 my-1' alt="" />
            <p className='text-sm font-thin'>welcome text here</p>
        </div>
        
    </div>
  )
}

export default Header