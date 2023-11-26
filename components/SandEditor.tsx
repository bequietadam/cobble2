'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Sandpack, SandpackCodeEditor, SandpackFiles, SandpackLayout, SandpackPreview, SandpackProvider, useSandpack } from '@codesandbox/sandpack-react';
import ThemeDropdown from '@components/ThemeDropdown';
import presets from '@constants/presets';
import PresetDropdown, { Preset } from '@components/PresetDropdown';
import { Button, Card, CardBody, Input } from '@nextui-org/react';

type SandLayoutProps = {
  preset: Preset;
  // title: string;
  // toSave: boolean;
  // toSaveClear: (bool: boolean) => void;
  // onChangeTitle: (title: string) => void;
  onChangePreset: (preset: unknown) => void;
}

export type Cobble = {
  title: string;
  preset: Preset;
  files: {};
  activeFile?: string;
}
export type CobbleServer = Cobble & {
  _id: string;
}

const SandLayout = ({ onChangePreset, preset }: SandLayoutProps) => {
  const [title, setTitle] = useState<string>('new cobble')

  const { sandpack } = useSandpack();
  const { files, addFile, activeFile, editorState } = sandpack;


  const saveCobble = useCallback(async () => {
    // if ( !!toSave ) {
    try {
      let response = await fetch("http://localhost:3000/api/addCobble", {
        method: "POST",
        body: JSON.stringify({
          title,
          preset,
          files,
          activeFile,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Description-Type": "application/json",
        },
      });
      response = await response.json();
      // setTitle("");
      // setError('')
    } catch (errorMessage: any) {
      // setError(errorMessage);
    }
    // } else {
    //   // return setError("All fields are required");
    // }
  }, [activeFile, files, preset, title])





  return (
    <>
      <div>
        <Card
          className="bg-gradient-to-r from-primary-100"
          radius="lg"
          fullWidth={true}
          isBlurred={true}

        >
          <CardBody>
            <div className="flex">
              <div className="flex w-auto items-center">
                <Input
                  color="primary"
                  radius="full"
                  size="lg"
                  value={title}
                  onValueChange={(title: string) => setTitle(title)}
                />
                <Button
                  className="ml-6"
                  color="primary"
                  // onClick={saveCobble}
                  radius="full"
                  variant="flat"
                  size="sm"
                // disabled={saved.current}
                >save</Button>
                {/* <Button
                className="ml-6"
                color="primary"
                onClick={() => setToSave(true)}
                
                radius="full"
                variant="flat"
                size="sm"
              // disabled={saved.current}
              >save</Button> */}
              </div>
              <div className="flex ml-auto items-center">
                <PresetDropdown onSelect={onChangePreset} selected={preset} />
                {/* <ThemeDropdown onSelect={handleThemeChange} theme={theme} /> */}
              </div>
            </div>

          </CardBody>
        </Card>
      </div>
      <div className="grow pt-4 flex flex-col">
        <SandpackLayout
          style={{
            height: '100%',
            borderRadius: '14px',
          }}
        >
          <SandpackCodeEditor
            style={{
              height: '100%',
            }}
            showTabs={true}
            // closableTabs={true}
            showInlineErrors={true}
            showLineNumbers={true}
            wrapContent={true}

          />
          <SandpackPreview
            style={{
              height: '100%',
            }}
            showOpenInCodeSandbox={false}
            showRefreshButton={true}
          />
        </SandpackLayout>
      </div>
    </>
  )



}


export default function SandEditor() {
  const [preset, setPreset] = useState<Preset>('react');
  // const [toSave, setToSave] = useState(false);
  // const saved = useRef(true);

  // const toSaveClear = (boolean: boolean) => {
  //   setToSave(boolean);
  // }


  const onChangePreset = (newValue: unknown) => {
    setPreset(newValue as Preset)
  }


  return (
    <SandpackProvider
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
      customSetup={{
        dependencies: presets[preset].dependencies,
      }}
      files={presets[preset].files as SandpackFiles}
      theme="dark"
      template={presets[preset].template}
      options={{
        externalResources: presets[preset].externalResources,
        // visibleFiles: ["/App.js", "/Button.js"],
        // activeFile: presets[preset].activeFile,

      }}
    >
      <SandLayout
        onChangePreset={onChangePreset}
        preset={preset}
      />
    </SandpackProvider>
  )

}
