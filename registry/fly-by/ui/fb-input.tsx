import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Input
 *
 * クラス構造: fb-input -appearance-{outlined|filled} -size-{s|m|l}
 */

const fbInputVariants = cva(
  "fb-input flex w-full rounded-md transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      appearance: {
        outlined: "-appearance-outlined border border-gray-300 bg-transparent focus:border-[#002CED] focus:ring-2 focus:ring-[#002CED]/20 dark:border-gray-600 dark:focus:border-[#002CED]",
        filled: "-appearance-filled border border-transparent bg-gray-100 focus:bg-white focus:border-[#002CED] focus:ring-2 focus:ring-[#002CED]/20 dark:bg-gray-800 dark:focus:bg-gray-900",
      },
      size: {
        s: "-size-s h-8 px-2 text-sm",
        m: "-size-m h-9 px-3 text-sm",
        l: "-size-l h-10 px-4 text-base",
      },
    },
    defaultVariants: {
      appearance: "outlined",
      size: "m",
    },
  }
)

export interface FbInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof fbInputVariants> {}

function FbInput({ className, appearance, size, type, ...props }: FbInputProps) {
  return (
    <input
      type={type}
      data-slot="fb-input"
      className={cn(fbInputVariants({ appearance, size, className }))}
      {...props}
    />
  )
}

export { FbInput, fbInputVariants }
