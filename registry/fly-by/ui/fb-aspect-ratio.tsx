import * as React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

import { cn } from "@/lib/utils"

/**
 * fly-by Aspect Ratio
 *
 * クラス構造: fb-aspect-ratio
 *
 * @example
 * <FbAspectRatio ratio={16 / 9}>
 *   <img src="/image.jpg" alt="Image" className="object-cover" />
 * </FbAspectRatio>
 */

export interface FbAspectRatioProps
  extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {}

function FbAspectRatio({
  className,
  ...props
}: FbAspectRatioProps) {
  return (
    <AspectRatioPrimitive.Root
      data-slot="fb-aspect-ratio"
      className={cn("fb-aspect-ratio", className)}
      {...props}
    />
  )
}

export { FbAspectRatio }
