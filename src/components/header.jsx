import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle} className="focus:outline-none">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className='w-full h-20'>
      <nav className='w-full h-full flex justify-between items-center px-4 md:px-16'>
        <div className='text-3xl font-bold'>
          <span className='text-[#aeb2ba]' onClick={()=>navigate('/')}>Port</span>Folio
        </div>
        <div>
          <ul className='flex justify-center items-center gap-10'>
            <li className='hidden md:visible'>
              <button className='text-xl font-bold border-2 px-3 py-2 border-black rounded-full flex justify-center items-center gap-2'>
                Let's talk<FaArrowRightLong />
              </button>
            </li>
            <li className='hover:cursor-pointer'>
              <MenuToggle toggle={() => setMenu(!menu)} isOpen={menu} />
            </li>
          </ul>
        </div>
      </nav>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='w-full bg-slate-50 backdrop-blur-md bg-opacity-20 h-1/2 absolute flex justify-center items-center'
          >
            <ul className='w-full h-full flex flex-col justify-center items-center'>
              <li className='w-full h-20 flex justify-center items-center text-4xl font-bold'>
                <Link to="/" onClick={() => setMenu(false)}>Home</Link>
              </li>
              <li className='w-full h-20 flex justify-center items-center text-4xl font-bold'>
                <Link to="/about" onClick={() => setMenu(false)}>About</Link>
              </li>
              <li className='w-full h-20 flex justify-center items-center text-4xl font-bold'>
                <Link to="/project" onClick={() => setMenu(false)}>Projects</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
