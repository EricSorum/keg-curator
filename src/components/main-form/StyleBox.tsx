import * as React from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react" 
import { FormLabel, FormDescription } from "../ui/form"
import StyleCard from "../cards/StyleCard"
import { styles } from "@/lib/constants"
import { StyleType } from "@/models/StyleType"

export default function StyleBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [chosenStyles, setChoice] = React.useState<StyleType[]>([])

  return (
    <div className="w-full mb-4">
      <div id="chosen-styles-box" className="w-full border rounded-md border-amber-200 bg-muted min-h-[40px]">
        {chosenStyles.length > 0 ? (
          chosenStyles.map((style, index) => (
            <StyleCard key={index} style={style} />
          ))
        ) : (
          <p className="text-muted-foreground">Chosen styles go here.</p>
        )}



      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <FormLabel>Styles</FormLabel>
        <FormDescription>Select styles and types of beer you wish to include in the menu.</FormDescription>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? styles.find((style) => style.value === value)?.label
              : "Select style..."}
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search style..." />
            <CommandList>
              <CommandEmpty>No styles found.</CommandEmpty>
              <CommandGroup>
                {styles.map((style) => (
                  <CommandItem
                    key={style.value}
                    value={style.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      
                      if (currentValue === value) {
                        return;
                      } else {
                        setChoice([...chosenStyles, style])
                      }

                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === style.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {style.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}