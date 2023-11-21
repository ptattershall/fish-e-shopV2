import Link from "next/link";
import Container from "./Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="/?category=Comics">Comics</Link>
            <Link href="/?category=Prints">Prints</Link>
            <Link href="/?category=Apparel">Apparel</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="/contact">Contact Us</Link>
            <Link href="/shippingpolicy">Shipping Policy</Link>
            <Link href="/returnpolicy">Returns & Exchanges</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
            Mr. Fish a.k.a. The fastest man in indie comics is pleased to bring you his online store. Here you can find all of his comics, prints, posters, and apparel. We appricate your visit and hope you enjoy the content. Please reach out to us with any questions or concerns because we do have unwavering dedication to customer satisfation. Also, feel free to follow Mr. Fish on your favorite social media platform!
                </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Mr. Fish Comics. All rights reserved.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link target='_blank' href="https://www.facebook.com/mrfishcomics">
                <MdFacebook size={24} />
              </Link>
              <Link target='_blank' href="https://www.instagram.com/mr.fish.comics/">
                <AiFillInstagram size={24} />
              </Link>
              <Link target='_blank' href="https://www.youtube.com/@MrFishComics">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
