"use client"

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  href: string;
} & LinkProps;

function sleep (ms: number, callback?: () => void): Promise<void> {
  if (!!callback) {
    callback();
  }
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({ href, children, ...props }: Props) => {
  const router = useRouter();


  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const container = document.querySelector("#container");
    container?.classList.add("page-transition");
    // await sleep(250)
    await sleep(400, () => router.push(href));
    console.log('pushed href')
    await sleep(400);
    console.log('awaited after')
    // router.push(href);

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