import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Skeleton
 *
 * クラス構造: fb-skeleton -shape-{value}
 *
 * @example
 * <FbSkeleton className="h-4 w-32" />
 * <FbSkeleton shape="circle" className="h-12 w-12" />
 */

const fbSkeletonVariants = cva(
  "fb-skeleton animate-pulse bg-gray-200 dark:bg-gray-700",
  {
    variants: {
      shape: {
        rectangle: "-shape-rectangle rounded-md",
        circle: "-shape-circle rounded-full",
        text: "-shape-text rounded h-4",
      },
    },
    defaultVariants: {
      shape: "rectangle",
    },
  }
)

export interface FbSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fbSkeletonVariants> {}

function FbSkeleton({
  className,
  shape,
  ...props
}: FbSkeletonProps) {
  return (
    <div
      data-slot="fb-skeleton"
      aria-hidden="true"
      className={cn(fbSkeletonVariants({ shape, className }))}
      {...props}
    />
  )
}

export { FbSkeleton, fbSkeletonVariants }
