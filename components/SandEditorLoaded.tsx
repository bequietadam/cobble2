'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { Sandpack, SandpackCodeEditor, SandpackFiles, SandpackLayout, SandpackPreview, SandpackProvider, useSandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import ThemeDropdown from '@components/ThemeDropdown';
import presets from '@constants/presets';
import PresetDropdown, { Preset } from '@components/PresetDropdown';
import { Button, Input } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import useWindowSize from '@hooks/useWindowSize';
import Loader from './Loader';
import { useUser } from '@clerk/nextjs';

type PageProps = {
  cobble: CobbleServer;
}

type SandLayoutProps = {
  cobble: CobbleServer;
  preset: Preset;
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

const SandLayout = ({ cobble, onChangePreset, preset }: SandLayoutProps) => {
  const [title, setTitle] = useState<string>(cobble.title);
  const [newFileName, setNewFileName] = useState<string>('');
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [saved, setSaved] = useState(false);

  const { sandpack } = useSandpack();
  const { files, addFile, activeFile, openFile, status, visibleFiles } = sandpack;

  const size = useWindowSize();

  
  const {user, isLoaded} = useUser();



  const saveCobble = useCallback(async () => {
    if (!!title) {
      try {
        setSaved(true);
        let response = await fetch("/api/editCobble?id=" + cobble._id, {
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
        setError('');
        setSaved(false);
        setMessage('saved! :)')
        setTimeout(() => setMessage(''), 2000);
      } catch (errorMessage: any) {
        setError(errorMessage);
        setSaved(false);
      }
    } else {
      return setError("A title is required");
    }
  }, [activeFile, files, preset, title, cobble._id])


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
        {error ? <div className="alert-error">{error}</div> : null}
        {message ? <div className="alert-message">{message}</div> : null}
        <div className="flex">
          <div className="flex w-auto items-center">
            <Input
              color="primary"
              radius="full"
              size="lg"
              value={title}
              placeholder="new cobble"
              onValueChange={(title: string) => setTitle(title)}
              endContent={!!isLoaded && !!user && 
                <Button
                  className="px-4"
                  color="primary"
                  onClick={saveCobble}
                  radius="full"
                  variant="flat"
                  size="sm"
                  disabled={saved}
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
              color="default"
              onClick={showNewFileInput ? saveNewFile : addNewFile}
              radius="full"
              variant="ghost"
              size="sm"
            >{showNewFileInput ? 'save new file' : 'add new file'}</Button>
            {/* <PresetDropdown onSelect={onChangePreset} selected={preset} /> */}
            {/* <ThemeDropdown onSelect={handleThemeChange} theme={theme} /> */}
          </div>
        </div>
      </div>
      <div className="grow pt-4 flex flex-col">
        {!status || status === 'initial' ? <Loader /> :
          <SandpackProvider
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
            // customSetup={{
            //   dependencies:  presets[cobble.preset].dependencies,
            // }}
            files={cobble.files}
            theme={nightOwl}
            template={presets[cobble.preset].template}
            options={{
              externalResources: presets[cobble.preset].externalResources,
              //   // visibleFiles: cobble.visibleFiles,
              //   // activeFile: cobble.activeFile,

            }}
          // autoSave='true'
          >
            <SandpackLayout
              style={{
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
              // showRefreshButton={true}
              // showRestartButton={true}
              />
            </SandpackLayout>
          </SandpackProvider>
        }
      </div>
    </>
  )



}


export default function SandEditorLoaded({ cobble }: PageProps) {
  const [preset, setPreset] = useState<Preset>(cobble.preset);

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
      // customSetup={{
      //   dependencies:  presets[cobble.preset].dependencies,
      // }}
      files={cobble.files}
      theme={nightOwl}
      template={presets[cobble.preset].template}
      options={{
        externalResources: presets[cobble.preset].externalResources,
        //   // visibleFiles: cobble.visibleFiles,
        //   // activeFile: cobble.activeFile,

      }}
    // autoSave='true'
    >
      <SandLayout
        cobble={cobble}
        onChangePreset={onChangePreset}
        preset={cobble.preset}
      />
    </SandpackProvider>
  )

}
