import projectImg1 from "../assets/images/projects/project-1.jpg";
import projectImg2 from "../assets/images/projects/project-2.jpg";
import projectImg3 from "../assets/images/projects/project-3.jpg";
import projectImg4 from "../assets/images/projects/project-4.jpg";
import projectImg5 from "../assets/images/projects/project-5.jpg";
import projectImg6 from "../assets/images/projects/project-6.jpg";
import projectImg7 from "../assets/images/projects/project-7.jpg";
import projectImg8 from "../assets/images/projects/project-8.jpg";
import projectImg9 from "../assets/images/projects/project-9.jpg";

const Portfolio = () => {
  return (
    <div
      className="page"
      id="portfolio"
      style={{
        backgroundColor: "#111",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div className="w-full">
        <div className="mx-auto w-full relative py-80 text-center xs:px-25 xs:pt-16 xs:pb-14 xs:bg-black-3 xs:border-b xs:border-black-4 xs:fixed xs:left-0 xs:right-0 xs:top-0 xs:z-20">
          <h2 className="text-fs-56 font-black font-Poppins uppercase text-white m-0 xs:text-fs-26 xs:text-left xs:leading-lh-1.2">
            my <span className="text-accent">portfolio</span>
          </h2>
          <span className="text-fs-110 absolute left-0 right-0 top-1/2 tracking-10 leading-lh-0.7 font-extrabold text-muted -translate-y-1/2 uppercase xs:hidden">
            works
          </span>
        </div>
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src={projectImg1}
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <span className="uppercase text-fs-18 text-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src={projectImg2}
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <span className="uppercase text-fs-18 tex-white">
                        youtube project
                      </span>
                    </div>
                  </figure>
                </li>
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src={projectImg3}
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <span className="uppercase text-fs-18 tex-white">
                        Local Video project
                      </span>
                    </div>
                  </figure>
                </li>
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src={projectImg4}
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <span className="uppercase text-fs-18 tex-white">
                        Image Project
                      </span>
                    </div>
                  </figure>
                </li>
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src={projectImg5}
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src={projectImg6}
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src={projectImg7}
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src={projectImg8}
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src={projectImg9}
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
              </ul>
            </div>
            <div className="slideshow">
              <ul>
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8"></i>
                          <span className="project-label">Project </span>:
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8"></i>
                          <span className="project-label">Client </span>:
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8"></i>
                          <span className="project-label">Langages </span>:
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8"></i>
                          <span className="project-label">Preview </span>:
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-1.jpg"
                      alt="Portolio Image"
                    />
                  </figure>
                </li>
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Youtube Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8"></i>
                          <span className="project-label">Project </span>:
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8"></i>
                          <span className="project-label">Client </span>:
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8"></i>
                          <span className="project-label">Langages </span>:
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8"></i>
                          <span className="project-label">Preview </span>:
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <div className="videocontainer">
                      <iframe
                        className="youtube-video"
                        src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer"
                      ></iframe>
                    </div>
                  </figure>
                </li>
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Local Video Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8"></i>
                          <span className="project-label">Project </span>:
                          <span className="font-semibold">Video</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8"></i>
                          <span className="project-label">Client </span>:
                          <span className="font-semibold">Videohive</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8"></i>
                          <span className="project-label">Langages </span>:
                          <span className="font-semibold">
                            Adobe After Effects
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8"></i>
                          <span className="project-label">Preview </span>:
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.videhive.net
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <video
                      id="video"
                      className="responsive-video"
                      controls
                      poster="assets/img/projects/project-3.jpg"
                    >
                      <source
                        src="assets/img/projects/video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </figure>
                </li>
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8"></i>
                          <span className="project-label">Project </span>:
                          <span className="font-semibold">Video</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8"></i>
                          <span className="project-label">Client </span>:
                          <span className="font-semibold">Videohive</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8"></i>
                          <span className="project-label">Langages </span>:
                          <span className="font-semibold">Adobe Premium</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8"></i>
                          <span className="project-label">Preview </span>:
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.videhive.net
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-4.jpg"
                      alt="Portolio Image"
                    />
                  </figure>
                </li>
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8"></i>
                          <span className="project-label">Project </span>:
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8"></i>
                          <span className="project-label">Client </span>:
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8"></i>
                          <span className="project-label">Langages </span>:
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8"></i>
                          <span className="project-label">Preview </span>:
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-5.jpg"
                      alt="Portolio Image"
                    />
                  </figure>
                </li>
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8"></i>
                          <span className="project-label">Project </span>:
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8"></i>
                          <span className="project-label">Client </span>:
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8"></i>
                          <span className="project-label">Langages </span>:
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8"></i>
                          <span className="project-label">Preview </span>:
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-6.jpg"
                      alt="Portolio Image"
                    />
                  </figure>
                </li>
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8"></i>
                          <span className="project-label">Project </span>:
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8"></i>
                          <span className="project-label">Client </span>:
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8"></i>
                          <span className="project-label">Langages </span>:
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8"></i>
                          <span className="project-label">Preview </span>:
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-7.jpg"
                      alt="Portolio Image"
                    />
                  </figure>
                </li>
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8"></i>
                          <span className="project-label">Project </span>:
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8"></i>
                          <span className="project-label">Client </span>:
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8"></i>
                          <span className="project-label">Langages </span>:
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8"></i>
                          <span className="project-label">Preview </span>:
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-8.jpg"
                      alt="Portolio Image"
                    />
                  </figure>
                </li>
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8"></i>
                          <span className="project-label">Project </span>:
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8"></i>
                          <span className="project-label">Client </span>:
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8"></i>
                          <span className="project-label">Langages </span>:
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8"></i>
                          <span className="project-label">Preview </span>:
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-9.jpg"
                      alt="Portolio Image"
                    />
                  </figure>
                </li>
              </ul>
              <nav className="down-lg:fixed down-lg:top-0 down-lg:w-full down-lg:h-102 down-lg:bg-black-3 down-lg:z-10 down-lg:border-b down-lg:border-solid down-lg:border-b-black-4 xs:h-62">
                <span className="nav-prev fixed cursor-pointer py-200 px-30 top-1/2 down-lg:top-35 from-lg:-translate-y-1/2 from-lg:left-0 down-lg:left-30 xs:w-20 xs:top-21">
                  <img
                    className="block"
                    src="assets/img/projects/navigation/left-arrow.png"
                    alt="previous"
                  />
                </span>
                <span className="nav-next fixed cursor-pointer py-200 px-30 top-1/2 down-lg:top-35 from-lg:-translate-y-1/2 from-lg:right-0 down-lg:right-30 xs:w-20 xs:top-21">
                  <img
                    className="block"
                    src="assets/img/projects/navigation/right-arrow.png"
                    alt="next"
                  />
                </span>
                <span className="nav-close fixed cursor-pointer from-lg:top-30 down-lg:top-35 from-lg:right-30 down-lg:left-0 down-lg:right-0 down-lg:mx-auto down-lg:block down-lg:w-32 xs:w-20 xs:top-21">
                  <img
                    className="block"
                    src="assets/img/projects/navigation/close-button.png"
                    alt="close"
                  />
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
