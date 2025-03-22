// import { useState } from 'react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-secondary py-4">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <a href="#" className="text-xl font-bold text-accent">Tirumani Satya Akshay</a>        
//           <button
//             className="md:hidden text-text"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//               {isOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>

//           {/* Desktop menu */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#about" className="text-text hover:text-accent">About</a>
//             <a href="#experience" className="text-text hover:text-accent">Experience</a>
//             <a href="#about" className="text-text hover:text-accent">Skills</a>
//             <a href="#projects" className="text-text hover:text-accent">Projects</a>
//             <a href="#contact" className="text-text hover:text-accent">Contact</a>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden mt-4">
//             <a href="#about" className="block py-2 text-text hover:text-accent">About</a>
//             <a href="#experience" className="block py-2 text-text hover:text-accent">Experience</a>
//             <a href="#about" className="text-text hover:text-accent">Skills</a>

//             <a href="#projects" className="block py-2 text-text hover:text-accent">Projects</a>
//             <a href="#contact" className="block py-2 text-text hover:text-accent">Contact</a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border border-purple-500 bg-[#101010] shadow-xl fixed w-[28%] max-w-[1000px] mx-auto my-3 left-0 right-0 z-50 rounded-full top-2">
      <div className="container mx-auto px-6 py-3.5 flex justify-center items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-[#a8a8a8] hover:text-white">About</a>
          <a href="#experience" className="text-[#a8a8a8] hover:text-white">Experience</a>
          <a href="#skills" className="text-[#b1b3b5] hover:text-white">Skills</a>
          <a href="#projects" className="text-[#b1b3b5] hover:text-white">Projects</a>
          <a href="#contact" className="text-[#b1b3b5] hover:text-white">Contact</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4 rounded-lg">
          <a href="#about" className="block text-gray-600 hover:text-gray-900">About</a>
          <a href="#experience" className="block text-gray-600 hover:text-gray-900">Experience</a>
          <a href="#skills" className="block text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#projects" className="block text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#contact" className="block text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
