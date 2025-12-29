import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Switch
 *
 * クラス構造: fb-switch -size-{value} -color-{value}
 *
 * @example
 * <FbSwitch />
 * <FbSwitch color="positive" checked />
 */

const fbSwitchVariants = cva(
  "fb-switch peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-gray-600",
  {
    variants: {
      size: {
        s: "-size-s h-5 w-9",
        m: "-size-m h-6 w-11",
        l: "-size-l h-7 w-14",
      },
      color: {
        neutral: "-color-neutral data-[state=checked]:bg-gray-600 dark:data-[state=checked]:bg-gray-400",
        informative: "-color-informative data-[state=checked]:bg-[#002CED] dark:data-[state=checked]:bg-[#3361ef]",
        positive: "-color-positive data-[state=checked]:bg-green-600 dark:data-[state=checked]:bg-green-500",
        negative: "-color-negative data-[state=checked]:bg-red-600 dark:data-[state=checked]:bg-red-500",
      },
    },
    defaultVariants: {
      size: "m",
      color: "informative",
    },
  }
)

const fbSwitchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",
  {
    variants: {
      size: {
        s: "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        m: "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        l: "h-6 w-6 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0",
      },
    },
    defaultVariants: {
      size: "m",
    },
  }
)

export interface FbSwitchProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, "color">,
    VariantProps<typeof fbSwitchVariants> {}

function FbSwitch({
  className,
  size,
  color,
  ...props
}: FbSwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="fb-switch"
      className={cn(fbSwitchVariants({ size, color, className }))}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="fb-switch-thumb"
        className={cn(fbSwitchThumbVariants({ size }))}
      />
    </SwitchPrimitive.Root>
  )
}

export { FbSwitch, fbSwitchVariants }
