import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link id="failderp-logo" href="/" className="flex items-center px-10 pt-10">
      <Image
        className="h-60 w-60 rounded-full object-cover sm:h-80 sm:w-80 md:h-100 md:w-100"
        src="/images/logo/bucket head sketch (face only).JPG"
        alt="failderp logo"
        width={478}
        height={465}
        priority
      />
    </Link>
  );
};
