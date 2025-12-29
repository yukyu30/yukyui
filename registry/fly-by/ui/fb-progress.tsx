import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Progress
 *
 * クラス構造: fb-progress -size-{value} -color-{value}
 *
 * @example
 * <FbProgress value={60} />
 * <FbProgress value={80} color="positive" size="l" />
 */

const fbProgressVariants = cva(
  "fb-progress relative w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
  {
    variants: {
      size: {
        s: "-size-s h-1",
        m: "-size-m h-2",
        l: "-size-l h-3",
        xl: "-size-xl h-4",
      },
    },
    defaultVariants: {
      size: "m",
    },
  }
)

const fbProgressIndicatorVariants = cva(
  "h-full w-full flex-1 transition-all duration-300 ease-in-out",
  {
    variants: {
      color: {
        neutral: "-color-neutral bg-gray-600 dark:bg-gray-400",
        informative: "-color-informative bg-[#002CED] dark:bg-[#3361ef]",
        positive: "-color-positive bg-green-600 dark:bg-green-400",
        negative: "-color-negative bg-red-600 dark:bg-red-400",
        favorite: "-color-favorite bg-pink-500 dark:bg-pink-400",
      },
    },
    defaultVariants: {
      color: "informative",
    },
  }
)

export interface FbProgressProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, "color">,
    VariantProps<typeof fbProgressVariants>,
    VariantProps<typeof fbProgressIndicatorVariants> {}

function FbProgress({
  className,
  value,
  size,
  color,
  ...props
}: FbProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="fb-progress"
      className={cn(fbProgressVariants({ size, className }))}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="fb-progress-indicator"
        className={cn(fbProgressIndicatorVariants({ color }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { FbProgress, fbProgressVariants, fbProgressIndicatorVariants }
