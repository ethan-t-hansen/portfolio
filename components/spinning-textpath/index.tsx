const SpinningLogo = () => {
  return (
    <>
      <div className="relative flex w-fit place-items-center justify-center transition-all duration-300 hover:rotate-3 hover:scale-[103%]">
        <svg
          id="rotating-text"
          viewBox="0 0 200 200"
          width="200"
          height="200"
          className=""
        >
          <defs>
            <path
              id="circle"
              d="M 100, 100
                  m -75, 0
                  a 75, 75 0 1, 0 150, 0
                  a 75, 75 0 1, 0 -150, 0
                  "
            />
          </defs>
          <text>
            <textPath
              href="#circle"
              className="text-lg text-path tracking-[0.195em]"
            >
              PRODUCT DESIGN • SOFTWARE DEV • UI / UX •
            </textPath>
          </text>
        </svg>
        <img
          src="/assets/icons/ac-white.svg"
          className="ac-icon absolute"
          width="80"
          height="80"
          alt="ac icon"
        />
      </div>
    </>
  );
};

export { SpinningLogo };
