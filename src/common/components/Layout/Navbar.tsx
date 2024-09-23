import MDPLogo from "@assets/mdp-logo-white.png";
import { Avatar } from "@chakra-ui/react";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="px-10 py-2 border-b border-gray-300/20 flex justify-between">
      <div className="text-white flex gap-3 items-center">
        <img src={MDPLogo} alt="MDP Logo" className="h-14" />
        <div className="flex flex-col">
          <span className="font-bold text-xl">Simponi</span>
          <span className="font-normal italic text-[0.9rem]">
            Sistem Pembelajaran Online dan Interaktif
          </span>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <IoIosNotifications className="fill-white w-8 h-8" />
        <div className="flex flex-col text-white pe-3">
          <span className="uppercase font-bold">Gojo Satoru</span>
          <span className="font-medium text-[0.9rem] -mt-0.5">2125240000</span>
        </div>
        <Avatar
          className="bg-blue-500 rounded-full w-11 h-11 border-2 text-white font-bold"
          name="Gojo Satoru"
          size="md"
        />
      </div>
    </div>
  );
};

export default Navbar;
