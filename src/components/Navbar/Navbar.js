'use client'
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie, getCookie } from 'cookies-next';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("token");
    router.push('/login');
  }

    return (
        <nav className="flex justify-between bg-green-400 items-center px-3 py-1">
      <div className="logo">
        <h2 className="text-[20px] font-medium">Middleware</h2>
      </div>
      <div>
        <ul className="flex">
          <li><Link href='/' className={`link_item ${pathname == '/' ? "active_link" : ""}`}>Home</Link></li>
          <li><Link href='/login' className={`link_item ${pathname == '/login' ? "active_link" : ""}`}>Login</Link></li>
          <li><Link href='/registration' className={`link_item ${pathname == '/registration' ? "active_link" : ""}`}>Registration</Link></li>
          <li><Link href='/dashboard' className={`link_item ${pathname == '/dashboard' ? "active_link" : ""}`}>Dashboard</Link></li>
          {getCookie("token") && <li><button className={`link_item mr-0`} onClick={handleLogout}>Logout</button></li>}
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;