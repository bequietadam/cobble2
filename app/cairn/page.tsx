"use client"
import CobbleList from '@components/CobbleList';
import { CobbleServer } from '@components/SandEditor';
import { useEffect, useState } from 'react';
import { Spinner } from '@nextui-org/react';




export default function Cairn() {
  const [cobbles, setCobbles] = useState<[CobbleServer] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/getCobbles')
      .then((res) => res.json())
      .then((data) => {
        setCobbles(data);
        setIsLoading(false);
    })
  }, [])


  if (isLoading) {
    return (
      <Spinner
        color="default"
        size="lg"
      />
    )
  }

  if (!cobbles) {
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
