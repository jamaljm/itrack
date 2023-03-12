import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import router, { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const { user, login, loging } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  const handleLoging = async (e) => {
    e.preventDefault();
    await loging();
    router.push("/dashboard");
  };
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative flex items-end rounded-full px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="absolute inset-0 rounded-full">
            {/* <video className="object-cover w-full h-full" src="https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" autoPlay="true" /> */}
            <img
              className="object-cover w-full h-full  "
              src="/login.jpg"
            ></img>
          </div>
          <div className="absolute rounded-full align-middle inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative flex justify-center items-center ">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Your drive track{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white"> Your </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white"> Your </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white"> Your </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10  bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-display leading-tight text-black sm:text-4xl">
             Welcome {" "}
            </h2>

            <form onSubmit={handleLogin} method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <input
                      type="email"
                      name=""
                      onChange={(e) =>
                        setData({
                          ...data,
                          email: e.target.value,
                        })
                      }
                      value={data.email}
                      required
                      placeholder="Enter email to get started"
                      className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      for=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>

                    <Link
                      href="#"
                      title=""
                      className="text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </Link>
                  </div>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <input
                      type="password"
                      name=""
                      onChange={(e) =>
                        setData({
                          ...data,
                          password: e.target.value,
                        })
                      }
                      value={data.password}
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r bg-black focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
            <div class="mt-5 space-y-3">
              <button
                type="button"
                onClick={handleLoging}
                class="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
              >
                <div class="absolute inset-y-0 left-0 p-4">
                  <svg
                    class="w-6 h-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </div>
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
