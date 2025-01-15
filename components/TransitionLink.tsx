"use client"

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  href: string;
} & LinkProps;

function sleep (ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({ href, children, ...props }: Props) => {
  const router = useRouter();


  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const container = document.querySelector("#container");
    container?.classList.add("page-transition");
    await sleep(330);

    router.push(href);

    await sleep(330)
    container?.classList.remove("page-transition")
  }
  return (
    <Link
      href={href}
      onClick={handleTransition}
      {...props}
    >{children}</Link>
  )
}


export default TransitionLink; 