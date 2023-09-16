'use client'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const handleAuth = () =>  {
    setCookie("token", "token4343", {
    });
    router.push("/");
  }
    return (
      <div className=" flex justify-center items-center h-screen flex-col">
        <h1 className="text-[30px]">Login Form</h1>
        <button className=" text-orange-100 bg-blue-500 px-3 rounded-sm py-1 mt-9" onClick={handleAuth}> Login</button>
      </div>
    )
  }
  