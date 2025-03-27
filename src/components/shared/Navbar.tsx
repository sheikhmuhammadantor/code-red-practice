import Image from "next/image";
import Menu from "../cn/ui/Menu";
import Link from "next/link";
import LoginButton from "../auth/LoginButton";
import RegisterButton from "../auth/Register";
import { ModeToggle } from "../cn/ui/ModeToggle";

export default function Navbar() {
  return (
    <nav className="py-2 px-4 border-b flex justify-between items-center">
      <div className="flex items-center justify-center gap-2">
        <Link href="/">
          <Image
            src="/logo.png"
            height={80}
            width={80}
            alt="Code Red Logo"
            className="rounded-lg"
          />
        </Link>
        <Menu />
      </div>
      <div className="flex items-center justify-center gap-2">
        <LoginButton />
        <RegisterButton />
        <ModeToggle />
      </div>
    </nav>
  );
}
