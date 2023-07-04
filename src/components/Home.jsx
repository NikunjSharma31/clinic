import React from "react";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube.svg";
import Whatsapp from "../images/whatsapp.svg";
import whatsappblue from "../images/whatsappblue.svg";
import Doctor from "../images/Doctor.svg";
import injection from "../images/injection.svg";
import medicine from "../images/medicine.svg";
import heart from "../images/heart.svg";
import plus from "../images/plus.svg";
import Merck from "../images/Merck.svg";
import Info from "../images/Info.svg";
import Novartis from "../images/Novartis.svg";
import Pfizer from "../images/Pfizer.svg";
import calendar from "../images/calendar.svg";
import split from "../images/split call.svg";
import Sanofi from "../images/Sanofi.svg";
import google from "../images/google.svg";
import Solo from "../images/SoLo Funds.svg";
import phone from "../images/phone.svg";
import Homedis from "../images/Homedis.svg";
import Bag from "../images/Medical Bag.svg";
import checkup from "../images/doctor checkup.svg";

const Home = () => {
  return (
    <header className="w-full ">
      <div className="px-5 container mx-auto flex flex-wrap py-5  flex-col md:flex-row items-center overflow-hidden">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl font-fahkwang text-blue-500">Expert Solutions</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
          <a className="mr-5 hover:text-gray-900 cursor-pointer hover:font-bold transition-all duration-100 ease-in-out">Schedule</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer hover:font-bold transition-all duration-100 ease-in-out">Let's Talk</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer hover:font-bold transition-all duration-100 ease-in-out">Contact</a>
        </nav>
      </div>
      <div>
        <section className="px-5 body-font ">
          <div className="absolute top-20 left-80">
            <img className="md:w-24 md:h-24 sm:h-16 sm:w-16  " src={Bag} alt="bag" />
          </div>
          <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font w-1/ text-blue-500 sm:text-5xl text-3xl mb-4 font-medium  ">
                Known for our expertise.
                <span className="hidden lg:inline-block mt-2">Chosen for our care.</span>
              </h1>
              <p className="mb-8 leading-relaxed">The schedule of visiting should also be included and if you think it is necessary, you can offer the patient the opportunity to book an appointment.</p>
              <div className="flex justify-center ">
                <button className="items-center gap-4 rounded-full inline-flex text-white bg-gradient-to-l from-blue-600 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg">
                  <img src={phone} alt="call" />
                  Book a call
                </button>
              </div>
            </div>
            <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 ">
              <img className="object-cover object-center rounded" alt="hero" src={Doctor} />
            </div>
          </div>
          <div className="absolute  lg:top-1/2 xl:top-[25rem] lg:left-80 left-60 hidden lg:flex">
            <img src={checkup} className="w-72 h-72" alt="doctor-checkup" />
          </div>
        </section>
      </div>
      <div className="mt-12 lg:mt-36 bg-blue-100  ">
        <h1 className="text-center  font-bold text-3xl lg:text-4xl pt-10">Partners & Friends</h1>
        <section className="">
          <div className="container px-5 py-1  mx-auto">
            <div className="flex flex-wrap lg:px-12 gap-8 lg:gap-0 ml-20 md:ml-44 lg:ml-0 justify-center  items-center">
              <div className="lg:p-4 sm:w-56 w-1/3">
                <img src={Sanofi} className="lg:w-24 lg:h-24 w-16 h-16 md:h-20 md:w-20" alt="Sanofi" />
              </div>
              <div className="lg:p-4 sm:w-56 w-1/3">
                <img src={Merck} className="lg:w-24 lg:h-24 w-16 h-16" alt="Merck" />
              </div>
              <div className="lg:p-4 sm:w-56 w-1/3">
                <img src={Novartis} className="lg:w-24 lg:h-24 w-16 h-16" alt="Novartis" />
              </div>
              <div className="lg:p-4 sm:w-56 w-1/3">
                <img src={Pfizer} className="lg:w-32 lg:h-24 w-16 h-16" alt="Pfizer" />
              </div>
              <div className="lg:p-4 sm:w-56 w-1/3 -ml-12 md:-ml-28 lg:ml-0">
                <img src={Solo} className="w-42 h-24 " alt="Solo" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" lg:py-16 lg:px-24 px-12 py-12 overflow-hidden bg-gray-100">
        <div className=" lg:flex lg:flex-row flex flex-col gap-2 lg:gap-0 justify-between">
          <h1 className="font-bold text-center text-3xl lg:text-4xl">Our Services</h1>
          <p className="lg:w-1/2 lg:text-left w-full text-indigo-300 text-center">Serving all people through exemplary health care, education, research and community outreach.</p>
        </div>

        <section className=" ">
          <div className="container  py-14 lg:py-24  mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3 ">
                <div className="flex rounded-2xl  h-full bg-white p-8 flex-col">
                  <div className="flex flex-col items-start mb-3 space-y-3">
                    <img src={medicine} className="lg:w-16 lg:h-16 w-12 h-12" alt="medicine" />
                    <h2 className="text-gray-900 lg:text-2xl text-xl title-font font-medium">24/7 Medical Support</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-sm  text-blue-400 ">Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis</p>
                    <button className="mt-5 font-bold text-white bg-gradient-to-l from-indigo-500 to-blue-500 rounded-full w-full h-10 lg:h-12 lg:gap-10 gap-3 inline-flex items-center">
                      <img src={Whatsapp} className="ml-6 text-white text-xl lg:w-8 lg:h-8 w-5 h-5" alt="whatsapp" /> Connect
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 ">
                <div className="flex rounded-2xl  h-full bg-white p-8 flex-col">
                  <div className="flex flex-col items-start mb-3 space-y-3">
                    <img src={heart} className="lg:w-16 lg:h-16 w-12 h-12" alt="heart" />
                    <h2 className="text-gray-900 lg:text-2xl text-xl title-font font-medium">Medical Check Up </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-sm  text-blue-400 ">Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis</p>
                    <button className="mt-5 font-bold text-white bg-gradient-to-l from-indigo-500 to-blue-500 rounded-full w-full h-10 lg:h-12 lg:gap-10 gap-3 inline-flex items-center">
                      <img src={Whatsapp} className="ml-6 text-white text-xl lg:w-8 lg:h-8 w-5 h-5" alt="whatsapp" /> Connect
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 ">
                <div className="flex rounded-2xl  h-full bg-white p-8 flex-col">
                  <div className="flex flex-col items-start mb-3 space-y-3">
                    <img src={injection} className="lg:w-16 lg:h-16 w-12 h-12" alt="injection" />
                    <h2 className="text-gray-900 lg:text-2xl text-xl title-font font-medium">Professional Doctor</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-sm  text-blue-400 ">Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis</p>
                    <button className="mt-5 font-bold text-white bg-gradient-to-l from-indigo-500 to-blue-500 rounded-full w-full h-10 lg:h-12 lg:gap-10 gap-3 inline-flex items-center">
                      <img src={Whatsapp} className="ml-6 text-white text-xl lg:w-8 lg:h-8 w-5 h-5" alt="whatsapp" /> Connect
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className=" ">
          <div className="container  py-16 ">
            <div className="p-4 lg:w-full flex sm:ml-0 md:ml-8  lg:ml-2 justify-center flex-wrap">
              <img alt="ecommerce" className="lg:w-1/2 sm:w-3/4 w-full  lg:h-auto lg:-ml-14 sm:h-1/3  rounded" src={google} />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6  lg:ml-0 text-center lg:text-left lg:mt-0 space-y-5 ">
                <h1 className="text-gray-900 text-4xl title-font lg:mt-7  font-medium mb-1 leading-10">We’re just better at making you feel better</h1>

                <p className="leading-relaxed text-blue-500 ">Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                <div className="flex justify-center lg:justify-start">
                <button className="flex gap-5 items-center  rounded-full text-white bg-gradient-to-l from-indigo-500 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 ">
                  <img src={split} alt="split" />
                  Find us
                </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="z-10 ">
          <div className="container   py-16 ">
            <div className="p-4 lg:w-full justify-center md:ml-8  lg:-ml-12  flex  flex-wrap">
              <div className="lg:w-1/2 w-full text-center lg:text-left lg:pl-10 lg:py-6 mt-6  lg:-ml-12  lg:mt-10 space-y-5 ">
                <h1 className="text-gray-900 text-4xl title-font lg:mt-7 font-medium mb-1 leading-10">Nothing is more important than your health</h1>

                <p className="leading-relaxed text-blue-500">Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                <div className="flex justify-center lg:justify-start">
                <button className="flex gap-5 rounded-full text-white bg-gradient-to-l from-indigo-500 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 ">
                  <img className="" src={Info} alt="Info" />
                  Learn more
                </button>
                </div>
              </div>
              {/* <div className="lg:w-96 sm:w-1/2 w-full lg:h-auto h-1/3 mt-12 lg:mt-0 flex justify-center  lg:justify-start"> */}
              <img alt="ecommerce" className="lg:w-96 xl:w-1/3 sm:w-3/4 w-full lg:h-auto h-1/3 mt-12 lg:ml-20  lg:mt-0 object-cover object-center " src={Homedis} />
              {/* </div> */}
            </div>
          </div>
        </section>

        <section className=" ">
          <div className="container sm:ml-0 md:ml-14 lg:ml-0  flex flex-col py-12 justify-center items-center  text-white">
            <div className="lg:w-full p-10   flex flex-col mb-16 items-center text-center bg-gradient-to-l from-indigo-500 to-blue-500 px-12 rounded-3xl ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">Schedule a call with us soon.</h1>
              <p className="mb-8 text-sm leading-relaxed text-center lg:w-2/3">Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                <button className="border border-1 w-56 inline-flex py-3 px-5 rounded-full items-center hover:bg-gray-200 hover:text-blue-500 focus:outline-none gap-3">
                  <img src={calendar} alt="calendar" />
                  Schedule a date
                </button>
                <button className="bg-gray-100 w-56 lg:w-44 text-blue-500 inline-flex py-3 px-5 rounded-full items-center  hover:bg-gray-200 focus:outline-none gap-3">
                  <img src={whatsappblue} alt="whatsapp" />
                  Whatsapp
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <footer className="">
        <div className="container px-36 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col gap-36">
          <div className="w-1/4 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 ml-auto ">
           
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer> */}
      <footer className="">
        <div className="bg-slate-900 text-white flex flex-col ">
          <div className="md:flex-row flex flex-col gap-10  lg:gap-32 px-12 py-12 ">
            <nav>
              <ul className="space-y-5 ">
                <li className="flex">
                  <h1 className="text-3xl ">Expert Solutions</h1>
                  <img src={plus} className="-mt-2 w-12 h-12" alt="plus" />
                </li>

                <li>
                  <p className="w-3/4">Pinnacle Corporate Park, next to Trade Centre Bkc, Bandra Kurla Complex, Santacruz East, Mumbai, Maharashtra 400051</p>
                </li>
                <li className="flex gap-7">
                  <img src={youtube} alt="youtube" />
                  <img src={facebook} alt="facebook" />
                  <img src={Whatsapp} alt="whatsapp" />
                </li>
              </ul>
            </nav>
            <div>
              <nav >
                <ul >
                  <li>
                    <h1 className="text-3xl md:w-32 ">Site Map</h1>
                  </li>
                  <li>Home</li>
                  <li>Services</li>
                  <li>About us</li>
                  <li>Schedule a call</li>
                </ul>
              </nav>
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <h1 className="text-3xl ">Contact</h1>
                  </li>
                  <li>+91 827637267387</li>
                  <li>info@expertsolutions.com</li>
                  <li>Telp: +5646544654</li>
                </ul>
              </nav>
            </div>
          </div>
          <div>
            <div className="lg:w-2/3 w-2/3 md:w-2/3 sm:w-2/3 items-center md:text-left text-center ml-16 sm:ml-24 md:ml-40  sm:40 lg:ml-56 h-[0.1rem] text-white bg-white"></div>
            <p className="text-center mt-10 pb-10">Copyright © Expertsolutions 2023</p>
          </div>
        </div>
      </footer>
    </header>
  );
};

export default Home;
