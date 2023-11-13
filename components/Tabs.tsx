import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';

type File = {
  title: string;
  content: React.JSX.Element;
}

type FileGroupProps = {
  files: File[]

}


export default function FileGroup({ files }: FileGroupProps) {


  return (
    <Tabs
      classNames={{
        panel:'flex flex-col grow',
        tabList: 'px-0',
      }}
      size="sm"
      variant="underlined"
    >
      {files.map((item, index) => {

        return (
          <Tab key={index} title={item.title} >
            {item.content}
          </Tab>
        )
      }
      )}
    </Tabs>
  )
}
