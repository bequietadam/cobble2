"use client"
import { Card, CardBody, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import react from 'react';




export default function Navigation() {



  return (
        // <Card
        //   className="bg-gradient-to-r from-primary-100 mb-6 rounded-b-lg"
        //   radius="none"
        //   fullWidth={true}

        // >
        //   <CardBody className="px-2 pb-3 pt-0">

    <Navbar
      className="--navbar-height:3rem bg-gradient-to-r from-primary-100 mb-3"
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
        // </CardBody>
        // </Card>

  )

  // return (
  //   <div className="px-5 py-2 vorder-b-1 border-slate-700">
  //     <NavbarContent className="hidden sm:flex gap-4" justify="start">
  //       <NavbarItem>
  //         <Link href="/">Home</Link>
  //       </NavbarItem>
  //       <NavbarItem>
  //         <Link href="/sand">Editor</Link>
  //       </NavbarItem>
  //       <NavbarItem>
  //         <Link href="/cairn">Collection</Link>
  //       </NavbarItem>
  //     </NavbarContent>
  //     <NavbarContent justify="end">
  //         <p className="font-bold">COBBLES</p>
  //     </NavbarContent>
  //   </div>
  // )
}
