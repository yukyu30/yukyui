import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { FbButton, type FbButtonProps } from "./fb-button"
import {
  FbDropdownMenu,
  FbDropdownMenuContent,
  FbDropdownMenuTrigger,
} from "./fb-dropdown-menu"

/**
 * fly-by Split Button
 *
 * メインアクションとドロップダウンメニューを組み合わせたボタン。
 *
 * クラス構造: fb-split-button
 *
 * @example
 * <FbSplitButton
 *   appearance="solid"
 *   color="informative"
 *   size="m"
 *   onAction={() => console.log('保存')}
 * >
 *   <FbSplitButtonLabel>保存</FbSplitButtonLabel>
 *   <FbSplitButtonMenu>
 *     <FbDropdownMenuItem onSelect={() => console.log('保存して閉じる')}>
 *       保存して閉じる
 *     </FbDropdownMenuItem>
 *     <FbDropdownMenuItem onSelect={() => console.log('別名で保存')}>
 *       別名で保存
 *     </FbDropdownMenuItem>
 *   </FbSplitButtonMenu>
 * </FbSplitButton>
 */

interface FbSplitButtonContextValue {
  appearance?: FbButtonProps["appearance"]
  color?: FbButtonProps["color"]
  size?: FbButtonProps["size"]
  onAction?: () => void
}

const FbSplitButtonContext = React.createContext<FbSplitButtonContextValue>({})

interface FbSplitButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<FbButtonProps, "appearance" | "color" | "size"> {
  /**
   * メインボタンのクリックハンドラー
   */
  onAction?: () => void
  /**
   * ドロップダウンメニューの位置
   * @default "bottom-end"
   */
  align?: "start" | "center" | "end"
}

function FbSplitButton({
  className,
  appearance = "solid",
  color = "informative",
  size = "m",
  onAction,
  align = "end",
  children,
  ...props
}: FbSplitButtonProps) {
  const [label, menu] = React.Children.toArray(children)

  return (
    <FbSplitButtonContext.Provider value={{ appearance, color, size, onAction }}>
      <div
        data-slot="fb-split-button"
        className={cn("fb-split-button inline-flex", className)}
        {...props}
      >
        <FbDropdownMenu>
          <div className="inline-flex">
            {label}
            <FbDropdownMenuTrigger asChild>
              <FbButton
                appearance={appearance}
                color={color}
                size={size}
                className="rounded-l-none border-l border-white/20 px-2"
                leadingIcon={<ChevronDown className="h-4 w-4" />}
              />
            </FbDropdownMenuTrigger>
          </div>
          <FbDropdownMenuContent align={align}>{menu}</FbDropdownMenuContent>
        </FbDropdownMenu>
      </div>
    </FbSplitButtonContext.Provider>
  )
}

interface FbSplitButtonLabelProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
}

function FbSplitButtonLabel({ disabled, ...props }: FbSplitButtonLabelProps) {
  const { appearance, color, size, onAction } = React.useContext(FbSplitButtonContext)

  return (
    <FbButton
      appearance={appearance}
      color={color}
      size={size}
      onClick={onAction}
      disabled={disabled}
      className="rounded-r-none"
      {...props}
    />
  )
}

interface FbSplitButtonMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

function FbSplitButtonMenu({ children }: FbSplitButtonMenuProps) {
  return <>{children}</>
}

export { FbSplitButton, FbSplitButtonLabel, FbSplitButtonMenu }
