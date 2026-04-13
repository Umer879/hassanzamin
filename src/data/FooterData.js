import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
const socialLinks = [
  { icon: <FaFacebookF />, link: "https://www.facebook.com/share/1CQY3PYweV/" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/hassaandigitalmarketing?igsh=c3J2Y3RyaHpuY2N6" },
  // { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/@Digitalmarektingservices" },
];

const servicesLinks = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Portfolios", link: "/portfolio" },
  { name: "Blogs", link: "/blogs" },
];


export { socialLinks, servicesLinks }