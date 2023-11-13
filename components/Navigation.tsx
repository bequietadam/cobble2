import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import react from 'react';




export default function Navigation() {



  return (
    <Navbar style="--navbar-height:3rem" position="static" isBordered isBlurred={false}>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/sand">Editor</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/cairn">Collection</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
          <p className="font-bold">COBBLES</p>
      </NavbarContent>
    </Navbar>
  )

  return (
    <div className="px-5 py-2 vorder-b-1 border-slate-700">
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/sand">Editor</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/cairn">Collection</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
          <p className="font-bold">COBBLES</p>
      </NavbarContent>
    </div>
  )
}
