import React from 'react'

export default function Card() {
  return (
    <div className="grid grid-cols-1 w-full gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
        <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold my-2">I Phone</p>
          <div className="flex space-x-2 text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>kochi</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>1 Weeks ago</p>
          </div>
          <div className="border-t-2"></div>

          <div className="flex justify-between">
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Your data</p>
              <div className="flex space-x-2">
                <h2>234</h2>
              </div>
            </div>
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Progress</p>
              <div className="text-base text-gray-400 font-semibold">
                <p>34%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
        <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold my-2">Laptop</p>
          <div className="flex space-x-2 text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>Calicut</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>3 Weeks ago</p>
          </div>
          <div className="border-t-2 "></div>

          <div className="flex justify-between">
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Your data</p>
              <div className="flex space-x-2">
                <h2>234</h2>
              </div>
            </div>
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Progress</p>
              <div className="text-base text-gray-400 font-semibold">
                <p>34%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
        <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
          <img src="/icon/smart.png" className="w-8" />
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold my-2">Smart watch</p>
          <div className="flex space-x-2 text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>kochi</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>2 Days ago</p>
          </div>
          <div className="border-t-2 "></div>

          <div className="flex justify-between">
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Your data</p>
              <div className="flex space-x-2">
                <h2>234</h2>
              </div>
            </div>
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Progress</p>
              <div className="text-base text-gray-400 font-semibold">
                <p>34%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
