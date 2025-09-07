import {
  faBriefcase,
  faDownload,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import CvLink from "../assets/cv.pdf";
import HeroImg from "../assets/images/d2.png";

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
                src={HeroImg}
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
                  <div className="pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-0 pl-40 xs:pl-0 border border-black-3 rounded-5 mb-30 xs:mb-25">
                    <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                      10
                    </h3>
                    <p className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5">
                      years of <span className="block">experience</span>
                    </p>
                  </div>
                </div>
                <div className="w-1/2 px-15">
                  <div className="pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-0 pl-40 xs:pl-0 border border-black-3 rounded-5 mb-30 xs:mb-25">
                    <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                      3000
                    </h3>
                    <p className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5">
                      completed <span className="block">projects</span>
                    </p>
                  </div>
                </div>
                <div className="w-1/2 px-15">
                  <div className="pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-0 pl-40 xs:pl-0 border border-black-3 rounded-5">
                    <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                      1000
                    </h3>
                    <p className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5">
                      happy <span className="block">customers</span>
                    </p>
                  </div>
                </div>
                <div className="w-1/2 px-15">
                  <div className="pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-0 pl-40 xs:pl-0 border border-black-3 rounded-5">
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
                VueJs
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
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p90 float-none mx-auto bg-black-3">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                NextJs
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p60 float-none mx-auto bg-black-3">
                <span>60%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                NodeJs
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p85 float-none mx-auto bg-black-3">
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                agile
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p87 float-none mx-auto bg-black-3">
                <span>87%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                Tailwind Css
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p80 float-none mx-auto bg-black-3">
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                Figma & Adobe XD
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p95 float-none mx-auto bg-black-3">
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                git & github & bitbucket
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p50 float-none mx-auto bg-black-3">
                <span>50%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                c# & c++
              </h6>
            </div>
            <div className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16">
              <div className="c100 p50 float-none mx-auto bg-black-3">
                <span>50%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                unity 3d
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
                    2016 - Present
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    ThemeForest Author
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      envato
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Design and develop premium themes and templates for the
                    ThemeForest marketplace.
                  </p>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Maintain high customer satisfaction ratings through
                    quality code and responsive support
                  </p>
                </li>
                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2020 - 2022
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    Front-End Supervisor
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      Jobed, kuwait
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Led front-end development initiatives and managed project
                    timelines
                  </p>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Collaborated with backend teams to integrate APIs and
                    deliver seamless user experiences
                  </p>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Mentored junior developers and established coding
                    standards
                  </p>
                </li>
                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2019 - 2021
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    Front-End Supervisor
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      Smart Vision, Egypt
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Supervised multiple concurrent web development projects
                  </p>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Coordinated with cross-functional teams to ensure timely
                    project delivery
                  </p>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Implemented modern front-end architectures and best
                    practices
                  </p>
                </li>

                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2018 - 2019
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    Front-End Developer
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      Elryad Company, Egypt
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Developed interactive web interfaces using modern
                    JavaScript frameworks
                  </p>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Transformed UI/UX designs into pixel-perfect, responsive
                    web pages
                  </p>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Implemented complex JavaScript functionalities and user
                    interactions
                  </p>
                </li>

                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2016 - 2018
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    Tech Lead
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      MoovStore, saudi arabia
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Managed and mentored a team of web developers
                  </p>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Architected scalable front-end solutions for e-commerce
                    platforms
                  </p>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    - Established development workflows and quality assurance
                    processes
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
                    2013 - 2017
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    Bachelor's Degree in Computer and Information Sciences
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80">
                      Mansoura University, Egypt
                    </span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    Graduated with a Bachelor's degree in Computer and
                    Information Sciences from Mansoura University, Egypt, in
                    2017.
                  </p>
                </li>
                <li className="relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-black-4 after:w-1 after:h-full">
                  <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <span className="text-white text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-black-3 opacity-80 font-Open-sans uppercase">
                    2011 - 2013
                  </span>
                  <h5 className="uppercase text-fs-18 mt-7 mb-10">
                    high school diploma
                    <span className="opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-white before:left-7 before:top-9 before:opacity-80"></span>
                  </h5>
                  <p className="font-Open-sans text-light-grey text-fs-14">
                    Graduated with a High School Diploma from Elmansoura High
                    School, Egypt, in 2013.
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
