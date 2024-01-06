import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import languageOptions from "@constants/languageOptions";

type Option = {
  id: number;
  name: string;
}

type LanguageDropdownProps = {
  onSelect: (newValue: unknown) => void;
  selected?: string
}


const LanguageDropdown = ({ onSelect, selected }: LanguageDropdownProps) => {
  const options: Option[] = languageOptions.map(({ id, name }) => { return { id: id, name: name } })


  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="flat"
          size="sm"
        >
          {!!selected ? selected : 'Select language'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={options} onAction={onSelect}>
        {(item) => (
          <DropdownItem
            key={(item as Option).name}
          >
            {(item as Option).name}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
};

export default LanguageDropdown;
