"use client"
import { Card, CardBody, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import react from 'react';


export default function Navigation() {


  return (
    <Navbar
      className="--navbar-height:3rem bg-gradient-to-r from-primary-100 mb-3 px-2"
      position="static"
      isBlurred={true}
      maxWidth="full"
    >
      <NavbarContent className="sm:flex gap-4" justify="start">
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
          <p className="font-bold pt-1">COBBLES</p>
      </NavbarContent>
    </Navbar>
  )
}
