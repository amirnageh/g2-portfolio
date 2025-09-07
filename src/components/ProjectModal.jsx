import { NavLink } from "react-router";
import closeIcon from "../assets/images/close-button.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faExternalLink,
  faFileText,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({
  showModal,
  setShowModal,
  project,
  setSelectedProject,
}) => {
  return (
    <div className="portfolio">
      <div className={showModal ? "slideshow-open" : ""}>
        <div className="slideshow">
          <ul>
            <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330">
              <figure
                className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10 relative "
                style={{
                  zIndex: "999",
                }}
              >
                <figcaption className="mb-15">
                  <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                    {project?.title}
                  </h3>
                  <div className="flex flex-wrap font-Open-sans text-fs-15">
                    <div className="w-1/2 xs:w-full mb-8">
                      <FontAwesomeIcon icon={faFileText} className="pr-8" />
                      <span className="project-label">Project </span>:{" "}
                      <span className="font-semibold">{project?.title}</span>
                    </div>
                    <div className="w-1/2 xs:w-full mb-8">
                      <FontAwesomeIcon icon={faUser} className="pr-8" />
                      <span className="project-label">Client </span>:{" "}
                      <span className="font-semibold">{project?.client}</span>
                    </div>
                    <div className="w-1/2 xs:w-full mb-8">
                      <FontAwesomeIcon icon={faCode} className="pr-8" />
                      <span className="project-label">Langages </span>:{" "}
                      <span className="font-semibold">
                        {project?.technologies}
                      </span>
                    </div>
                    <div className="w-1/2 xs:w-full mb-8">
                      <FontAwesomeIcon icon={faExternalLink} className="pr-8" />
                      <span className="project-label">Preview </span>:{" "}
                      <span className="font-semibold">
                        <NavLink
                          className="underline text-accent text-underline"
                          to={project?.previewLink || ""}
                          target="_blank"
                        >
                          {project?.title || "N/A"}
                        </NavLink>
                      </span>
                    </div>
                  </div>
                </figcaption>
                <img
                  className="block w-full rounded-20 object-cover modal-image"
                  src={project?.image}
                  alt="Portolio Image"
                />
                <span
                  className="nav-close absolute z-10 cursor-pointer from-lg:top-30 down-lg:top-35 from-lg:right-30 down-lg:left-0 down-lg:right-0 down-lg:mx-auto down-lg:block down-lg:w-20 xs:w-20 xs:top-21"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedProject(null);
                  }}
                >
                  <img className="block" src={closeIcon} alt="close" />
                </span>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
