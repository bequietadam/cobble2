"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import { Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';


export default function Navigation() {

  const { user, isLoaded } = useUser();


  return (
    <Navbar
      className="--navbar-height:3rem bg-gradient-to-r from-primary-100 px-2"
      position="static"
      isBlurred={true}
      maxWidth="full"
    >
      <NavbarContent className="sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/editor">Editor</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/cairn">Collection</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!!isLoaded && !!user && <UserButton afterSignOutUrl='/' />}
        <p className="font-bold pt-1">COBBLES</p>
      </NavbarContent>
    </Navbar>
  )
}
