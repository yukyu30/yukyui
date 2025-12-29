import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Checkbox
 *
 * クラス構造: fb-checkbox -size-{value} -color-{value}
 *
 * @example
 * <FbCheckbox />
 * <FbCheckbox color="informative" checked />
 */

const fbCheckboxVariants = cva(
  "fb-checkbox peer shrink-0 rounded border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        s: "-size-s h-4 w-4",
        m: "-size-m h-5 w-5",
        l: "-size-l h-6 w-6",
      },
      color: {
        neutral: "-color-neutral border-gray-400 data-[state=checked]:border-gray-600 data-[state=checked]:bg-gray-600 data-[state=indeterminate]:border-gray-600 data-[state=indeterminate]:bg-gray-600 dark:border-gray-500 dark:data-[state=checked]:border-gray-400 dark:data-[state=checked]:bg-gray-400 dark:data-[state=indeterminate]:border-gray-400 dark:data-[state=indeterminate]:bg-gray-400",
        informative: "-color-informative border-gray-400 data-[state=checked]:border-[#002CED] data-[state=checked]:bg-[#002CED] data-[state=indeterminate]:border-[#002CED] data-[state=indeterminate]:bg-[#002CED] dark:border-gray-500 dark:data-[state=checked]:border-[#3361ef] dark:data-[state=checked]:bg-[#3361ef] dark:data-[state=indeterminate]:border-[#3361ef] dark:data-[state=indeterminate]:bg-[#3361ef]",
        positive: "-color-positive border-gray-400 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=indeterminate]:border-green-600 data-[state=indeterminate]:bg-green-600 dark:border-gray-500 dark:data-[state=checked]:border-green-500 dark:data-[state=checked]:bg-green-500 dark:data-[state=indeterminate]:border-green-500 dark:data-[state=indeterminate]:bg-green-500",
        negative: "-color-negative border-gray-400 data-[state=checked]:border-red-600 data-[state=checked]:bg-red-600 data-[state=indeterminate]:border-red-600 data-[state=indeterminate]:bg-red-600 dark:border-gray-500 dark:data-[state=checked]:border-red-500 dark:data-[state=checked]:bg-red-500 dark:data-[state=indeterminate]:border-red-500 dark:data-[state=indeterminate]:bg-red-500",
      },
    },
    defaultVariants: {
      size: "m",
      color: "informative",
    },
  }
)

export interface FbCheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "color">,
    VariantProps<typeof fbCheckboxVariants> {}

function FbCheckbox({
  className,
  size,
  color,
  ...props
}: FbCheckboxProps) {
  const iconSize = size === "s" ? "h-3 w-3" : size === "l" ? "h-4 w-4" : "h-3.5 w-3.5"

  return (
    <CheckboxPrimitive.Root
      data-slot="fb-checkbox"
      className={cn(fbCheckboxVariants({ size, color, className }))}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="fb-checkbox-indicator"
        className="flex items-center justify-center text-white"
      >
        {props.checked === "indeterminate" ? (
          <Minus className={iconSize} />
        ) : (
          <Check className={iconSize} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { FbCheckbox, fbCheckboxVariants }
