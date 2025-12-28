import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Card
 *
 * クラス構造: fb-card -elevation-{0|1|2|3}
 * スロット: _header, _body, _footer
 *
 * @example
 * <FbCard elevation={1}>
 *   <FbCardHeader>
 *     <FbCardTitle>タイトル</FbCardTitle>
 *   </FbCardHeader>
 *   <FbCardBody>コンテンツ</FbCardBody>
 *   <FbCardFooter>フッター</FbCardFooter>
 * </FbCard>
 */

const fbCardVariants = cva(
  "fb-card flex flex-col rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
  {
    variants: {
      elevation: {
        0: "-elevation-0",
        1: "-elevation-1 shadow-sm",
        2: "-elevation-2 shadow-md",
        3: "-elevation-3 shadow-lg",
      },
    },
    defaultVariants: {
      elevation: 1,
    },
  }
)

export interface FbCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fbCardVariants> {}

function FbCard({ className, elevation, ...props }: FbCardProps) {
  return (
    <div
      data-slot="fb-card"
      className={cn(fbCardVariants({ elevation, className }))}
      {...props}
    />
  )
}

function FbCardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-card-header"
      className={cn("_header px-6 py-4 border-b border-gray-100 dark:border-gray-800", className)}
      {...props}
    />
  )
}

function FbCardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="fb-card-title"
      className={cn("text-lg font-semibold text-gray-900 dark:text-gray-100", className)}
      {...props}
    />
  )
}

function FbCardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="fb-card-description"
      className={cn("text-sm text-gray-500 dark:text-gray-400 mt-1", className)}
      {...props}
    />
  )
}

function FbCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-card-body"
      className={cn("_body px-6 py-4 flex-1", className)}
      {...props}
    />
  )
}

function FbCardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="fb-card-footer"
      className={cn("_footer px-6 py-4 border-t border-gray-100 dark:border-gray-800", className)}
      {...props}
    />
  )
}

export {
  FbCard,
  FbCardHeader,
  FbCardTitle,
  FbCardDescription,
  FbCardBody,
  FbCardFooter,
  fbCardVariants,
}
