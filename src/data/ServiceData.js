
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
    headline: "Frontend Development",
    title: "Master React.js",
    description: "Build dynamic and interactive user interfaces."
  },
  {
    id: 2,
    img: "/assets/gallary/3.png",
    headline: "Backend Mastery",
    title: "Node.js Essentials",
    description: "Develop scalable server-side applications."
  },
  {
    id: 3,
    img: "/assets/gallary/8.png",
    headline: "Full Stack",
    title: "MERN Stack Bootcamp",
    description: "End-to-end web development from scratch."
  },
  {
    id: 4,
    img: "/assets/gallary/7.png",
    headline: "Database Design",
    title: "MongoDB Deep Dive",
    description: "Manage and optimize NoSQL databases efficiently."
  },
  {
    id: 5,
    img: "/assets/gallary/9.png",
    headline: "UI/UX Design",
    title: "Modern Web Design",
    description: "Create stunning and responsive layouts."
  },
  {
    id: 6,
    img: "/assets/gallary/14.png",
    headline: "Programming",
    title: "JavaScript Pro",
    description: "Master the core logic of modern web apps."
  },
  {
    id: 7,
    img: "/assets/gallary/5.png",
    headline: "Mobile Repairing",
    title: "iPhone Hardware Lab",
    description: "Professional mobile hardware and logic board repair."
  },
  {
    id: 8,
    img: "/assets/gallary/14.png",
    headline: "API Development",
    title: "Restful API Guide",
    description: "Build secure and fast communication layers."
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