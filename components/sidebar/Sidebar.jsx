import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";


export default function Sidebaruser() {
  const router = useRouter();
      const { user, logout } = useAuth();

  const [open, setOpen] = React.useState(false);

  const opening = () => {
    setOpen(!open);
  };


  return (
    <div className="flex flex-col items-center  gap-10 justify-items-stretch  w-full min-h-10 sm:h-full overflow-hidden text-gray-800  bg-black p-0  ">
      <div className=" hidden sm:flex flex-col py-0 items-center w-full mt-24 gap-8 m-0 transition-all transform duration-500">
        <Link
          className="btn flex items-center w-full h-16 justify-center mt-2 m-0 p-0 rounded-full  hover:bg-gray-700  text-wehite-600 bg-white-100 hover:text-gray-300 "
          href="/dashboard"
        >
          <img src="/icon/home.png" className="w-8 opacity-90" />{" "}
          {/* <span className="ml-2 text-sm font-medium">Home</span> */}
        </Link>

        <Link
          className="btn flex items-center w-full h-16 justify-center mt-2 m-0 p-0 rounded-xl  hover:bg-gray-700  text-wehite-600 bg-white-100 hover:text-gray-300 "
          href="/dashboard"
        >
          <img src="/icon/map.png" className="w-8 opacity-90" />{" "}
          {/* <span className="ml-2 text-sm font-medium">Home</span> */}
        </Link>

        <Link
          className="btn flex items-center w-full h-16 justify-center mt-2 m-0 p-0 rounded-xl  hover:bg-gray-700  text-wehite-600 bg-white-100 hover:text-gray-300 "
          href="/dashboard"
        >
          <img src="/icon/profile.png" className="w-8 opacity-90" />{" "}
          {/* <span className="ml-2 text-sm font-medium">Home</span> */}
        </Link>
        <Link
          className="btn flex items-center w-full h-16 justify-center mt-2 m-0 p-0 rounded-xl  hover:bg-gray-700  text-wehite-600 bg-white-100 hover:text-gray-300 "
          href="/dashboard"
        >
          <img src="/icon/logout.png" className="w-8 opacity-90" />{" "}
          {/* <span className="ml-2 text-sm font-medium">Home</span> */}
        </Link>
      </div>
    </div>
  );
    }