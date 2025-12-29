import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Spinner
 *
 * クラス構造: fb-spinner -size-{value} -color-{value}
 *
 * @example
 * <FbSpinner />
 * <FbSpinner size="l" color="informative" />
 */

const fbSpinnerVariants = cva(
  "fb-spinner inline-block animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        xs: "-size-xs h-3 w-3",
        s: "-size-s h-4 w-4",
        m: "-size-m h-5 w-5",
        l: "-size-l h-6 w-6",
        xl: "-size-xl h-8 w-8",
      },
      color: {
        neutral: "-color-neutral text-gray-600 dark:text-gray-400",
        informative: "-color-informative text-[#002CED] dark:text-[#3361ef]",
        positive: "-color-positive text-green-600 dark:text-green-400",
        negative: "-color-negative text-red-600 dark:text-red-400",
        favorite: "-color-favorite text-pink-500 dark:text-pink-400",
        current: "-color-current text-current",
      },
    },
    defaultVariants: {
      size: "m",
      color: "neutral",
    },
  }
)

export interface FbSpinnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof fbSpinnerVariants> {
  /** アクセシビリティ用のラベル */
  label?: string
}

function FbSpinner({
  className,
  size,
  color,
  label = "読み込み中",
  ...props
}: FbSpinnerProps) {
  return (
    <div
      data-slot="fb-spinner"
      role="status"
      aria-label={label}
      className={cn(fbSpinnerVariants({ size, color, className }))}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  )
}

export { FbSpinner, fbSpinnerVariants }
