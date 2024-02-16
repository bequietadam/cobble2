'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { SandpackCodeEditor, SandpackFile, SandpackFileExplorer, SandpackFiles, SandpackLayout, SandpackPreview, SandpackProvider, useSandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import ThemeDropdown from '@components/ThemeDropdown';
import presets from '@constants/presets';
import PresetDropdown, { Preset } from '@components/PresetDropdown';
import { Button, Input } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import useWindowSize from '@hooks/useWindowSize';
import Loader from './Loader';
import { useUser } from '@clerk/nextjs';
import AlertMessage from './AlertMessage';

// type PageProps = {
//   addCobble:(cobble: Cobble) => Promise<void>;
// }

type SandLayoutProps = {
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

const SandLayout = ({ onChangePreset, preset }: SandLayoutProps) => {
  const [title, setTitle] = useState<string>('');
  const [newFileName, setNewFileName] = useState<string>('');
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [saved, setSaved] = useState(false);

  const { sandpack } = useSandpack();
  const { files, addFile, activeFile, lazyAnchorRef, openFile, runSandpack, status, updateFile, updateCurrentFile, visibleFiles } = sandpack;

  const size = useWindowSize();

  const { user, isLoaded } = useUser();


  // useEffect(() => {
  //   updateFile(presets[preset].files as SandpackFiles)
  //   // const newFiles = presets[preset].files || {};
  //   // const newCurrent = newFiles[Object.keys(newFiles)[0]]
  //   // updateCurrentFile(newCurrent)
  // }, [preset, updateFile])


  console.log(files);

  const saveCobble = useCallback(async () => {
    if (!!title && (!!isLoaded && !!user)) {
      try {
        setSaved(true);
        let response = await fetch("/api/addCobble", {
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
        let savedCobble = await response.json();
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
  }, [activeFile, files, preset, title, isLoaded, user])


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

  // useEffect(() => {
  //   updateFile(files, undefined, true)
  //   console.log('done')
  // }, [files, updateFile])

  return (
    <>
      <div ref={lazyAnchorRef}>
        <AnimatePresence>
          {error ? <AlertMessage type="error" message={error} /> : null}
          {message ? <AlertMessage message={message} /> : null}
        </AnimatePresence>
        <div className="flex">
          <div className="flex w-auto items-center">
            <Input
              color="primary"
              radius="full"
              size="md"
              value={title}
              placeholder="new cobble"
              onValueChange={(title: string) => setTitle(title)}
              endContent={
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
            <PresetDropdown onSelect={onChangePreset} selected={preset} />
            {/* <ThemeDropdown onSelect={handleThemeChange} theme={theme} /> */}
          </div>
        </div>
      </div>
      <div className="grow pt-3 flex flex-col" >
        {/* {!status || status === 'initial' ? <Loader /> : */}
          {/* <SandpackProvider
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
            // customSetup={{
            //   dependencies: presets[preset].dependencies,
            // }}
            files={presets[preset].files as SandpackFiles}
            theme={nightOwl}
            template={presets[preset].template}
            options={{
              externalResources: presets[preset].externalResources,
              // visibleFiles: visibleFiles,
              // activeFile: activeFile

            }}
            key={activeFile}

          // autoSave='true'
          > */}
          <SandpackLayout
            style={{
              borderRadius: '14px',
              borderWidth: 0,
            }}
          >
            <SandpackFileExplorer />
            <SandpackCodeEditor
              style={{
                height: !!size.height ? (size.height - 148) + 'px' : '100%',
              }}
              // showTabs={true}
              // closableTabs={true}
              showInlineErrors={true}
              showLineNumbers={true}
              wrapContent={false}

            />
            <SandpackPreview
              style={{
                height: !!size.height ? (size.height - 148) + 'px' : '100%',
              }}
              showOpenInCodeSandbox={false}
              showRefreshButton={true}
              showRestartButton={true}
            />
          </SandpackLayout>
          {/* </SandpackProvider> */}
        
      </div>
    </>
  )



}


const SandLayout2 = () => {

  const [title, setTitle] = useState<string>('');
  const [newFileName, setNewFileName] = useState<string>('');
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const size = useWindowSize();


  const { sandpack } = useSandpack();
  const { files, addFile, activeFile, lazyAnchorRef, openFile, runSandpack, status, updateFile, updateCurrentFile, visibleFiles } = sandpack;



  return (
    <div>
        <div ref={lazyAnchorRef}>
          <SandpackLayout
            style={{
              borderRadius: '14px',
              borderWidth: 0,
            }}
          >
            <SandpackFileExplorer />
            <SandpackCodeEditor
              style={{
                height: !!size.height ? (size.height - 148) + 'px' : '100%',
              }}
              showTabs={true}
              // closableTabs={true}
              showInlineErrors={true}
              showLineNumbers={true}
              wrapContent={false}

            />
            <SandpackPreview
              style={{
                height: !!size.height ? (size.height - 148) + 'px' : '100%',
              }}
              showOpenInCodeSandbox={false}
              showRefreshButton={true}
            // showRestartButton={true}
            />
          </SandpackLayout>
        </div>
    </div>
  )
}


export default function SandEditor() {
  const [preset, setPreset] = useState<Preset>('react');


  const size = useWindowSize();



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
      theme={nightOwl}
      // template={presets[preset].template}
      options={{
        externalResources: presets[preset].externalResources,
        //   // visibleFiles: ["/App.js", "/Button.js"],
        //   // activeFile: presets[preset].activeFile,

      }}
    // autoSave='true'
    >
      <SandLayout
        onChangePreset={onChangePreset}
        preset={preset}
      />
      {/* <SandLayout2 /> */}
    </SandpackProvider>
  )
}
