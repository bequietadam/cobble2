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
import useDocumentClientSize from '@hooks/useDocumentClientSize';
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
const toolVariants: Variants = {
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

  const { width } = useDocumentClientSize();
  const { height } = useWindowSize();
  const minWidth = 200; // width of the fileExplorer
  const maxWidth = width - 32 - (minWidth * 2);
  const [initWidth, setInitWidth] = useState(cobble.resizeValue)

  useEffect(() => {
    setInitWidth(state => state === resizeValue ? state : resizeValue)
  }, [resizeValue, width])



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


  const sandpackComponentHeight = !!height ? width <= 420 ? (height - 238) / 2 : width <= 768 ? (height - 194) / 2 : (height - 148) : 0;


  return (
    <>
      <div ref={lazyAnchorRef}>
        <AnimatePresence>
          {error ? <AlertMessage type="error" message={error} /> : null}
          {message ? <AlertMessage message={message} /> : null}
        </AnimatePresence>
        <div className="flex flex-wrap">
          <div className="flex w-full shrink md:pr-6 md:w-56 md:grow md:max-w-xs items-center">
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
          <div className="flex flex-wrap items-center justify-start sm:justify-end pt-3 md:pt-0 w-full md:w-auto md:ml-auto">
            <div className="w-full xs:w-auto h-8 shrink grow md:grow-0 md:w-56 pt-3 md:pt-0 relative">
              <AnimatePresence initial={false} >
                <motion.div
                  className="w-full absolute top-0 right-0"
                  animate={showNewFileInput ? 'anim' : 'init'}
                  variants={toolVariants}
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
                <motion.div
                  className="w-full xs:w-auto absolute top-0 right-0"
                  animate={!showNewFileInput ? 'anim' : 'init'}
                  variants={toolVariants}
                >
                  <Button
                    className="px-6 opacity-90"
                    color="danger"
                    onClick={() => deleteActiveFile()}
                    radius="full"
                    variant="ghost"
                    size="sm"
                  >delete active file</Button>
                </motion.div>
              </AnimatePresence>
            </div>
            <Button
              className="ml-0 xs:ml-3 mt-3 xs:mt-0 px-6 w-32"
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
      <div className="grow pt-3 flex flex-col relative">
        <SandpackLayout
          style={{
            borderRadius: '14px',
            borderWidth: 0,
            width: '100%',
          }}
        >
          {// height will always be undefined in SSR preventing hydration issues
            !!height && width > 768 ?
              <SandpackFileExplorer
                style={{
                  height: !!height ? sandpackComponentHeight : '100%',
                  flexGrow: 0,
                  width: minWidth,
                }}
              /> :
              ''}
          {// height will always be undefined in SSR preventing hydration issues
            !!height && width > 768 ?
              <ResizablePanel
                initWidth={initWidth}
                minWidth={minWidth}
                maxWidth={maxWidth}
                setResizeValue={setResizeValue}
              >
                <SandpackCodeEditor
                  style={{
                    height: !!height ? sandpackComponentHeight : '10px',
                    minHeight: 0,
                  }}
                  showTabs={true}
                  // closableTabs={true}
                  showInlineErrors={true}
                  showLineNumbers={true}
                  wrapContent={true}

                />
              </ResizablePanel> :
              <SandpackCodeEditor
                style={{
                  height: !!height ? sandpackComponentHeight : '10px',
                  minHeight: 0,
                  flexGrow: 1,
                  flexShrink: 1,
                  width: 'auto',
                  minWidth: minWidth,
                }}
                showTabs={true}
                // closableTabs={true}
                showInlineErrors={true}
                showLineNumbers={true}
                wrapContent={true}

              />
          }
          {/* <SandpackConsole /> */}
          <SandpackPreview
            style={{
              height: !!height ? sandpackComponentHeight : '100%',
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
