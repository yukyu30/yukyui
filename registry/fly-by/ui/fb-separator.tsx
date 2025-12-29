import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Separator
 *
 * クラス構造: fb-separator -orientation-{value}
 *
 * @example
 * <FbSeparator />
 * <FbSeparator orientation="vertical" />
 */

const fbSeparatorVariants = cva(
  "fb-separator shrink-0 bg-gray-200 dark:bg-gray-700",
  {
    variants: {
      orientation: {
        horizontal: "-orientation-horizontal h-px w-full",
        vertical: "-orientation-vertical h-full w-px",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

export interface FbSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof fbSeparatorVariants> {}

function FbSeparator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: FbSeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="fb-separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(fbSeparatorVariants({ orientation, className }))}
      {...props}
    />
  )
}

export { FbSeparator, fbSeparatorVariants }
