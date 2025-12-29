import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Toggle
 *
 * クラス構造: fb-toggle -appearance-{value} -size-{value}
 *
 * @example
 * <FbToggle>
 *   <Bold className="h-4 w-4" />
 * </FbToggle>
 */

const fbToggleVariants = cva(
  "fb-toggle inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-200 data-[state=on]:text-gray-900 dark:data-[state=on]:bg-gray-700 dark:data-[state=on]:text-gray-100",
  {
    variants: {
      appearance: {
        default: "-appearance-default bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
        outlined: "-appearance-outlined border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800",
      },
      size: {
        s: "-size-s h-8 w-8 min-w-8",
        m: "-size-m h-9 w-9 min-w-9",
        l: "-size-l h-10 w-10 min-w-10",
      },
    },
    defaultVariants: {
      appearance: "default",
      size: "m",
    },
  }
)

export interface FbToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof fbToggleVariants> {}

function FbToggle({
  className,
  appearance,
  size,
  ...props
}: FbToggleProps) {
  return (
    <TogglePrimitive.Root
      data-slot="fb-toggle"
      className={cn(fbToggleVariants({ appearance, size, className }))}
      {...props}
    />
  )
}

export { FbToggle, fbToggleVariants }
