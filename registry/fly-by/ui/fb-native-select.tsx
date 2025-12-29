import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * fly-by Native Select
 *
 * ネイティブHTML selectのラッパー。モバイルフレンドリーで軽量。
 *
 * クラス構造: fb-native-select
 *
 * @example
 * <FbNativeSelect>
 *   <option value="">選択してください</option>
 *   <option value="1">オプション1</option>
 *   <option value="2">オプション2</option>
 * </FbNativeSelect>
 */

const fbNativeSelectVariants = cva(
  "fb-native-select flex w-full cursor-pointer appearance-none items-center rounded-md border-2 bg-transparent shadow-sm ring-offset-white focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950",
  {
    variants: {
      size: {
        s: "h-8 px-2 pr-8 text-xs",
        m: "h-9 px-3 pr-9 text-sm",
        l: "h-10 px-4 pr-10 text-base",
      },
    },
    defaultVariants: {
      size: "m",
    },
  }
)

interface FbNativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof fbNativeSelectVariants> {}

function FbNativeSelect({
  className,
  size,
  children,
  ...props
}: FbNativeSelectProps) {
  return (
    <div className="relative">
      <select
        data-slot="fb-native-select"
        className={cn(
          fbNativeSelectVariants({ size }),
          "border-gray-200 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-gray-500",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
    </div>
  )
}

export { FbNativeSelect, fbNativeSelectVariants }
