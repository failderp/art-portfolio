import Image from "next/image";
import Link from "next/link";
// import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        className="rounded-full p-10"
        src="/images/bucket head sketch (face only).JPG"
        alt="failderp logo"
        width={478}
        height={465}
        priority
      />
    </Link>
  );
};
