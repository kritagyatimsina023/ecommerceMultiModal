const {
  LayoutDashboard,
  ShoppingBasket,
  ShoppingBagIcon,
  Settings,
  LogOut,
} = require("lucide-react");
const { TbReportAnalytics, TbQuestionMark } = require("react-icons/tb");

const SideBarData = [
  {
    id: 1,
    icons: <LayoutDashboard size={25} />,
    name: "DashBoard",
    links: "/admin/dashboard",
  },
  {
    id: 2,
    icons: <TbReportAnalytics size={25} />,
    name: "Report",
    links: "/admin/reports",
  },
  {
    id: 3,
    icons: <ShoppingBasket size={25} />,
    name: "Products",
    links: "/admin/products",
  },
  {
    id: 4,
    icons: <ShoppingBagIcon size={25} />,
    name: "All products",
    links: "/admin/allProducts",
  },
];

const sideBarBottom = [
  { id: 1, icons: <Settings />, name: "Settings", links: "/admin/settings" },
  {
    id: 2,
    icons: <TbQuestionMark />,
    name: "Help Center",
    links: "/admin/help",
  },
  { id: 3, icons: <LogOut />, name: "Sign out", links: "/admin/logout" },
];

export { sideBarBottom, SideBarData };
