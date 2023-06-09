import React from "react";

export default function ind() {

  const blob = document.getElementById("blob");

  window.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob?.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };
  return (
    <div className="bg-white relative">
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-24">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0 relative">
              <div id="blob" className="blur-xl absolute shadow-inner "></div>

              <a href="#" title="" className="flex "></a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <a
              href="/login"
              title=""
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200  hover:text-black focus:text-black  font-semibold text-white bg-black rounded-full"
              role="button"
            >
              {" "}
              Join Now{" "}
            </a>
          </div>
        </div>
      </header>

      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-9">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative ">
              <img className="w-auto h-24 z-10 mt-10" src="logo.png" alt="" />
              <h1 className="mt-4  text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                Track
              </h1>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                Analyse
              </h1>

              <a
                href="/login"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-black rounded-full lg:mt-16"
                role="button"
              >
                Join for free
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            <div>
              <img className="h-full rounded-2xl z-500" src="/bg.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
