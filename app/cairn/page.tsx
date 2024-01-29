// "use client"
import CobbleList from '@components/CobbleList';
import { CobbleServer } from '@components/SandEditor';
import { useEffect, useState } from 'react';
import { Spinner } from '@nextui-org/react';
import getCobbles from '@lib/getSondages';




export default async function Cairn() {
  const cobblesRaw: unknown[] = await getCobbles();

  const cobbles: CobbleServer[] = JSON.parse(JSON.stringify(cobblesRaw));

  if (!cobbles.length) {
    return (
      <p>no cobble thrown yet...</p>
    )
  }


  return (
    <>
      <CobbleList cobbles={cobbles} />
    </>
  );


}
