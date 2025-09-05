import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroImg from "../assets/images/d2.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="page page--current" id="home">
      <div className="bg-accent fixed w-full h-200prcnt -rotate-15 -top-1/2 -left-83prcnt hidden from-lg:block"></div>
      <div className="flex items-center h-screen w-full down-lg:mx-auto down-lg:justify-center xs:text-left down-lg:text-center">
        <img
          className="hidden from-lg:block fixed w-1/3 h-[calc(100vh-80px)] left-40 top-40 rounded-30 shadow-1 object-cover"
          src={HeroImg}
          alt=""
        />

        <div className="from-lg:ml-100/3 from-lg:w-2/3">
          <div className="mx-auto max-w-550 custom-md-1:max-w-450">
            <img
              src={HeroImg}
              className="hidden down-lg:block xs:!hidden rounded-full w-270 h-270 mx-auto mb-25 border-4 border-solid border-black-3"
              alt="my picture"
            />

            <h1 className="text-fs-40 text-accent font-Poppins relative uppercase font-bold leading-lh-50 pl-70 before:absolute before:left-0 before:top-29 before:h-4 before:w-40 before:rounded-10 custom-md-2:text-fs-42 down-xl:before:hidden down-xl:pl-0 custom-md-2:leading-lh-52 down-md:text-fs-38 down-md:leading-lh-48 down-md:mt-29 down-md:mb-13 xs:text-fs-29 xs:leading-lh-39 xs:mt-18">
              I'm Amir Nageh.
              <span className="block text-white">software engineer</span>
            </h1>
            <p className="font-Open-sans mt-15 mb-28 leading-lh-35 down-lg:mt-2.5 down-lg:mb-23 down-lg:text-fs-15 down-lg:leading-lh-30">
              I'm a software engineer based in Tunisia, specializing in building
              (and occasionally designing) exceptional digital experiences.
              Currently, I'm focused on building responsive full stack web
              applications.
            </p>
            <div
              id="link-about"
              className="button cursor-pointer overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
            >
              <span className="relative z-20 text-white">more about me</span>
              <span className="absolute -right-px bottom-0  w-55 h-55  flex items-center justify-center rounded-full text-white bg-accent">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="white"
                  fontSize={20}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
