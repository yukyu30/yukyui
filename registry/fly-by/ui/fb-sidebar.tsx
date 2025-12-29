"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { FbButton } from "@/registry/fly-by/ui/fb-button"
import { FbSheet, FbSheetContent } from "@/registry/fly-by/ui/fb-sheet"
import { FbSeparator } from "@/registry/fly-by/ui/fb-separator"
import {
  FbTooltip,
  FbTooltipContent,
  FbTooltipProvider,
  FbTooltipTrigger,
} from "@/registry/fly-by/ui/fb-tooltip"

/**
 * fly-by Sidebar
 *
 * アプリケーションのサイドバーナビゲーションコンポーネント。
 * 折りたたみ、レスポンシブ対応。
 *
 * クラス構造: fb-sidebar, fb-sidebar-header, fb-sidebar-content, fb-sidebar-footer,
 *            fb-sidebar-group, fb-sidebar-menu, fb-sidebar-menu-item, etc.
 *
 * @example
 * <FbSidebarProvider>
 *   <FbSidebar>
 *     <FbSidebarHeader>
 *       <Logo />
 *     </FbSidebarHeader>
 *     <FbSidebarContent>
 *       <FbSidebarGroup>
 *         <FbSidebarGroupLabel>メニュー</FbSidebarGroupLabel>
 *         <FbSidebarGroupContent>
 *           <FbSidebarMenu>
 *             <FbSidebarMenuItem>
 *               <FbSidebarMenuButton>
 *                 <Home /> ホーム
 *               </FbSidebarMenuButton>
 *             </FbSidebarMenuItem>
 *           </FbSidebarMenu>
 *         </FbSidebarGroupContent>
 *       </FbSidebarGroup>
 *     </FbSidebarContent>
 *   </FbSidebar>
 *   <main>...</main>
 * </FbSidebarProvider>
 */

const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a FbSidebarProvider.")
  }

  return context
}

function FbSidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const [openMobile, setOpenMobile] = React.useState(false)
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }
    },
    [setOpenProp, open]
  )

  // Simple mobile detection
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleSidebar = React.useCallback(() => {
    return isMobile
      ? setOpenMobile((open) => !open)
      : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <FbTooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-gray-100 dark:has-[[data-variant=inset]]:bg-gray-900",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </FbTooltipProvider>
    </SidebarContext.Provider>
  )
}

function FbSidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="fb-sidebar"
        className={cn(
          "fb-sidebar flex h-full w-[--sidebar-width] flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <FbSheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <FbSheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-white p-0 text-gray-900 dark:bg-gray-900 dark:text-gray-100 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </FbSheetContent>
      </FbSheet>
    )
  }

  return (
    <div
      className="group peer hidden md:block text-gray-900 dark:text-gray-100"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* Gap for the sidebar */}
      <div
        className={cn(
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
        )}
      />
      <div
        data-slot="fb-sidebar"
        className={cn(
          "fb-sidebar duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className={cn(
            "flex h-full w-full flex-col bg-white dark:bg-gray-900",
            variant === "floating" || variant === "inset"
              ? "rounded-lg border border-gray-200 shadow dark:border-gray-700"
              : ""
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function FbSidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof FbButton>) {
  const { toggleSidebar } = useSidebar()

  return (
    <FbButton
      data-slot="fb-sidebar-trigger"
      data-sidebar="trigger"
      appearance="transparent"
      color="neutral"
      size="s"
      className={cn("fb-sidebar-trigger h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </FbButton>
  )
}

function FbSidebarRail({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-slot="fb-sidebar-rail"
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "fb-sidebar-rail absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-gray-200 dark:hover:after:bg-gray-700 group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-gray-100 dark:group-data-[collapsible=offcanvas]:hover:bg-gray-800",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarInset({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="fb-sidebar-inset"
      className={cn(
        "fb-sidebar-inset relative flex min-h-svh flex-1 flex-col bg-white dark:bg-gray-950",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fb-sidebar-header"
      data-sidebar="header"
      className={cn("fb-sidebar-header flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function FbSidebarFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fb-sidebar-footer"
      data-sidebar="footer"
      className={cn("fb-sidebar-footer flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function FbSidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof FbSeparator>) {
  return (
    <FbSeparator
      data-slot="fb-sidebar-separator"
      data-sidebar="separator"
      className={cn("fb-sidebar-separator mx-2 w-auto bg-gray-200 dark:bg-gray-700", className)}
      {...props}
    />
  )
}

function FbSidebarContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fb-sidebar-content"
      data-sidebar="content"
      className={cn(
        "fb-sidebar-content flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fb-sidebar-group"
      data-sidebar="group"
      className={cn(
        "fb-sidebar-group relative flex w-full min-w-0 flex-col p-2",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="fb-sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "fb-sidebar-group-label duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-gray-500 outline-none ring-gray-400 transition-[margin,opa] ease-linear focus-visible:ring-2 dark:text-gray-400 dark:ring-gray-500 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="fb-sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "fb-sidebar-group-action absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-gray-500 outline-none ring-gray-400 transition-transform hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-2 dark:text-gray-400 dark:ring-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-100 [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fb-sidebar-group-content"
      data-sidebar="group-content"
      className={cn("fb-sidebar-group-content w-full text-sm", className)}
      {...props}
    />
  )
}

function FbSidebarMenu({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="fb-sidebar-menu"
      data-sidebar="menu"
      className={cn(
        "fb-sidebar-menu flex w-full min-w-0 flex-col gap-1",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarMenuItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="fb-sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("fb-sidebar-menu-item group/menu-item relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-gray-400 transition-[width,height,padding] hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-2 active:bg-gray-100 active:text-gray-900 disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-gray-100 data-[active=true]:font-medium data-[active=true]:text-gray-900 data-[state=open]:hover:bg-gray-100 data-[state=open]:hover:text-gray-900 group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 dark:ring-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:active:bg-gray-800 dark:active:text-gray-100 dark:data-[active=true]:bg-gray-800 dark:data-[active=true]:text-gray-100 dark:data-[state=open]:hover:bg-gray-800 dark:data-[state=open]:hover:text-gray-100 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      appearance: {
        default: "-appearance-default hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100",
        outlined:
          "-appearance-outlined bg-white shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-gray-100 hover:text-gray-900 hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))] dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100",
      },
      size: {
        m: "-size-m h-8 text-sm",
        s: "-size-s h-7 text-xs",
        l: "-size-l h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      appearance: "default",
      size: "m",
    },
  }
)

function FbSidebarMenuButton({
  asChild = false,
  isActive = false,
  appearance = "default",
  size = "m",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof FbTooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="fb-sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ appearance, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <FbTooltip>
      <FbTooltipTrigger asChild>{button}</FbTooltipTrigger>
      <FbTooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </FbTooltip>
  )
}

function FbSidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="fb-sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "fb-sidebar-menu-action absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-gray-500 outline-none ring-gray-400 transition-transform hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-2 peer-hover/menu-button:text-gray-900 dark:text-gray-400 dark:ring-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:peer-hover/menu-button:text-gray-100 [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-gray-900 dark:peer-data-[active=true]/menu-button:text-gray-100 md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fb-sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "fb-sidebar-menu-badge absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-gray-500 select-none pointer-events-none dark:text-gray-400",
        "peer-hover/menu-button:text-gray-900 peer-data-[active=true]/menu-button:text-gray-900 dark:peer-hover/menu-button:text-gray-100 dark:peer-data-[active=true]/menu-button:text-gray-100",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="fb-sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn(
        "fb-sidebar-menu-skeleton rounded-md h-8 flex gap-2 px-2 items-center",
        className
      )}
      {...props}
    >
      {showIcon && (
        <div className="size-4 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
      <div
        className="h-4 flex-1 max-w-[--skeleton-width] bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function FbSidebarMenuSub({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="fb-sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "fb-sidebar-menu-sub mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-gray-200 px-2.5 py-0.5 dark:border-gray-700",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function FbSidebarMenuSubItem({
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="fb-sidebar-menu-sub-item" {...props} />
}

function FbSidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="fb-sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "fb-sidebar-menu-sub-button flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-gray-500 outline-none ring-gray-400 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-2 active:bg-gray-100 active:text-gray-900 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-gray-400 dark:ring-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:active:bg-gray-800 dark:active:text-gray-100 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-gray-500 dark:[&>svg]:text-gray-400",
        "data-[active=true]:bg-gray-100 data-[active=true]:text-gray-900 dark:data-[active=true]:bg-gray-800 dark:data-[active=true]:text-gray-100",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  FbSidebar,
  FbSidebarContent,
  FbSidebarFooter,
  FbSidebarGroup,
  FbSidebarGroupAction,
  FbSidebarGroupContent,
  FbSidebarGroupLabel,
  FbSidebarHeader,
  FbSidebarInset,
  FbSidebarMenu,
  FbSidebarMenuAction,
  FbSidebarMenuBadge,
  FbSidebarMenuButton,
  FbSidebarMenuItem,
  FbSidebarMenuSkeleton,
  FbSidebarMenuSub,
  FbSidebarMenuSubButton,
  FbSidebarMenuSubItem,
  FbSidebarProvider,
  FbSidebarRail,
  FbSidebarSeparator,
  FbSidebarTrigger,
  useSidebar,
}
