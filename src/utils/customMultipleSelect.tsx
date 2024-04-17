import * as React from 'react';
import { X } from 'lucide-react';

import { Badge } from '@/components/shadcn/ui/badge';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/shadcn/ui/command';
import { Command as CommandPrimitive } from 'cmdk';

type Item = Record<'value' | 'label', string>;

interface FancyMultiSelectProps {
  selectedItems: Item[];
  selectables: Item[];
  onChange: (selected: Item[]) => void;
}
// const FRAMEWORKS = [
//   {
//     value: 'wCompany',
//     label: 'wCompany',
//   },
//   {
//     value: 'iCompany',
//     label: 'iCompany',
//   },
//   {
//     value: 'xPDV',
//     label: 'xPDV',
//   },
// ] satisfies Framework[];

export function FancyMultiSelect({ selectedItems, selectables, onChange}: FancyMultiSelectProps ) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  // const [selected, setSelected] = React.useState<Value[]>([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = React.useCallback((item: Item) => {
    onChange(selectedItems.filter(s => s.value !== item.value));
  }, [selectedItems, onChange]);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (input) {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (input.value === '') {
          onChange(selectedItems.slice(0, -1));
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === 'Escape') {
        input.blur();
      }
    }
  }, [onChange, selectedItems]);

  // const selectables = FRAMEWORKS.filter(framework => !selected.includes(framework));

  return (
    <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div
        className="group border border-input px-2 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
      >
        <div className="flex gap-1 flex-wrap">
          {selectedItems.map((item) => {
            return (
              <Badge key={item.value} variant="secondary" className='font-light'>
                {item.label}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(item);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(item)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder=""
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ?
          <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandList>
              <CommandGroup className="overflow-auto">
                {selectables.map((item) => {
                  return (
                    <CommandItem
                      key={item.value}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      onSelect={() => {
                        setInputValue('');
                        onChange([...selectedItems, item]);
                      }}
                      className={'cursor-pointer'}
                    >
                      {item.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </div>
          : null}
      </div>
    </Command >
  );
}
