import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Textarea
 *
 * クラス構造: fb-textarea -appearance-{outlined|filled} -size-{s|m|l}
 */

const fbTextareaVariants = cva(
  "fb-textarea flex w-full rounded-md transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[80px]",
  {
    variants: {
      appearance: {
        outlined: "-appearance-outlined border border-gray-300 bg-transparent focus:border-[#002CED] focus:ring-2 focus:ring-[#002CED]/20 dark:border-gray-600 dark:focus:border-[#002CED]",
        filled: "-appearance-filled border border-transparent bg-gray-100 focus:bg-white focus:border-[#002CED] focus:ring-2 focus:ring-[#002CED]/20 dark:bg-gray-800 dark:focus:bg-gray-900",
      },
      size: {
        s: "-size-s px-2 py-1.5 text-sm",
        m: "-size-m px-3 py-2 text-sm",
        l: "-size-l px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      appearance: "outlined",
      size: "m",
    },
  }
)

export interface FbTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof fbTextareaVariants> {}

function FbTextarea({ className, appearance, size, ...props }: FbTextareaProps) {
  return (
    <textarea
      data-slot="fb-textarea"
      className={cn(fbTextareaVariants({ appearance, size, className }))}
      {...props}
    />
  )
}

export { FbTextarea, fbTextareaVariants }
