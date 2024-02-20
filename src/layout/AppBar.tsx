import { Logo } from "@/components/Logo";
import config from "@/config.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

export function AppBar() {
  return (
    <header className="flex justify-between bg-black text-white h-[90px]">
      <AppBarLeft />
      <AppBarCenter />
      <AppBarRight />
    </header>
  );
}

function AppBarLeft() {
  return (
    <div className="flex">
      <span className="text-primary">
        <GiHamburgerMenu />
      </span>
      <span className="text-primary">
        <BsFillSearchHeartFill />
      </span>
    </div>
  );
}

function AppBarCenter() {
  return (
    <div className="flex">
      <Logo /> {config.name}
    </div>
  );
}

function AppBarRight() {
  return (
    <div className="flex">
      <span className="text-primary">
        <FaShoppingCart />
      </span>
    </div>
  );
}
