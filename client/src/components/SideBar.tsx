// interface SideBarProps {
//   selectedCategory: string;
//   setSelectedCategory: (category: string) => void;
// }
// const SideBar = ({ selectedCategory, setSelectedCategory }: SideBarProps) => {
//   return (
//     <>
//       <div
//         className="d-flex flex-column flex-shrink-0  text-bg-dark sidebar sticky  h-screen overflow-y-auto bg-gray-900 text-white p-4"
//         style={{ width: "280px" }}
//       >
//         {" "}
//         <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//           {" "}
//           <svg
//             className="bi pe-none me-2"
//             width="40"
//             height="32"
//             aria-hidden="true"
//           >
//             <use xlinkHref="#bootstrap"></use>
//           </svg>{" "}
//           <span className="fs-4">SideBar</span>{" "}
//         </a>{" "}
//         <hr />{" "}
//         <ul className="nav nav-pills flex-column mb-auto">
//           <li className="nav-item">
//             <a
//               className={`nav-link text-white ${
//                 selectedCategory === "Classic Pedas" && "active"
//               }`}
//               onClick={() => setSelectedCategory("Classic Pedas")}
//             >
//               Classic Pedas
//             </a>{" "}
//           </li>{" "}
//           <li>
//             {" "}
//             <a
//               className={`nav-link text-white ${
//                 selectedCategory === "Nutty & Dry Fruit Pedas" && "active"
//               }`}
//               onClick={() => setSelectedCategory("Nutty & Dry Fruit Pedas")}
//             >
//               Nutty & Dry Fruit Pedas
//             </a>{" "}
//           </li>{" "}
//           <li>
//             {" "}
//             <a
//               className={`nav-link text-white ${
//                 selectedCategory === "Modern Fusion Pedas" && "active"
//               }`}
//               onClick={() => setSelectedCategory("Modern Fusion Pedas")}
//             >
//               Modern Fusion Pedas
//             </a>{" "}
//           </li>{" "}
//           <li>
//             {" "}
//             <a
//               className={`nav-link text-white ${
//                 selectedCategory === "Seasonal Pedas" && "active"
//               }`}
//               onClick={() => setSelectedCategory("Seasonal Pedas")}
//             >
//               Seasonal Pedas
//             </a>{" "}
//           </li>{" "}
//           <li>
//             {" "}
//             <a
//               className={`nav-link text-white ${
//                 selectedCategory === "Healthy Pedas" && "active"
//               }`}
//               onClick={() => setSelectedCategory("Healthy Pedas")}
//             >
//               Healthy Pedas
//             </a>{" "}
//           </li>
//           <li>
//             {" "}
//             <a
//               className={`nav-link text-white ${
//                 selectedCategory === "Fruit Pedas" && "active"
//               }`}
//               onClick={() => setSelectedCategory("Fruit Pedas")}
//             >
//               Fruit Pedas
//             </a>{" "}
//           </li>
//           <li>
//             {" "}
//             <a
//               className={`nav-link text-white ${
//                 selectedCategory === "Exotic Pedas" && "active"
//               }`}
//               onClick={() => setSelectedCategory("Exotic Pedas")}
//             >
//               {" "}
//               Exotic Pedas
//             </a>{" "}
//           </li>
//         </ul>{" "}
//         <hr />
//       </div>
//     </>
//   );
// };

// export default SideBar;
import { useState } from "react";
import {
  Hourglass,
  ArrowRightFromLine,
  ArrowLeftFromLine,
  Nut,
  CloudMoon,
  Apple,
  HeartPulse,
  Candy,
  TrendingUp,
} from "lucide-react";

interface SideBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const SideBar = ({ selectedCategory, setSelectedCategory }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const categories = [
    { name: "Classic Pedas", icon: Hourglass },
    { name: "Nutty & Dry Fruit Pedas", icon: Nut },
    { name: "Modern Fusion Pedas", icon: TrendingUp },
    { name: "Seasonal Pedas", icon: CloudMoon },
    { name: "Healthy Pedas", icon: HeartPulse },
    { name: "Fruit Pedas", icon: Apple },
    { name: "Exotic Pedas", icon: Candy },
  ];

  return (
    <div
      className={`fixed top-23 left-0 h-full flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } bg-black text-white border-r border-white/10 z-50`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!collapsed && (
          <span className="text-xl font-semibold tracking-wide">Categories</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:text-yellow-400 transition"
        >
          {collapsed ? <ArrowRightFromLine /> : <ArrowLeftFromLine />}
        </button>
      </div>

      {/* Nav Links */}
      <ul className="flex-1 p-2 space-y-1 overflow-y-auto">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <li key={cat.name}>
              <button
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center w-full px-4 py-3 rounded-xl font-medium transition text-left ${
                  selectedCategory === cat.name
                    ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(255,193,7,0.8)]"
                    : "text-gray-300 hover:text-yellow-400 hover:bg-white/10"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    selectedCategory === cat.name ? "text-black" : "text-gray-300"
                  }`}
                />
                {!collapsed && <span className="ml-3">{cat.name}</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
