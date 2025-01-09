import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.png"
import { auth } from "@/auth"
import { signIn, signOut } from "next-auth/react"

const Navbar = async () => {

  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">

            

        </nav>
    </header>
  )
}

export default Navbar