'use client'
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie, getCookie } from 'cookies-next';
import { useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("token");
    router.push('/login');
    handleHideNav();
  }

  const [showToggleIcon, setShowToggleIcon] = useState(true);
  const mobile_menu_ref = useRef(false);
  const handleShowNav = () => {
    mobile_menu_ref.current.classList.add("active");
    setShowToggleIcon(false);
  }
  const handleHideNav = () => {
    mobile_menu_ref.current.classList.remove("active");
    setShowToggleIcon(true);
  }
    return (
        <nav className="flex justify-between bg-green-400 items-center px-3 py-1 relative">
      <div className="logo">
        <h2 className="text-[25px] font-medium"><Link href="/">Middleware</Link></h2>
      </div> 
      {showToggleIcon && <div className="block sm:hidden cursor-pointer" onClick={handleShowNav}>
        <div className="toggle_dots"></div>
        <div className="toggle_dots"></div>
        <div className="toggle_dots mb-0"></div>
      </div>}
      <div className="hidden sm:block desktop_menu">
        <ul className="flex">
          <li><Link href='/' className={`link_item ${pathname == '/' ? "active_link" : ""}`}>Home</Link></li>
          <li><Link href='/login' className={`link_item ${pathname == '/login' ? "active_link" : ""}`}>Login</Link></li>
          <li><Link href='/registration' className={`link_item ${pathname == '/registration' ? "active_link" : ""}`}>Registration</Link></li>
          <li><Link href='/dashboard' className={`link_item ${pathname == '/dashboard' ? "active_link" : ""}`}>Dashboard</Link></li>
          {getCookie("token") && <li><button className={`link_item mr-0`} onClick={handleLogout}>Logout</button></li>}
        </ul>
      </div>
      <div className="fixed sm:hidden bg-slate-800 top-0 left-0 w-1/2 sm:w-[300px] px-3 py-2 h-[100%] mobile_menu scale-x-0 origin-left duration-300" ref={mobile_menu_ref}>
        <ul className="flex justify-between items-center mb-3">
          <li><h2 className="text-green-400 font-medium text-[25px]"><Link href='/' onClick={handleHideNav}>Middleware</Link></h2></li>
          <li className="cursor-pointer" onClick={handleHideNav}>
            <div className="close_dots rotate-45 mt-2"></div>
            <div className="close_dots -rotate-45 -mt-1"></div>
          </li>
        </ul>
        <ul>
          <li><Link onClick={handleHideNav} href='/' className={`mobile_nav_item ${pathname == '/' ? "active_link" : ""}`}>Home</Link></li>
          <li><Link onClick={handleHideNav} href='/login' className={`mobile_nav_item ${pathname == '/login' ? "active_link" : ""}`}>Login</Link></li>
          <li><Link onClick={handleHideNav} href='/registration' className={`mobile_nav_item ${pathname == '/registration' ? "active_link" : ""}`}>Registration</Link></li>
          <li><Link onClick={handleHideNav} href='/dashboard' className={`mobile_nav_item ${pathname == '/dashboard' ? "active_link" : ""}`}>Dashboard</Link></li>
          {getCookie("token") && <li><button className={`mobile_nav_item mr-0`} onClick={handleLogout}>Logout</button></li>}
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;