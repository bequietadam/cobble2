import SandEditor, { CobbleServer } from '@components/SandEditor';
import SandEditorLoaded from '@components/SandEditorLoaded';
import getCobble from '@lib/getSondage';

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
