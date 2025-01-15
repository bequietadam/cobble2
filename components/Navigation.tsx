"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import { Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import TransitionLink from './TransitionLink';


export default function Navigation() {

  const { user, isLoaded } = useUser();


  return (
    <Navbar
      className="--navbar-height:3rem bg-gradient-to-r from-primary-100 sm:px-2"
      position="static"
      isBlurred={true}
      maxWidth="full"
    >
      <NavbarContent className="sm:flex gap-4" justify="start">
        <NavbarItem>
          <TransitionLink href="/">Home</TransitionLink>
        </NavbarItem>
        <NavbarItem>
          <TransitionLink href="/editor">Editor</TransitionLink>
        </NavbarItem>
        <NavbarItem>
          <TransitionLink href="/cairn">Collection</TransitionLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!!isLoaded && !!user && <UserButton afterSignOutUrl='/' />}
        <p className="hidden xs:block font-bold text-slate-300 pt-1">COBBLES</p>
      </NavbarContent>
    </Navbar>
  )
}
