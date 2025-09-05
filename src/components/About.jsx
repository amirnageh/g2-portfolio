import {
  faBriefcase,
  faDownload,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import CvLink from "../assets/cv.pdf";

const About = () => {
  return (
    <div
      className="page"
      id="about"
      style={{
        backgroundColor: "#111",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div className="w-full">
        <div className="mx-auto w-full relative py-80 text-center xs:px-25 xs:pt-16 xs:pb-14 xs:bg-black-3 xs:border-b xs:border-black-4 xs:fixed xs:left-0 xs:right-0 xs:top-0 xs:z-20">
          <h2 className="text-fs-56 font-black font-Poppins uppercase text-white m-0 xs:text-fs-26 xs:text-left xs:leading-lh-1.2">
            about <span className="text-accent">me</span>
          </h2>
          <span className="text-fs-110 absolute left-0 right-0 top-1/2 tracking-10 leading-lh-0.7 font-extrabold text-muted -translate-y-1/2 uppercase xs:hidden">
            resume
          </span>
        </div>
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex flex-row down-lg:flex-col">
            <div className="xl:basis-1/2 lg:basis-5/12 down-lg:basis-full">
              <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-22 text-white font-semibold">
                personal infos
              </h3>
              <img
                className="hidden xs:block rounded-full border-4 border-solid border-black-3 w-230 h-230 mb-25 mx-auto"
                src="assets/img/dark-img-mobile.jpg"
                alt=""
              />
              <div className="flex justify-between xs:justify-start font-Open-sans capitalize">
                <div className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14">
                  <div>
                    <span className="opacity-80"> first name : </span>
                    <span className="xs:block custom-md-2:block font-semibold">
                      amir
                    </span>
                  </div>
                  <div>
                    <span className="opacity-80"> last name : </span>
                    <span className="xs:block custom-md-2:block font-semibold">
                      nageh
                    </span>
                  </div>
                  <div>
                    <span className="opacity-80"> age : </span>
                    <span className="xs:block custom-md-2:block font-semibold">
                      31 years
                    </span>
                  </div>
                  <div>
                    <span className="opacity-80"> nationality : </span>
                    <span className="xs:block custom-md-2:block font-semibold">
                      egyptian
                    </span>
                  </div>
                  <div>
                    <span className="opacity-80"> freelance : </span>
                    <span className="xs:block custom-md-2:block font-semibold">
                      available
                    </span>
                  </div>
                </div>
                <div className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14">
                  <div>
                    <span className="opacity-80"> address : </span>
                    <span className="xs:block custom-md-2:block font-semibold">
                      egypt
                    </span>
                  </div>
                  <div>
                    <span className="opacity-80"> phone : </span>
                    <span className="xs:block custom-md-2:block font-semibold">
                      +201024517052
                    </span>
                  </div>
                  <div>
                    <span className="opacity-80"> email : </span>
                    <span className="xs:block custom-md-2:block font-semibold lowercase">
                      amir.nageh15@gmail.com
                    </span>
                  </div>
                  <div>
                    <span className="opacity-80"> linkedin : </span>
                    <span className="xs:block custom-md-2:block font-semibold">
                      in/amirnageh
                    </span>
                  </div>
                  <div>
                    <span className="opacity-80"> langages : </span>
                    <span className="xs:block custom-md-2:block font-semibold">
                      english, french, arabic
                    </span>
                  </div>
                </div>
              </div>
              <NavLink
                className="button mt-30 overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                to={CvLink}
                target="_blank"
              >
                <span className="relative z-20 text-white">download cv</span>
                <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-download bg-accent">
                  <FontAwesomeIcon icon={faDownload} />
                </span>
              </NavLink>
            </div>
            <div className="xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
              <div className="flex down-lg:-mx-15 flex-wrap">
                <div className="w-1/2 px-15">
                  <div className="pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-black-3 rounded-5 mb-30 xs:mb-25">
                    <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                      10
                    </h3>
                    <p className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5">
                      years of <span className="block">experience</span>
                    </p>
                  </div>
                </div>
                <div className="w-1/2 px-15">
                  <div className="pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-black-3 rounded-5 mb-30 xs:mb-25">
                    <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                      3000
                    </h3>
                    <p className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5">
                      completed <span className="block">projects</span>
                    </p>
                  </div>
                </div>
                <div className="w-1/2 px-15">
                  <div className="pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-black-3 rounded-5">
                    <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                      1000
                    </h3>
                    <p className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5">
                      happy <span className="block">customers</span>
                    </p>
                  </div>
                </div>
                <div className="w-1/2 px-15">
                  <div className="pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-black-3 rounded-5">
                    <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                      5
                    </h3>
                    <p className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5">
                      awards <span className="block">won</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-t border-solid border-t-black-3 mx-auto max-w-40prcent mt-70 mb-55" />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            my skills
          </h3>
          <div className="flex w-full flex-wrap">
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p90 float-none mx-auto bg-black-3">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                html
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p90 float-none mx-auto bg-black-3">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                javascript
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p90 float-none mx-auto bg-black-3">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                css
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p40 float-none mx-auto bg-black-3">
                <span>40%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                php
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p75 float-none mx-auto bg-black-3">
                <span>75%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                wordpress
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p90 float-none mx-auto bg-black-3">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                jquery
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p65 float-none mx-auto bg-black-3">
                <span>65%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                Vue
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p90 float-none mx-auto bg-black-3">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                react
              </h6>
            </div>
          </div>

          <hr className="border-t border-solid border-t-black-3 mx-auto max-w-40prcent mt-35 mb-55" />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            experience & education
          </h3>

          <div className="flex down-sm:flex-col from-sm:mb-40">
            <div className="w-1/2 down-sm:w-full">
              <ul>
                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2018 - Present
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    web developer
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      envato
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                    labore adipisicing elit,
                  </p>
                </li>
                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2013 - 2018
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    UI/UX Designer
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      Themeforest
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                    labore adipisicing elit,
                  </p>
                </li>
                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2005 - 2013
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    consultant
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      Videohive
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                    labore adipisicing elit,
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-1/2 down-sm:w-full">
              <ul>
                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2015
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    Engineer Degree
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      Oxford University
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                    labore adipisicing elit,
                  </p>
                </li>
                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2012
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    Master Degree
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      Kiev University
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                    labore adipisicing elit,
                  </p>
                </li>
                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2009
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    Bachelor Degree
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      Tunis High School
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                    labore adipisicing elit,
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
