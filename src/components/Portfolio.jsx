import { useState } from "react";

import ProjectModal from "./ProjectModal";
import { projects } from "../data";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const renderProjects = projects?.map((project, index) => {
    return (
      <li
        className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
        key={index}
      >
        <figure
          className="transition duration-300 rounded-5 relative overflow-hidden"
          onClick={() => {
            setSelectedProject(project);
            setShowModal(true);
          }}
        >
          <img
            className="block relative w-full rounded-5 transition duration-300"
            src={project?.image}
            alt=""
          />
          <div className="absolute w-full h-full flex items-center justify-center bg-accent inset-0 opacity-0 hover:opacity-100 transition duration-300">
            <span className="uppercase text-fs-18 text-white">
              {project?.title}
            </span>
          </div>
        </figure>
      </li>
    );
  });
  return (
    <>
      <div
        className="page"
        id="portfolio"
        style={{
          backgroundColor: "#111",
          position: "relative",
          zIndex: "3",
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
                <ul className="gridlist">{renderProjects}</ul>
              </div>
            </div>
          </div>
        </div>
        {showModal && selectedProject && (
          <ProjectModal
            showModal={showModal}
            setShowModal={setShowModal}
            project={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </div>
    </>
  );
};

export default Portfolio;
