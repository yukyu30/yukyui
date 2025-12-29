import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * fly-by Toast
 *
 * クラス構造: fb-toast -color-{value}
 *
 * @example
 * <FbToastProvider>
 *   <FbToast>
 *     <FbToastTitle>Toast Title</FbToastTitle>
 *     <FbToastDescription>Toast description</FbToastDescription>
 *   </FbToast>
 *   <FbToastViewport />
 * </FbToastProvider>
 */

function FbToastProvider({
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Provider>) {
  return <ToastPrimitive.Provider data-slot="fb-toast-provider" {...props} />
}

function FbToastViewport({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Viewport
      data-slot="fb-toast-viewport"
      className={cn(
        "fb-toast-viewport fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props}
    />
  )
}

const fbToastVariants = cva(
  "fb-toast group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      color: {
        neutral: "-color-neutral border-gray-200 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
        informative: "-color-informative border-[#002CED] bg-[#e6ebfd] text-[#002CED] dark:border-[#3361ef] dark:bg-[#001049] dark:text-[#3361ef]",
        positive: "-color-positive border-green-500 bg-green-50 text-green-700 dark:border-green-600 dark:bg-green-900 dark:text-green-300",
        negative: "-color-negative border-red-500 bg-red-50 text-red-700 dark:border-red-600 dark:bg-red-900 dark:text-red-300",
      },
    },
    defaultVariants: {
      color: "neutral",
    },
  }
)

export interface FbToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof fbToastVariants> {}

function FbToast({
  className,
  color,
  ...props
}: FbToastProps) {
  return (
    <ToastPrimitive.Root
      data-slot="fb-toast"
      className={cn(fbToastVariants({ color }), className)}
      {...props}
    />
  )
}

function FbToastAction({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>) {
  return (
    <ToastPrimitive.Action
      data-slot="fb-toast-action"
      className={cn(
        "fb-toast-action inline-flex h-8 shrink-0 items-center justify-center rounded-md border-2 border-gray-300 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:hover:bg-gray-800",
        className
      )}
      {...props}
    />
  )
}

function FbToastClose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>) {
  return (
    <ToastPrimitive.Close
      data-slot="fb-toast-close"
      className={cn(
        "fb-toast-close absolute right-1 top-1 rounded-md p-1 text-gray-500 opacity-0 transition-opacity hover:text-gray-900 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 dark:text-gray-400 dark:hover:text-gray-100",
        className
      )}
      toast-close=""
      {...props}
    >
      <X className="h-4 w-4" />
    </ToastPrimitive.Close>
  )
}

function FbToastTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>) {
  return (
    <ToastPrimitive.Title
      data-slot="fb-toast-title"
      className={cn("fb-toast-title text-sm font-semibold [&+div]:text-xs", className)}
      {...props}
    />
  )
}

function FbToastDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>) {
  return (
    <ToastPrimitive.Description
      data-slot="fb-toast-description"
      className={cn("fb-toast-description text-sm opacity-90", className)}
      {...props}
    />
  )
}

export {
  FbToastProvider,
  FbToastViewport,
  FbToast,
  FbToastTitle,
  FbToastDescription,
  FbToastClose,
  FbToastAction,
  fbToastVariants,
}
