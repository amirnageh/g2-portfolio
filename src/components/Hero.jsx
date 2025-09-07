import HeroImg from "../assets/images/d2.png";

const Hero = () => {
  return (
    <div className="page page--current" id="home">
      <div className="bg-accent fixed w-full h-200prcnt -rotate-15 -top-1/2 -left-83prcnt hidden from-lg:block"></div>
      <div className="flex items-center h-screen w-full down-lg:mx-auto down-lg:justify-center xs:text-left down-lg:text-center">
        <img
          className="hidden from-lg:block fixed w-1/3 h-[calc(100vh-100px)] left-40 top-40 rounded-30 shadow-1 object-cover"
          src={HeroImg}
          alt=""
          style={{
            alignSelf: "anchor-center",
          }}
        />

        <div className="from-lg:ml-100/3 from-lg:w-2/3">
          <div className="mx-auto max-w-700 custom-md-1:max-w-450">
            <img
              src={HeroImg}
              className="hidden down-lg:block xs:!hidden rounded-full w-270 h-270 mx-auto mb-25 border-4 border-solid border-black-3"
              alt="my picture"
            />

            <h1 className="text-fs-50 text-accent font-Poppins relative uppercase font-bold leading-lh-50 pl-70 before:absolute before:left-0 before:top-29 before:h-4 before:w-40 before:rounded-10 custom-md-2:text-fs-42 down-xl:before:hidden down-xl:pl-0 custom-md-2:leading-lh-52 down-md:text-fs-38 down-md:leading-lh-48 down-md:mt-29 down-md:mb-13 xs:text-fs-29 xs:leading-lh-39 xs:mt-18">
              I'm Amir Nageh.
              <span className="block text-white">software engineer</span>
            </h1>
            <p className="font-Open-sans mt-15 mb-28 leading-lh-35 down-lg:mt-2.5 down-lg:mb-23 down-lg:text-fs-15 down-lg:leading-lh-30">
              Hello! I'm Amir, a Front-End Developer with over nine years of
              experience. I specialize in React.js, Next.js, Redux, Redux Saga,
              and Context API. I enjoy playing football and reading the Quran.
              Proud father of a beautiful daughter named Waad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
