
import {
  FaBullseye,
  FaChartLine,
  FaHandshake,
  FaBullhorn,
  FaUsers,
  FaFilter,
  FaUserCheck,
  FaChalkboardTeacher,
} from "react-icons/fa";

const services = [
  {
    title: "Performance Marketing",
    image: "/assets/services/service-1.png",
    count: "01"
  },
  {
    title: "Brand Growth Strategy",
    image: "/assets/services/service-2.png",
    count: "02"
  },
  {
    title: "Lead Generation Systems",
    image: "/assets/services/service-3.png",
    count: "03"
  },
  {
    title: "Business Consulting",
    image: "/assets/services/service-2.png",
    count: "04"
  }
];

const projects = [
  {
    id: 1,
    img: "/assets/gallary/1.png",
    headline: "L'Oréal Retail Design Training",
    title: "Retail Training",
    description: "Learn luxury retail design fundamentals skills."
  },
  {
    id: 2,
    img: "/assets/gallary/3.png",
    headline: "Shan foods - Training",
    title: "Merchandising Training Live App Tracking system",
    description: "Understand live tracking and merchandising workflow systems."
  },
  {
    id: 3,
    img: "/assets/gallary/8.png",
    headline: "Flora by BlueBend Launching Training",
    title: "Flora Launch Training",
    description: "Understand complete process of launching Flora products effectively."
  },
  {
    id: 4,
    img: "/assets/gallary/7.png",
    headline: "Hilal Foods Retail Merchandising Training",
    title: "Retail Merchandising Training",
    description: "Learn effective retail merchandising and product placement strategies."
  },
  {
    id: 5,
    img: "/assets/gallary/9.png",
    headline: "L'Oréal Modern Trade Channel Training",
    title: "Modern Trade Training",
    description: "Understand modern retail channels and trade execution strategies."
  },
  {
    id: 6,
    img: "/assets/gallary/14.png",
    headline: "Retail Design Mastery",
    title: "Retail Design Mastery",
    description: "Create modern and engaging retail experiences through design principles."
  },
  {
    id: 7,
    img: "/assets/gallary/5.png",
    headline: "Modern Trade App Tracking Training",
    title: "App Tracking Training",
    description: "Learn how to track and manage modern trade retail operations efficiently."
  },
  {
    id: 8,
    img: "/assets/gallary/14.png",
    headline: "Retail Design Mastery",
    title: "Retail Design Mastery",
    description: "Create modern and engaging retail experiences through design principles."
  }
];

const serviceCards = [
  {
    id: 1,
    icon: <FaBullseye size={30} />,
    title: "Digital Marketing Strategy",
    desc: "Build clear campaigns that target audiences, increase visibility, improve engagement, and generate consistent business growth results monthly.",
  },
  {
    id: 2,
    icon: <FaChartLine size={30} />,
    title: "Performance Marketing",
    desc: "Run paid ads with smart budgets, optimize conversions, track returns, and scale profitable campaigns across channels effectively.",
  },
  {
    id: 3,
    icon: <FaHandshake size={30} />,
    title: "Business Development",
    desc: "Create growth opportunities through partnerships, outreach systems, market research, and strategies that increase long term revenue steadily.",
  },
  {
    id: 4,
    icon: <FaBullhorn size={30} />,
    title: "Brand Growth Strategy",
    desc: "Strengthen market presence with positioning, messaging, audience trust, and campaigns that build lasting recognition for businesses.",
  },
  {
    id: 5,
    icon: <FaUsers size={30} />,
    title: "Lead Generation Systems",
    desc: "Develop automated systems that capture prospects, qualify leads, and deliver steady inquiries for your sales team daily.",
  },
  {
    id: 6,
    icon: <FaFilter size={30} />,
    title: "Funnel Optimization",
    desc: "Improve every funnel step to reduce drop offs, increase conversions, and maximize customer lifetime value efficiently.",
  },
  {
    id: 7,
    icon: <FaUserCheck size={30} />,
    title: "Client Acquisition Strategy",
    desc: "Use proven outreach methods, nurturing flows, and sales processes to win high value clients consistently online.",
  },
  {
    id: 8,
    icon: <FaChalkboardTeacher size={30} />,
    title: "Mentorship & Business Consulting",
    desc: "Get expert guidance, practical plans, and personalized advice to solve challenges and grow faster confidently.",
  },
];




export { services, projects, serviceCards }