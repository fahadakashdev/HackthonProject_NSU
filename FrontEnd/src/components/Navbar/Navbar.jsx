

import  { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AddReport from "../AddReport/AddReport";

export function StickyNavbar() {
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 text-lg mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-normal text-lg">
        <a href="#" className="flex items-center">Home</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal text-lg">
        <a href="#" className="flex items-center">Leaderboard</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal text-lg">
        <a href="#" className="flex items-center">Heatmap</a>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="bg-primary text-white w-full top-0 z-20 py-4 px-4 lg:px-20 rounded-none">
        <div className="flex items-center justify-between">
          <h1 className="text-[50px] font-['Cookie']">Crimers</h1>

          <div className="hidden lg:block">{navList}</div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex gap-4">
              {/* Crime Report button opens modal */}
              <button onClick={handleOpen} className="py-2 px-7 hover:bg-white hover:text-black border border-white rounded-md">
                Crime Report
              </button>

              <Link to="/login">
                <button className="bg-white text-black py-2 px-7 rounded-md">Login</button>
              </Link>
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <MobileNav open={openNav}>
          {navList}
          <div className="flex flex-col gap-4 mt-4">
            <button onClick={handleOpen} className="py-2 px-7 hover:bg-white hover:text-black border border-white rounded-md">
              Crime Report
            </button>
            <Link to="/login">
              <button className="bg-white text-black py-2 px-7 rounded-md">Login</button>
            </Link>
          </div>
        </MobileNav>

        {/* Pass corrected props */}
        <AddReport isOpen={open} onClose={handleOpen} />
      </Navbar>
    </div>
  );
}
