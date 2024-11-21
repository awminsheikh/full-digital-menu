import logoBlack from "./../image/logoBlack.png"
const Footer = () => {
  return (
    <div className="w-full h-full bg-yellow-400 mt-20 rounded-t-full flex flex-col items-center justify-center">
        <img src={logoBlack} className="w-20" alt="" />
        <p className="text-lg font-thin ">restaurant name</p>
        <p className="font-thin">
            restaurant number 
            <span className="ms-3">
                <a href="#">+989000000000</a>
            </span>
        </p>
        <p className="font-thin text-sm align-content-center text-center">
            restaurant address 
            <p>
                tabriz,valiasr,homafar,foroghi
            </p>
        </p>
    </div>
  )
}

export default Footer