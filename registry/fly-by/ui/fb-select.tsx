import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Select
 *
 * クラス構造: fb-select, fb-select-trigger, fb-select-content, fb-select-item, etc.
 *
 * @example
 * <FbSelect>
 *   <FbSelectTrigger>
 *     <FbSelectValue placeholder="選択してください" />
 *   </FbSelectTrigger>
 *   <FbSelectContent>
 *     <FbSelectItem value="1">オプション1</FbSelectItem>
 *     <FbSelectItem value="2">オプション2</FbSelectItem>
 *   </FbSelectContent>
 * </FbSelect>
 */

const FbSelect = SelectPrimitive.Root
const FbSelectGroup = SelectPrimitive.Group
const FbSelectValue = SelectPrimitive.Value

const fbSelectTriggerVariants = cva(
  "fb-select-trigger flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border-2 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:ring-offset-gray-950 dark:placeholder:text-gray-400",
  {
    variants: {
      size: {
        s: "h-8 px-2 text-xs",
        m: "h-9 px-3 text-sm",
        l: "h-10 px-4 text-base",
      },
    },
    defaultVariants: {
      size: "m",
    },
  }
)

interface FbSelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof fbSelectTriggerVariants> {}

function FbSelectTrigger({
  className,
  size,
  children,
  ...props
}: FbSelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="fb-select-trigger"
      className={cn(
        fbSelectTriggerVariants({ size }),
        "border-gray-200 focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-500",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function FbSelectScrollUpButton({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="fb-select-scroll-up-button"
      className={cn(
        "fb-select-scroll-up-button flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function FbSelectScrollDownButton({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="fb-select-scroll-down-button"
      className={cn(
        "fb-select-scroll-down-button flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

function FbSelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="fb-select-content"
        className={cn(
          "fb-select-content relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <FbSelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <FbSelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function FbSelectLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="fb-select-label"
      className={cn(
        "fb-select-label px-2 py-1.5 text-sm font-semibold",
        className
      )}
      {...props}
    />
  )
}

function FbSelectItem({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="fb-select-item"
      className={cn(
        "fb-select-item relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-100",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function FbSelectSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="fb-select-separator"
      className={cn(
        "fb-select-separator -mx-1 my-1 h-px bg-gray-200 dark:bg-gray-700",
        className
      )}
      {...props}
    />
  )
}

export {
  FbSelect,
  FbSelectGroup,
  FbSelectValue,
  FbSelectTrigger,
  FbSelectContent,
  FbSelectLabel,
  FbSelectItem,
  FbSelectSeparator,
  FbSelectScrollUpButton,
  FbSelectScrollDownButton,
}
