import React from "react";
import Logo from "../images/Logo.svg";
import Arrow from "../images/Arrow.svg";
import UpArrow from "../images/UpArrow.svg";
import Dots from "../images/Dots.svg";
import Star from "../images/Star.svg";
import Play from "../images/PlayCircle.svg";
import Select from "../images/Select.svg";
import HalfCircle from "../images/HalfCircle.svg";
import GirlsPlaying from "../images/GirlsPlaying.svg";
import BusinessDiscussion from "../images/BusinessDiscussion.svg";
import Contactstar from "../images/Contactstar.svg";
import Submit from "../images/Submit.svg";
// import Facebook from "../images/Facebook.svg";
// import Whatsapp from "../images/Whatsapp.svg";
import Instagram from "../images/Instagram.svg";
import Linkedin from "../images/Linkedin.svg";
import LifeInsurance from "../images/LifeInsurance.svg";
import PosterHelp from "../images/PosterHelp.svg";
import BusinessmanStrategy from "../images/BusinessmanStrategy.svg";

const Navbar = () => {
  return (
    <div className="px-10 py-5 h-auto w-screen overflow-hidden">
      <div>
        <nav>
          <div className=" flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex gap-1 md:gap-3 ">
              <img className="w-[14px] md:w-[18px]" src={Logo} alt="logo" />
              <h1 className="md:text-2xl text-[.9rem] font-fraunces font-extrabold">Expert Solutions</h1>
            </div>
            <div className="absolute top-0 left-[40%] hidden md:flex">
              <img className="w-[200px] h-[150px]" src={Arrow} alt="arrow" />
            </div>
            <div className=" font-fraunces text-[.8rem] mt-1 md:text-[16px] lg:text-[17px]">
              <ul className="flex gap-4">
                <div className="group cursor-pointer">
                  <li>Services</li>
                  <span className="transition-all duration-500 block h-0.5 lg:h-1 max-w-0 group-hover:max-w-[2rem] bg-blue-400"></span>
                </div>
                <div className="group cursor-pointer">
                  <li>Let's Talk</li>
                  <span className="transition-all duration-500 block h-0.5 lg:h-1 max-w-0 group-hover:max-w-[2rem] bg-blue-400"></span>
                </div>
                <div className="group cursor-pointer">
                  <li>Contact</li>
                  <span className="transition-all duration-500 block h-0.5 lg:h-1 max-w-0 group-hover:max-w-[2rem] bg-blue-400"></span>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <div className="">
          <div className="sm:mt-20 mt-14 space-y-8 relative">
            <h1 className="font-fraunces text-3xl sm:text-3xl md:text-4xl lg:text-5xl md:w-[550px] lg:w-[680px] text-center sm:text-left">We Are India's Largest Online Platform For Legal & Financial Services</h1>
            <p className="font-poppins text-[0.9rem] text-center sm:text-left lg:w-[600px]">Free 90-minute webinar, Reiki will teach you effective and respectful strategies for to improve productivity and well being in your life.</p>
            <div className="flex gap-8 font-poppins justify-center sm:justify-normal px-3">
              <button className="text-[0.8rem] md:text-[1rem] flex gap-1 h-11   lg:gap-2 items-center border-[1.5px] rounded-full border-black px-2 py-2">
                <img src={Play} alt="play" />
                Learn More
              </button>
              <button className="text-[0.8rem] md:text-[1rem] flex gap-1 h-11 lg:gap-2 items-center border-[1.5px] rounded-full border-black px-3 py-2">
                <img src={UpArrow} alt="play" />
                Services
              </button>
            </div>
            <div className="absolute hidden lg:flex -top-5 -right-16">
              <img className="h-52 w-52" src={Dots} alt="dots" />
            </div>
            <div className="absolute  hidden lg:flex lg:top-[12rem] lg:right-[28rem] md:top-[14rem] md:right-[25rem]">
              <img className=" h-14 w-14" src={Star} alt="star" />
            </div>
            <div className="absolute  hidden md:flex lg:top-[26.9rem] lg:right-[15rem] md:top-[25rem] md:right-[10rem]">
              <img className="w-[6rem]" src={HalfCircle} alt="halfCircle" />
            </div>
          </div>
        </div>
        <div className="absolute lg:top-[25rem] lg:right-[52.7rem] top-[29.4rem] right-[1rem] md:top-[24rem] md:right-[24rem]">
          <img className="w-[12rem] md:w-[16rem] md:h-[16rem]" src={Select} alt="Select" />
        </div>
      </div>
      <div className="mt-[14rem]">
        <div>
          <h1 className="text-center font-fraunces lg:text-4xl text-3xl sm:text-2xl md:text-3xl ">Our Services</h1>
        </div>
        <div className="flex flex-col flex-wrap  lg:flex-row justify-around mt-20 gap-12 items-center overflow-hidden">
          {/* <div className=" flex flex-col sm:flex-row justify-between items-center gap-14 sm:gap-28">  */}
          <div className="w-[20rem] space-y-3">
            <div className="w-[16rem] border-[1.5px] border-black h-[15rem] ml-8 flex justify-center rounded-lg">
              <img className="w-80 " src={GirlsPlaying} alt="girlsPlay" />
            </div>
            <h1 className="text-center font-fraunces text-2xl">Taxation</h1>
            <p className="text-center font-fraunces">Lorem ipsum dolor sit amet in sollicitudin turpis euismod fusce platea dui nulla.</p>
          </div>
          <div className="w-[20rem] space-y-3 ">
            <div className="h-[15rem] w-[16rem] border-[1.5px] border-black ml-8  flex justify-center rounded-lg">
              <img className="w-72 " src={LifeInsurance} alt="girlsPlay" />
            </div>
            <h1 className="text-center font-fraunces text-2xl">Taxation</h1>
            <p className="text-center font-fraunces">Lorem ipsum dolor sit amet in sollicitudin turpis euismod fusce platea dui nulla.</p>
          </div>
          {/* </div> */}
          

          {/* <div> */}
          
          <div className="w-[20rem] space-y-3  ">
            <div className="h-[15rem] w-[16rem] border-[1.5px] border-black ml-8  flex justify-center rounded-lg">
              <img className="w-80 " src={BusinessDiscussion} alt="girlsPlay" />
            </div>
            <h1 className="text-center font-fraunces text-2xl">Taxation</h1>
            <p className="text-center font-fraunces">Lorem ipsum dolor sit amet in sollicitudin turpis euismod fusce platea dui nulla.</p>
          </div>
          {/* </div> */}
        <div className="lg:w-full space-y-3  lg:flex lg:justify-center lg:flex-col lg:items-center ">
          <div className="h-[15rem] w-[16rem] ml-8 lg:ml-2  border-[1.5px] border-black  flex justify-center rounded-lg">
            <img className="w-56 " src={BusinessmanStrategy} alt="girlsPlay" />
          </div>
          <div className="w-[20rem]">
            <h1 className="text-center font-fraunces text-2xl">Taxation</h1>
            <p className="text-center font-fraunces mt-3">Lorem ipsum dolor sit amet in sollicitudin turpis euismod fusce platea dui nulla.</p>
          </div>
        </div>
        </div>
        {/* </div> */}

      </div>
      <div className="mt-20 px-2">
        <div className="font-fraunces flex items-center justify-center sm:gap-36 gap-10 ">
          <img className="w-7 sm:w-12" src={Contactstar} alt="Contactstar" />
          <h1 className=" text-center text-[1.9rem] sm:text-4xl">Contact Us</h1>
          <img className="w-7 sm:w-12" src={Contactstar} alt="Contactstar" />
        </div>
        <div className="mt-14 flex flex-col lg:flex-row justify-between items-center ">
          <div className="lg:w-[30rem] w-[20rem] text-center lg:text-left space-y-5  lg:space-y-10">
            <h1 className="font-fraunces font-semibold lg:text-3xl text-xl md:text-2xl">Get in touch with us on a one to one call to discuss your issues</h1>
            <div>
              <label htmlFor="text" className="block overflow-hidden rounded-md  px-3 py-2 ">
                <span className="text-xl font-fraunces text-gray-700"> Enter your name </span>

                <input type="text" id="UserEmail" placeholder="" className=" w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm underline" />
              </label>
            </div>
            <div className="">
              <label htmlFor="text" className="block overflow-hidden rounded-md  px-3 py-2 ">
                <span className="text-xl font-fraunces text-gray-700">Email-ID </span>

                <input type="text" id="UserEmail" placeholder="" className=" w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm underline" />
              </label>
            </div>
            <div className="ml-20 lg:ml-72">
              <button className="flex flex-row border-[1.5px] gap-2 rounded-full px-2 py-2 h-10  justify-center items-center font-poppins w-36 border-black">
                <img className="" src={Submit} alt="submit" />
                Submit
              </button>
            </div>
          </div>
          <div className="mt-12 lg:mt-10">
            <img className="border-[1.5px] border-black rounded-lg w-80 h-72 lg:w-96 lg:h-[26rem]  " src={PosterHelp} alt="poster" />
          </div>
        </div>
      </div>
      <div className="lg:mt-20 mt-12 flex flex-col lg:flex-row text-center items-center space-y-6 justify-between px-2">
        <p className="font-poppins mt-5">© 2023 Expert Solutions. All rights reserved.</p>
        <div className="flex gap-9 justify-center">
          {/* <img src={Facebook} alt="Facebook" /> */}
          <img src={Instagram} alt="Instagram" />
          <img src={Linkedin} alt="Linkedin" />
          {/* <img src={Whatsapp} alt="Whatsapp" /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
