import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import monacoThemes from "monaco-themes/themes/themelist.json";
import { MonacoTheme } from '@/constants/monacoThemes';
import themes from '@codesandbox/sandpack-themes';

type ThemeDropdownProps = {
  onSelect: (newValue: unknown) => void;
  theme: string;
}

type Option = {
  id: string;
  name: string;
}


const ThemeDropdown = ({ onSelect, theme }: ThemeDropdownProps) => {


  const entries = Object.entries(monacoThemes)

  const options:  Option[] = entries.map(([themeId, themeName]) => { return {id: themeId, name: themeName} })
  
  // return (
  //   <Select
  //     placeholder={'Select theme'}
  //     options={options}
  //     value={theme}
  //     // styles={customStyles}
  //     onChange={handleThemeChange}
  //   />
  // );


  
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
        >
          select theme
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={options} onAction={onSelect}>
        {(item) => (
          <DropdownItem
            key={(item as Option).id}
          >
            {(item as Option).name}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
};



export default ThemeDropdown;
