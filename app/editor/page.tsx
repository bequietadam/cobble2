import SandEditor, { Cobble } from '@components/SandEditor';

import addCobble from '@lib/addCobble';

export default function Page() {

  // const addCobble = async (cobble: Cobble) => {
    // 'use server'

      // const response = await addCobble(cobble);
      // console.log(response);
  // }

  return (
    <>
      <SandEditor />
    </>
  )
}
