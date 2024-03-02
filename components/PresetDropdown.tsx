import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import presets from '@constants/presets';


export type Presets = typeof presets;

export type Preset = keyof Presets;

type Option = {
  id: number;
  name: Preset;
}

type PresetDropdownProps = {
  className?: string;
  onSelect?: (newValue: unknown) => void;
  selected?: Preset
}


const PresetDropdown = ({ className, onSelect, selected }: PresetDropdownProps) => {
  const presetList = Object.keys(presets) as Preset[];


  const options = presetList.map((presetName, id) => {
    const newOption: Option = { id: id, name: presetName };

    return newOption
  } )
  console.log(className)



  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="opacity-65"
          variant="flat"
          size="sm"
          radius="full"
        >
          {!!selected ? selected : 'Select preset'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Select preset" items={options} onAction={onSelect}>
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

export default PresetDropdown;
