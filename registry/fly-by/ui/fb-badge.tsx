import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Badge
 *
 * クラス構造: fb-badge -appearance-{value} -color-{value} -size-{value}
 *
 * @example
 * <FbBadge color="informative">New</FbBadge>
 * <FbBadge appearance="solid" color="positive">Success</FbBadge>
 */

const fbBadgeVariants = cva(
  "fb-badge inline-flex items-center justify-center rounded-full font-medium transition-colors",
  {
    variants: {
      appearance: {
        flat: "-appearance-flat",
        outlined: "-appearance-outlined border bg-transparent",
        solid: "-appearance-solid text-white",
      },
      color: {
        neutral: "-color-neutral",
        informative: "-color-informative",
        positive: "-color-positive",
        negative: "-color-negative",
        favorite: "-color-favorite",
      },
      size: {
        s: "-size-s h-5 px-2 text-xs",
        m: "-size-m h-6 px-2.5 text-xs",
        l: "-size-l h-7 px-3 text-sm",
      },
    },
    compoundVariants: [
      // Flat + Color
      { appearance: "flat", color: "neutral", className: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
      { appearance: "flat", color: "informative", className: "bg-[#e6ebfd] text-[#002CED] dark:bg-[#001049] dark:text-[#3361ef]" },
      { appearance: "flat", color: "positive", className: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" },
      { appearance: "flat", color: "negative", className: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" },
      { appearance: "flat", color: "favorite", className: "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300" },
      // Solid + Color
      { appearance: "solid", color: "neutral", className: "bg-gray-600 dark:bg-gray-500" },
      { appearance: "solid", color: "informative", className: "bg-[#002CED] dark:bg-[#3361ef]" },
      { appearance: "solid", color: "positive", className: "bg-green-600 dark:bg-green-500" },
      { appearance: "solid", color: "negative", className: "bg-red-600 dark:bg-red-500" },
      { appearance: "solid", color: "favorite", className: "bg-pink-500 dark:bg-pink-400" },
      // Outlined + Color
      { appearance: "outlined", color: "neutral", className: "border-gray-400 text-gray-700 dark:border-gray-500 dark:text-gray-300" },
      { appearance: "outlined", color: "informative", className: "border-[#002CED] text-[#002CED] dark:border-[#3361ef] dark:text-[#3361ef]" },
      { appearance: "outlined", color: "positive", className: "border-green-600 text-green-600 dark:border-green-500 dark:text-green-400" },
      { appearance: "outlined", color: "negative", className: "border-red-600 text-red-600 dark:border-red-500 dark:text-red-400" },
      { appearance: "outlined", color: "favorite", className: "border-pink-500 text-pink-500 dark:border-pink-400 dark:text-pink-400" },
    ],
    defaultVariants: {
      appearance: "flat",
      color: "neutral",
      size: "m",
    },
  }
)

export interface FbBadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof fbBadgeVariants> {}

function FbBadge({
  className,
  appearance,
  color,
  size,
  ...props
}: FbBadgeProps) {
  return (
    <span
      data-slot="fb-badge"
      className={cn(fbBadgeVariants({ appearance, color, size, className }))}
      {...props}
    />
  )
}

export { FbBadge, fbBadgeVariants }
