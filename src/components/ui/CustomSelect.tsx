"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  id?: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  className?: string;
};

export const CustomSelect = forwardRef<HTMLButtonElement, CustomSelectProps>(
  function CustomSelect(
    {
      id,
      value,
      onValueChange,
      options,
      placeholder,
      "aria-invalid": ariaInvalid,
      "aria-describedby": ariaDescribedBy,
      className,
    },
    ref,
  ) {
    return (
      <Select.Root value={value} onValueChange={onValueChange}>
        <Select.Trigger
          ref={ref}
          id={id}
          aria-invalid={ariaInvalid}
          aria-describedby={ariaDescribedBy}
          className={cn(
            "group flex w-full items-center justify-between gap-3 border-0 border-b border-champagne-on-dark-muted/40 bg-transparent py-3 font-sans text-left text-cream-50 outline-none transition-colors",
            "focus-visible:border-b-brand-red-500",
            "data-[placeholder]:text-cream-50/40",
            className,
          )}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon asChild>
            <ChevronDown
              className="size-4 shrink-0 text-champagne-on-dark transition-transform group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={6}
            className="z-[80] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-sm border border-espresso-700 bg-espresso-800 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
          >
            <Select.Viewport className="p-1">
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className={cn(
                    "relative flex cursor-pointer select-none items-center rounded-sm py-2.5 pl-8 pr-3 font-sans text-sm text-cream-50 outline-none",
                    "data-[highlighted]:bg-espresso-700 data-[highlighted]:text-champagne-on-dark",
                    "data-[state=checked]:text-champagne-on-dark",
                  )}
                >
                  <Select.ItemIndicator className="absolute left-2 flex items-center">
                    <Check className="size-4 text-champagne-on-dark" aria-hidden />
                  </Select.ItemIndicator>
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  },
);
