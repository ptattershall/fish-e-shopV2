import { Redressed } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

interface NavBarProps {
  currentUser: SafeUser | null;
}

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div
      className="
    sticky
    w-full
    bg-slate-200
    z-30
    shadow-sm
    top-0
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl`}
            >
              <Image
                  alt="Mr. Fish Logo"
                  // Importing an image will
                  // automatically set the width and height
                  src='/logo.png'
                  className='object-contain w-20 h-20 md:w-24 md:h-24'
                  width={96}
                  height={96}
              />
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <div className='rounded-full hover:bg-slate-50 p-2 hover:border-[1px] hover:border-slate-400 hover:shadow-md hover:translate-x-[1px] ml-[1px] hover:ml-0' >
                <CartCount />
              </div>
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default NavBar;
