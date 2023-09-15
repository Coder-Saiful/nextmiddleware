import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-green-400 items-center px-3 py-1">
      <div className="logo">
        <h2 className="text-[20px] font-medium">Middleware</h2>
      </div>
      <div>
        <ul className="flex">
          <li><Link href='/' className="link_item">Home</Link></li>
          <li><Link href='/login' className="link_item">Login</Link></li>
          <li><Link href='/registration' className="link_item">Registration</Link></li>
          <li><Link href='/dashboard' className="link_item mr-0">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;