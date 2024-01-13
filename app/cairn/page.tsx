// "use client"
import CobbleList from '@components/CobbleList';
import { CobbleServer } from '@components/SandEditor';
import { useEffect, useState } from 'react';
import { Spinner } from '@nextui-org/react';


async function getCobbles() {
  try {

    let responseCobbles = await fetch(process.env.COBBLES_API_URL + "/api/getCobbles");
    let cobbles = await responseCobbles.json();

    return cobbles
  } catch (e) {
    console.error(e);
    return []
  }
}

export default async function Cairn() {
  const cobbles: CobbleServer[] = await getCobbles();

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
