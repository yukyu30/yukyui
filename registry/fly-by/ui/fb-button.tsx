import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Button
 *
 * クラス構造: fb-button -appearance-{value} -color-{value} -size-{value}
 *
 * @example
 * <FbButton appearance="solid" color="informative" size="m">
 *   保存する
 * </FbButton>
 */

const fbButtonVariants = cva(
  // Base styles
  "fb-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      appearance: {
        flat: "-appearance-flat bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
        outlined: "-appearance-outlined border-2 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900",
        solid: "-appearance-solid text-white shadow-sm",
        transparent: "-appearance-transparent bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
      },
      color: {
        neutral: "-color-neutral",
        informative: "-color-informative",
        positive: "-color-positive",
        negative: "-color-negative",
        favorite: "-color-favorite",
      },
      size: {
        xs: "-size-xs h-6 px-2 text-xs",
        s: "-size-s h-8 px-3 text-sm",
        m: "-size-m h-9 px-4 text-sm",
        l: "-size-l h-10 px-5 text-base",
        xl: "-size-xl h-12 px-6 text-lg",
      },
      width: {
        auto: "",
        full: "-width-full w-full",
      },
    },
    compoundVariants: [
      // Solid + Color combinations (Yukyu Flavor: #002CED as primary)
      { appearance: "solid", color: "informative", className: "bg-[#002CED] hover:bg-[#0025c4] focus-visible:ring-[#002CED]" },
      { appearance: "solid", color: "positive", className: "bg-green-600 hover:bg-green-700 focus-visible:ring-green-600" },
      { appearance: "solid", color: "negative", className: "bg-red-600 hover:bg-red-700 focus-visible:ring-red-600" },
      { appearance: "solid", color: "neutral", className: "bg-gray-600 hover:bg-gray-700 focus-visible:ring-gray-600" },
      { appearance: "solid", color: "favorite", className: "bg-pink-500 hover:bg-pink-600 focus-visible:ring-pink-500" },
      // Outlined + Color combinations
      { appearance: "outlined", color: "informative", className: "border-[#002CED] text-[#002CED] hover:bg-[#e6ebfd]" },
      { appearance: "outlined", color: "positive", className: "border-green-600 text-green-600 hover:bg-green-50" },
      { appearance: "outlined", color: "negative", className: "border-red-600 text-red-600 hover:bg-red-50" },
      { appearance: "outlined", color: "neutral", className: "border-gray-300 text-gray-700 hover:bg-gray-50" },
      { appearance: "outlined", color: "favorite", className: "border-pink-500 text-pink-500 hover:bg-pink-50" },
      // Flat + Color combinations
      { appearance: "flat", color: "informative", className: "bg-[#e6ebfd] text-[#002CED] hover:bg-[#ccd7fb]" },
      { appearance: "flat", color: "positive", className: "bg-green-100 text-green-700 hover:bg-green-200" },
      { appearance: "flat", color: "negative", className: "bg-red-100 text-red-700 hover:bg-red-200" },
      { appearance: "flat", color: "neutral", className: "bg-gray-100 text-gray-700 hover:bg-gray-200" },
      { appearance: "flat", color: "favorite", className: "bg-pink-100 text-pink-600 hover:bg-pink-200" },
      // Transparent + Color combinations
      { appearance: "transparent", color: "informative", className: "text-[#002CED] hover:bg-[#e6ebfd]" },
      { appearance: "transparent", color: "positive", className: "text-green-600 hover:bg-green-50" },
      { appearance: "transparent", color: "negative", className: "text-red-600 hover:bg-red-50" },
      { appearance: "transparent", color: "neutral", className: "text-gray-600 hover:bg-gray-100" },
      { appearance: "transparent", color: "favorite", className: "text-pink-500 hover:bg-pink-50" },
    ],
    defaultVariants: {
      appearance: "flat",
      color: "neutral",
      size: "m",
      width: "auto",
    },
  }
)

export interface FbButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof fbButtonVariants> {
  asChild?: boolean
}

function FbButton({
  className,
  appearance,
  color,
  size,
  width,
  asChild = false,
  children,
  ...props
}: FbButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="fb-button"
      className={cn(fbButtonVariants({ appearance, color, size, width, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { FbButton, fbButtonVariants }
