import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faHome,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header
      class="header from-lg:fixed from-lg:right-30 from-lg:bottom-0 from-lg:z-30 from-lg:flex from-lg:items-center from-lg:h-[calc(100vh-200px)] from-lg:top-100 from-lg:opacity-100 from-lg:transition from-lg:duration-300 from-lg:[&.hide-header]:z-0 from-lg:[&.hide-header]:opacity-0"
      id="navbar-collapse-toggle"
    >
      <ul
        id="desktop-nav"
        class="icon-menu down-lg:hidden from-md:block uppercase"
      >
        <li class="desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full bg-black-2 active">
          <FontAwesomeIcon
            icon={faHome}
            className="absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19"
            color="white"
          />
          <div class="group block p-0 w-50 h-50">
            <h2 class="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-white leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
              Home
            </h2>
          </div>
        </li>
        <li class="desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full bg-black-2">
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19"
            color="white"
          />
          <div class="group block p-0 w-50 h-50">
            <h2 class="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-white leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
              About
            </h2>
          </div>
        </li>
        <li class="desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full bg-black-2">
          <FontAwesomeIcon
            icon={faSuitcase}
            className="absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19"
            color="white"
          />
          <div class="group block p-0 w-50 h-50">
            <h2 class="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-white leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
              Portfolio
            </h2>
          </div>
        </li>
        <li class="desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full bg-black-2">
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            className="absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19"
            color="white"
          />
          <div class="group block p-0 w-50 h-50">
            <h2 class="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-white leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
              Contact
            </h2>
          </div>
        </li>
      </ul>

      <nav class="hidden down-md:block relative">
        <div
          id="menuToggle"
          class="fixed top-30 right-30 z-50 select-none pt-19 pl-16 w-54 h-54 rounded-5 bg-black-3 xs:right-15 xs:top-4 xs:pb-13 xs:w-49 xs:h-49"
        >
          <input
            id="inputmobile"
            class="h-54 w-54 absolute top-0 left-0 opacity-0 z-20 cursor-pointer peer"
            type="checkbox"
          />
          <span class="flex h-0.5 w-23 mb-5 relative bg-white z-10 rounded-3 origin-0 custom-transition peer-checked:rotate-45 peer-checked:translate-x-1 peer-checked:translate-y-0"></span>
          <span class="flex h-0.5 w-23 mb-5 relative bg-white z-10 rounded-3 origin-0-100 custom-transition peer-checked:opacity-0 peer-checked:scale-0-2"></span>
          <span class="flex h-0.5 w-23 mb-5 relative bg-white z-10 rounded-3 origin-0-100 custom-transition peer-checked:-rotate-45 peer-checked:translate-x-2 peer-checked:translate-y-2"></span>
          <ul
            class="fixed m-0 left-0 top-0 w-full h-full pt-60 bg-black-3 -translate-x-full ease-menu-mobile duration-500 peer-checked:transform-none [&>li]:cursor-pointer [&>li]:after:absolute [&>li]:after:h-px [&>li]:after:w-[calc(100%-60px)] [&>li]:after:bg-black-4 [&>li]:after:left-30 [&>li:last-child]:after:hidden"
            id="mobile-nav"
          >
            <li class="mobile-nav-element active relative pl-30 home-link">
              <div class="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14">
                <FontAwesomeIcon icon={faHome} />
                <span class="absolute left-50 xs:left-35 font-normal">
                  Home
                </span>
              </div>
            </li>
            <li class="mobile-nav-element relative pl-30">
              <div class="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14">
                <FontAwesomeIcon icon={faUser} />
                <span class="absolute left-50 xs:left-35 font-normal">
                  About
                </span>
              </div>
            </li>
            <li class="mobile-nav-element relative pl-30">
              <div class="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14">
                <FontAwesomeIcon icon={faSuitcase} />
                <span class="absolute left-50 xs:left-35 font-normal">
                  Portfolio
                </span>
              </div>
            </li>
            <li class="mobile-nav-element relative pl-30">
              <div class="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <span class="absolute left-50 xs:left-35 font-normal">
                  Contact
                </span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
