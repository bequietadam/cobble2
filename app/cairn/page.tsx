import CobbleList from '@components/CobbleList';
import { CobbleServer } from '@components/SandEditorLoaded';
import getCobbles from '@lib/getCobbles';




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
