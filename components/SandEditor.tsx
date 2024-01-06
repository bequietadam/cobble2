'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Sandpack, SandpackCodeEditor, SandpackFiles, SandpackLayout, SandpackPreview, SandpackProvider, useSandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import ThemeDropdown from '@components/ThemeDropdown';
import presets from '@constants/presets';
import PresetDropdown, { Preset } from '@components/PresetDropdown';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import useWindowSize from '@hooks/useWindowSize';
import Loader from './Loader';

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
  const [title, setTitle] = useState<string>('');
  const [newFileName, setNewFileName] = useState<string>('');
  const [showNewFileInput, setShowNewFileInput] = useState(false);

  const { sandpack } = useSandpack();
  const { files, addFile, activeFile, openFile, status } = sandpack;

  const size = useWindowSize();



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


  const saveNewFile = () => {
    if (!newFileName) {
      setShowNewFileInput(false);
      return;
    }
    setShowNewFileInput(false);
    const newFilePath = `/${newFileName}`
    addFile({
      [newFilePath]: {
        code: '',
        hidden: false,
        active: true,
      }
    });
    openFile(newFilePath);
    setNewFileName('');
  }

  const addNewFile = () => {
    setNewFileName('');
    setShowNewFileInput(true);
  }


  return (
    <>
      <div>
        <div className="flex">
          <div className="flex w-auto items-center">
            <Input
              color="primary"
              radius="full"
              size="lg"
              value={title}
              placeholder="new cobble"
              onValueChange={(title: string) => setTitle(title)}
              endContent={
                <Button
                  className="px-4"
                  color="primary"
                  // onClick={saveCobble}
                  radius="full"
                  variant="flat"
                  size="sm"
                // disabled={saved.current}
                >save cobble</Button>
              }
            />
          </div>
          <div className="flex ml-auto items-center">
            <AnimatePresence initial={false} >
              <motion.div
                className="mr-3"
                animate={showNewFileInput ? 'anim' : 'init'}
                variants={{
                  init: {
                    opacity: 0,
                    visibility: 'hidden',
                    transition: {
                      opacity: {
                        duration: 0.3,
                      },
                      visibility: {
                        delay: 0.5,
                      }
                    }
                  },
                  anim: {
                    opacity: 1,
                    visibility: 'visible',
                    transition: {
                      opacity: {
                        duration: 0.3,
                      },
                      // visibility: {
                      //   delay: 0.5,
                      // }
                    }
                  },
                }}
              >
                <Input
                  className="text-default-500"
                  color="default"
                  radius="full"
                  size="sm"
                  value={newFileName}
                  placeholder="newFileName.txt"
                  onValueChange={(newName: string) => setNewFileName(newName)}
                  variant="bordered"
                  disabled={!showNewFileInput}
                />
              </motion.div>
            </AnimatePresence>
            <Button
              className="mr-6 px-6"
              color="primary"
              onClick={showNewFileInput ? saveNewFile : addNewFile}
              radius="full"
              variant="ghost"
              size="sm"
            // disabled={saved.current}
            >{showNewFileInput ? 'save new file' : 'add new file'}</Button>
            <PresetDropdown onSelect={onChangePreset} selected={preset} />
            {/* <ThemeDropdown onSelect={handleThemeChange} theme={theme} /> */}
          </div>
        </div>
      </div>
      <div className="grow pt-4 flex flex-col">
        {!status || status === 'initial' ? <Loader /> : 
        <SandpackLayout
          style={{
            // height: !!size.height ? (size.height - 172) + 'px' : '100%',
            borderRadius: '14px',
            borderWidth: 0,
          }}
        >
          <SandpackCodeEditor
            style={{
              height: !!size.height ? (size.height - 172) + 'px' : '100%',
            }}
            showTabs={true}
            // closableTabs={true}
            showInlineErrors={true}
            showLineNumbers={true}
            wrapContent={false}

          />
          <SandpackPreview
            style={{
              height: !!size.height ? (size.height - 172) + 'px' : '100%',
            }}
            showOpenInCodeSandbox={false}
            showRefreshButton={true}
          />
        </SandpackLayout>}
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
      // files={presets[preset].files as SandpackFiles}
      theme={nightOwl}
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
