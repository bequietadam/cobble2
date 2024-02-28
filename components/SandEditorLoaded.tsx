'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { Sandpack, SandpackCodeEditor, SandpackConsole, SandpackFileExplorer, SandpackFiles, SandpackLayout, SandpackPreview, SandpackProvider, useSandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import ThemeDropdown from '@components/ThemeDropdown';
import presets from '@constants/presets';
import PresetDropdown, { Preset } from '@components/PresetDropdown';
import { Button, Input } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import useWindowSize from '@hooks/useWindowSize';
import { useUser } from '@clerk/nextjs';
import AlertMessage from './AlertMessage';
import ResizablePanel from './ResizablePanel';
import useWindowSize2 from '@hooks/useWindowSize2';
import Loader from './Loader';

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
  resizeValue: number;
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
  const [resizeValue, setResizeValue] = useState(cobble.resizeValue);

  const { sandpack } = useSandpack();
  const { files, addFile, activeFile, deleteFile, lazyAnchorRef, openFile, status, visibleFiles } = sandpack;

  const { width } = useWindowSize2();
  const { height } = useWindowSize();


  const { user, isLoaded } = useUser();



  const saveCobble = useCallback(async () => {
    if (!!title && (!!isLoaded && !!user)) {
      try {
        setSaved(true);
        let response = await fetch("/api/editCobble?id=" + cobble._id, {
          method: "POST",
          body: JSON.stringify({
            title,
            preset,
            files,
            activeFile,
            resizeValue,
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
        setTimeout(() => setMessage(''), 3000);
      } catch (errorMessage: any) {
        setError(errorMessage);
        setSaved(false);
      }
    } else if (!title) {
      setError("A title is required");
      setTimeout(() => setError(''), 4000);
      return;
    } else {
      setError('Sorry, guests cannot save projects');
      setTimeout(() => setError(''), 4000);
      return;
    }
  }, [activeFile, files, preset, title, isLoaded, user, cobble._id, resizeValue])

  const deleteActiveFile = useCallback(() => {
    deleteFile(activeFile);
  }, [activeFile, deleteFile])

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
        // hidden: false,
        // active: true,
      }
    }, undefined, true);
    openFile(newFilePath);
    setNewFileName('');
  }

  const addNewFile = () => {
    setNewFileName('');
    setShowNewFileInput(true);
  }



  const minWidth = 202; // width of the fileExplorer
  const maxWidth = width - 32 - (minWidth * 2);
  const initWidth = !!cobble.resizeValue ? cobble.resizeValue : (width - minWidth - 32) / 2;




  return (
    <>
      <div ref={lazyAnchorRef}>
        <AnimatePresence>
          {error ? <AlertMessage type="error" message={error} /> : null}
          {message ? <AlertMessage message={message} /> : null}
        </AnimatePresence>
        <div className="flex">
          <div className="flex w-80 items-center">
            <Input
              color="primary"
              radius="full"
              size="md"
              value={title}
              placeholder="new cobble"
              onValueChange={(title: string) => setTitle(title)}
              endContent={
                <Button
                  color="primary"
                  onClick={saveCobble}
                  radius="full"
                  variant="flat"
                  size="sm"
                  disabled={saved}
                >{!!saved ? <span><Loader />{` `}</span> : 'save cobble'}</Button>
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
            <Button
              className="mr-6 px-6 opacity-90"
              color="danger"
              onClick={() => deleteActiveFile()}
              radius="full"
              variant="ghost"
              size="sm"
            >delete active file</Button>
            {/* <PresetDropdown onSelect={onChangePreset} selected={preset} /> */}
            {/* <ThemeDropdown onSelect={handleThemeChange} theme={theme} /> */}
          </div>
        </div>
      </div>
      <div className="grow pt-3 flex flex-col relative">
        <SandpackLayout
          style={{
            borderRadius: '14px',
            borderWidth: 0,
            width: '100%',
          }}
        >
          <SandpackFileExplorer
            style={{
              height: !!height ? (height - 148) + 'px' : '100%',
            }}
          />
          <ResizablePanel
            initWidth={initWidth}
            minWidth={minWidth}
            maxWidth={maxWidth}
            setResizeValue={setResizeValue}
          >
            <SandpackCodeEditor
              style={{
                height: !!height ? (height - 148) + 'px' : '10px',
                minHeight: 0,
              }}
              showTabs={true}
              // closableTabs={true}
              showInlineErrors={true}
              showLineNumbers={true}
              wrapContent={true}

            />
          </ResizablePanel>
          {/* <SandpackConsole /> */}
          <SandpackPreview
            style={{
              height: !!height ? (height - 148) + 'px' : '100%',
            }}
            showOpenInCodeSandbox={false}
          // showRefreshButton={true}
          // showRestartButton={true}
          />
        </SandpackLayout>
        <AnimatePresence initial={false}>
          {(!status || status === 'initial') &&
            <motion.div
              className="h-full w-full absolute top-0 left-0 bg-black rounded-2xl"
              initial="init"
              animate="anim"
              exit="init"
              variants={{
                init: {
                  opacity: 0,
                },
                anim: {
                  opacity: 1,
                },
              }}
            >

            </motion.div>
          }
        </AnimatePresence>
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
        preset={preset}
      />
    </SandpackProvider>
  )

}
