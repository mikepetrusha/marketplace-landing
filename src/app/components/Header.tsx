import Image from "next/image";
import UserIcon from "../../../public/nav/User.svg";
import Storefront from "../../../public/nav/Storefront.svg";
import MarketLogo from "../../../public/nav/NFT Marketplace.svg";
import burger from "../../../public/nav/burger.svg";

export const Header = () => {
  return (
    <header className="w-full px-[50px] py-[15px] xl:py-5 bg-transparent">
      <nav className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Image
            className="w-6 h-6 xl:h-8 xl:w-8"
            src={Storefront}
            alt="stolefront"
          />
          <Image
            className="w-[150px] h-[15px] xl:h-[20px] xl:w-[200px]"
            src={MarketLogo}
            alt="marketlogo"
          />
        </div>
        <div className="hidden xl:flex gap-2.5 items-center">
          <a
            className="text-base font-semibold text-white px-5 hover:scale-95 duration-300"
            href="/"
          >
            Marketplace
          </a>
          <a
            className="text-base font-semibold text-white px-5 hover:scale-95 duration-300"
            href="/"
          >
            Rankings
          </a>
          <a
            className="text-base font-semibold text-white px-5 hover:scale-95 duration-300"
            href="/"
          >
            Connect a wallet
          </a>
          <button className="btn btn-primary text-white text-base font-semibold normal-case rounded-[20px] hover:scale-95 duration-300 h-[60px] px-[30px]">
            <Image src={UserIcon} alt="usericon" width={20} height={20} />
            Sign Up
          </button>
        </div>
        <Image
          className="xl:hidden"
          src={burger}
          width={24}
          height={24}
          alt="burger menu"
        />
      </nav>
    </header>
  );
};
