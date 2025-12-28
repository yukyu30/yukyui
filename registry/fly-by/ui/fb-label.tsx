"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

/**
 * fly-by Label
 *
 * フォームフィールドのラベルに使用
 */

function FbLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="fb-label"
      className={cn(
        "fb-label text-sm font-medium text-gray-700 dark:text-gray-300 select-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { FbLabel }
