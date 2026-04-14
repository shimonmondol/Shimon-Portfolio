// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0b0f14] border-t border-white/5 overflow-hidden">

//       {/* Soft Glow Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.12),transparent_60%)] pointer-events-none" />

//       {/* Glow Line at Top */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60" />

//       <div className="relative max-w-7xl mx-auto px-6 py-5 flex flex-col items-center gap-4">

//         {/* Branding */}
//         <h2 className="text-teal-400 text-xl font-semibold tracking-wide">
//           Maisha
//         </h2>

//         {/* Divider Line */}
//         <div className="w-24 h-[1px] bg-white/10"></div>

//         {/* Copyright */}
//         <p className="text-gray-500 text-sm tracking-wide">
//           © {new Date().getFullYear()} Maisha — Crafted with passion & precision
//         </p>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Atom, Wind } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="relative bg-[#0b0f14] border-t border-white/5 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.12),transparent_60%)] pointer-events-none" />

       {/* Glow Line at Top */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60" />
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left - Year */}
        <p className="text-gray-500 text-sm tracking-wide">
          © {new Date().getFullYear()} Shimon All Rights Reserved.
        </p>

        {/* Right - Tech info */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span className="tracking-wide">Made with</span>
          <FaReact className="text-blue-400 animate-spin-slow" size={20} />
          <span>&</span>
          <SiTailwindcss className="text-teal-400" size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
