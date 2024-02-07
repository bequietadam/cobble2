"use client"
import { SandpackFiles, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import React from 'react';
import { CobbleServer } from './SandEditor';
import presets from '@constants/presets';


type SandPreviewProps = {
  cobble: CobbleServer;
  disabled: boolean;
}

export default function SandPreview({ cobble, disabled }: SandPreviewProps) {


  return (
    <>
      <SandpackProvider
        customSetup={{
          dependencies: presets[cobble.preset].dependencies,
        }}
        files={cobble.files as SandpackFiles}
        theme="dark"
        template={presets[cobble.preset].template}
        options={{
          externalResources: presets[cobble.preset].externalResources,
          // visibleFiles: ["/App.js", "/Button.js"],
          activeFile: cobble.activeFile,

        }}
      >
        <SandpackLayout
          style={{
            // flex: '1 1 0'
            borderRadius: '14px',
          }}
        >
          <SandpackPreview
            style={{
              // height: 'auto'
            }}
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
          />
        </SandpackLayout>
        <div className="absolute w-full h-full bg-black/20 top-0 backdrop-blur-sm hover:backdrop-blur-none hover:bg-transparent transition-all rounded-2xl border-3 border-white" >

        </div>
      </SandpackProvider>
    </>
  )
}
