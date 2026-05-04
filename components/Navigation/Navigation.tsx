import Link from "next/link";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";

export const Navigation: React.FC = () => {
  return (
    <nav className="flex place-content-around items-center">
=      <ul className="flex gap-4 flex-wrap">
        <li><Logo /></li>
        <li>
          <Link href="/" className="text-lg font-medium text-foreground">
            <Button>Home</Button>
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-lg font-medium text-foreground">
            <Button>About</Button>
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="text-lg font-medium text-foreground">
            <Button>Portfolio</Button>
          </Link>
        </li>
        {/* <li>
          <a href="#contact" className="text-lg font-medium text-foreground">
            Contact
          </a>
        </li> */}
      </ul>
    </nav>
  );
}