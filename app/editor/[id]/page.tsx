import SandEditorLoaded, { CobbleServer } from '@components/SandEditorLoaded';
import getCobble from '@lib/getCobble';

type PageProps = {
  params: {
    id: string,
  }
}


export default async function Page({ params }: PageProps) {
  const cobbleRaw: unknown = await getCobble(params.id);

  const cobble: CobbleServer = JSON.parse(JSON.stringify(cobbleRaw));



  return (
    <>
      <SandEditorLoaded
        cobble={cobble}
      />
    </>
  )
}
