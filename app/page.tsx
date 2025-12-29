"use client"

import * as React from "react"
import Image from "next/image"
import { Check, Copy, Terminal, Package, Palette, Grid3X3, User, Search, ChevronRight, ChevronDown, Settings, Bell } from "lucide-react"

const BASE_URL = "https://yukyui.vercel.app/r"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      title="コピー"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-gray-500" />
      )}
    </button>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative group">
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton text={code} />
      </div>
    </div>
  )
}

interface ComponentShowcaseProps {
  name: string
  description: string
  children: React.ReactNode
}

function ComponentShowcase({ name, description, children }: ComponentShowcaseProps) {
  const command = `npx shadcn@latest add "${BASE_URL}/${name}.json"`

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-base font-mono text-[#002CED] font-semibold">{name}</span>
          <CopyButton text={command} />
        </div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 py-8 flex items-center justify-center min-h-[120px]">
        {children}
      </div>
      <div className="px-4 py-2 bg-gray-900 text-gray-100 text-xs font-mono overflow-x-auto">
        <code>npx shadcn@latest add &quot;{BASE_URL}/{name}.json&quot;</code>
      </div>
    </div>
  )
}

// HTML-based button component for previews
function PreviewButton({ variant = "solid", color = "informative", size = "m", className = "", children }: {
  variant?: "solid" | "outlined" | "flat"
  color?: "informative" | "neutral" | "negative" | "positive"
  size?: "s" | "m"
  className?: string
  children: React.ReactNode
}) {
  const baseClass = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors"
  const sizeClass = size === "s" ? "h-8 px-3" : "h-9 px-4"

  let colorClass = ""
  if (variant === "solid") {
    if (color === "informative") colorClass = "bg-[#002CED] text-white hover:bg-[#0025c4]"
    else if (color === "positive") colorClass = "bg-green-600 text-white hover:bg-green-700"
    else if (color === "negative") colorClass = "bg-red-600 text-white hover:bg-red-700"
    else colorClass = "bg-gray-600 text-white hover:bg-gray-700"
  } else if (variant === "outlined") {
    if (color === "informative") colorClass = "border-2 border-[#002CED] text-[#002CED] bg-transparent hover:bg-[#e6ebfd]"
    else if (color === "negative") colorClass = "border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-50"
    else colorClass = "border-2 border-gray-400 text-gray-700 bg-transparent hover:bg-gray-50"
  } else {
    colorClass = "bg-gray-100 text-gray-700 hover:bg-gray-200"
  }

  return <button className={`${baseClass} ${sizeClass} ${colorClass} ${className}`}>{children}</button>
}

// All components with HTML/CSS previews
const allComponents = [
  {
    name: "fb-button",
    description: "ボタン",
    preview: (
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <PreviewButton variant="solid" color="informative">Primary</PreviewButton>
        <PreviewButton variant="outlined" color="informative">Outlined</PreviewButton>
        <PreviewButton variant="flat" color="neutral">Flat</PreviewButton>
      </div>
    ),
  },
  {
    name: "fb-card",
    description: "カード",
    preview: (
      <div className="w-48 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md">
        <div className="px-6 py-4 text-center text-sm">Card Content</div>
      </div>
    ),
  },
  {
    name: "fb-input",
    description: "テキスト入力",
    preview: (
      <input className="w-48 rounded-md border border-gray-300 bg-transparent h-9 px-3 text-sm outline-none focus:border-[#002CED] focus:ring-2 focus:ring-[#002CED]/20" placeholder="入力してください" />
    ),
  },
  {
    name: "fb-label",
    description: "ラベル",
    preview: <label className="text-sm font-medium">ラベルテキスト</label>,
  },
  {
    name: "fb-textarea",
    description: "テキストエリア",
    preview: <textarea className="w-48 h-20 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none resize-none focus:border-[#002CED]" placeholder="テキストを入力..." />,
  },
  {
    name: "fb-text",
    description: "テキスト",
    preview: (
      <div className="space-y-1 text-center">
        <p className="text-lg leading-tight">Large Text</p>
        <p className="text-base">Medium Text</p>
        <p className="text-sm text-gray-500">Small Text</p>
      </div>
    ),
  },
  {
    name: "fb-separator",
    description: "区切り線",
    preview: (
      <div className="w-48 space-y-2">
        <p className="text-sm">Above</p>
        <div className="h-px bg-gray-200 dark:bg-gray-700" />
        <p className="text-sm">Below</p>
      </div>
    ),
  },
  {
    name: "fb-badge",
    description: "バッジ",
    preview: (
      <div className="flex flex-wrap gap-2 justify-center">
        <span className="inline-flex items-center justify-center rounded-full h-6 px-2.5 text-xs font-medium bg-[#e6ebfd] text-[#002CED]">New</span>
        <span className="inline-flex items-center justify-center rounded-full h-6 px-2.5 text-xs font-medium bg-green-600 text-white">Success</span>
        <span className="inline-flex items-center justify-center rounded-full h-6 px-2.5 text-xs font-medium border border-red-600 text-red-600">Error</span>
      </div>
    ),
  },
  {
    name: "fb-spinner",
    description: "スピナー",
    preview: (
      <div className="flex gap-4 items-center">
        <div className="h-4 w-4 border-2 border-[#002CED] border-t-transparent rounded-full animate-spin" />
        <div className="h-6 w-6 border-2 border-[#002CED] border-t-transparent rounded-full animate-spin" />
        <div className="h-8 w-8 border-2 border-[#002CED] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  },
  {
    name: "fb-skeleton",
    description: "スケルトン",
    preview: (
      <div className="space-y-2 w-48">
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    ),
  },
  {
    name: "fb-kbd",
    description: "キーボード",
    preview: (
      <div className="flex gap-1 items-center">
        <kbd className="inline-flex items-center justify-center h-6 px-2 rounded border border-gray-300 bg-gray-100 text-xs font-mono">⌘</kbd>
        <kbd className="inline-flex items-center justify-center h-6 px-2 rounded border border-gray-300 bg-gray-100 text-xs font-mono">K</kbd>
      </div>
    ),
  },
  {
    name: "fb-avatar",
    description: "アバター",
    preview: (
      <div className="flex gap-2 items-center">
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">U</div>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">YF</div>
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-base font-medium text-gray-600">FB</div>
      </div>
    ),
  },
  {
    name: "fb-aspect-ratio",
    description: "アスペクト比",
    preview: (
      <div className="w-32 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">16:9</div>
      </div>
    ),
  },
  {
    name: "fb-progress",
    description: "プログレスバー",
    preview: (
      <div className="w-48 space-y-2">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full w-3/5 bg-[#002CED] rounded-full" /></div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full w-4/5 bg-green-600 rounded-full" /></div>
      </div>
    ),
  },
  {
    name: "fb-toggle",
    description: "トグル",
    preview: (
      <div className="flex gap-2">
        <button className="h-9 w-9 rounded-md flex items-center justify-center bg-gray-200 text-gray-900 font-bold">B</button>
        <button className="h-9 w-9 rounded-md flex items-center justify-center bg-transparent hover:bg-gray-100 italic">I</button>
      </div>
    ),
  },
  {
    name: "fb-checkbox",
    description: "チェックボックス",
    preview: (
      <div className="flex gap-4 items-center">
        <div className="h-5 w-5 rounded border-2 border-gray-400" />
        <div className="h-5 w-5 rounded border-2 border-[#002CED] bg-[#002CED] flex items-center justify-center"><Check className="h-3 w-3 text-white" /></div>
        <div className="h-5 w-5 rounded border-2 border-green-600 bg-green-600 flex items-center justify-center"><Check className="h-3 w-3 text-white" /></div>
      </div>
    ),
  },
  {
    name: "fb-switch",
    description: "スイッチ",
    preview: (
      <div className="flex gap-4 items-center">
        <div className="h-6 w-11 rounded-full bg-gray-300 p-0.5"><div className="h-5 w-5 rounded-full bg-white shadow" /></div>
        <div className="h-6 w-11 rounded-full bg-[#002CED] p-0.5 flex justify-end"><div className="h-5 w-5 rounded-full bg-white shadow" /></div>
        <div className="h-6 w-11 rounded-full bg-green-600 p-0.5 flex justify-end"><div className="h-5 w-5 rounded-full bg-white shadow" /></div>
      </div>
    ),
  },
  {
    name: "fb-radio-group",
    description: "ラジオグループ",
    preview: (
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full border-2 border-[#002CED] flex items-center justify-center"><div className="h-2 w-2 rounded-full bg-[#002CED]" /></div>
          <span className="text-sm">Option 1</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full border-2 border-gray-400" />
          <span className="text-sm">Option 2</span>
        </div>
      </div>
    ),
  },
  {
    name: "fb-tooltip",
    description: "ツールチップ",
    preview: <PreviewButton variant="outlined" color="informative">Hover me</PreviewButton>,
  },
  {
    name: "fb-popover",
    description: "ポップオーバー",
    preview: <PreviewButton variant="outlined" color="informative">Open Popover</PreviewButton>,
  },
  {
    name: "fb-dialog",
    description: "ダイアログ",
    preview: <PreviewButton variant="outlined" color="informative">Open Dialog</PreviewButton>,
  },
  {
    name: "fb-alert-dialog",
    description: "アラートダイアログ",
    preview: <PreviewButton variant="outlined" color="negative">Delete</PreviewButton>,
  },
  {
    name: "fb-sheet",
    description: "シート",
    preview: <PreviewButton variant="outlined" color="informative">Open Sheet</PreviewButton>,
  },
  {
    name: "fb-drawer",
    description: "ドロワー",
    preview: <PreviewButton variant="outlined" color="informative">Open Drawer</PreviewButton>,
  },
  {
    name: "fb-dropdown-menu",
    description: "ドロップダウンメニュー",
    preview: (
      <PreviewButton variant="flat" color="neutral">
        <Settings className="h-4 w-4" />
        Menu
        <ChevronDown className="h-4 w-4" />
      </PreviewButton>
    ),
  },
  {
    name: "fb-context-menu",
    description: "コンテキストメニュー",
    preview: (
      <div className="border-2 border-dashed border-gray-300 rounded-lg px-6 py-4 text-sm text-gray-500">
        Right click here
      </div>
    ),
  },
  {
    name: "fb-hover-card",
    description: "ホバーカード",
    preview: <span className="text-[#002CED] underline cursor-pointer">@username</span>,
  },
  {
    name: "fb-toast",
    description: "トースト",
    preview: (
      <PreviewButton variant="solid" color="informative">
        <Bell className="h-4 w-4" />
        Show Toast
      </PreviewButton>
    ),
  },
  {
    name: "fb-sonner",
    description: "Sonner",
    preview: <PreviewButton variant="solid" color="positive">Show Notification</PreviewButton>,
  },
  {
    name: "fb-accordion",
    description: "アコーディオン",
    preview: (
      <div className="w-48 border rounded-lg">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-sm font-medium">Section 1</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="px-4 py-3 text-sm text-gray-600">Content here</div>
      </div>
    ),
  },
  {
    name: "fb-collapsible",
    description: "折りたたみ",
    preview: (
      <div className="flex items-center gap-2">
        <ChevronRight className="h-4 w-4" />
        <span>Collapsible Section</span>
      </div>
    ),
  },
  {
    name: "fb-tabs",
    description: "タブ",
    preview: (
      <div className="w-48">
        <div className="flex border-b border-gray-200">
          <button className="px-3 py-2 text-sm border-b-2 border-[#002CED] text-[#002CED]">Tab 1</button>
          <button className="px-3 py-2 text-sm text-gray-600">Tab 2</button>
        </div>
      </div>
    ),
  },
  {
    name: "fb-toggle-group",
    description: "トグルグループ",
    preview: (
      <div className="flex">
        <PreviewButton variant="solid" color="informative" size="s" className="rounded-r-none">Left</PreviewButton>
        <PreviewButton variant="outlined" color="informative" size="s" className="rounded-none border-l-0">Center</PreviewButton>
        <PreviewButton variant="outlined" color="informative" size="s" className="rounded-l-none border-l-0">Right</PreviewButton>
      </div>
    ),
  },
  {
    name: "fb-breadcrumb",
    description: "パンくずリスト",
    preview: (
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-500">Home</span>
        <ChevronRight className="h-3 w-3 text-gray-400" />
        <span className="text-gray-500">Products</span>
        <ChevronRight className="h-3 w-3 text-gray-400" />
        <span className="text-[#002CED]">Detail</span>
      </div>
    ),
  },
  {
    name: "fb-pagination",
    description: "ページネーション",
    preview: (
      <div className="flex items-center gap-1">
        <PreviewButton variant="flat" color="neutral" size="s">←</PreviewButton>
        <PreviewButton variant="solid" color="informative" size="s">1</PreviewButton>
        <PreviewButton variant="flat" color="neutral" size="s">2</PreviewButton>
        <PreviewButton variant="flat" color="neutral" size="s">3</PreviewButton>
        <PreviewButton variant="flat" color="neutral" size="s">→</PreviewButton>
      </div>
    ),
  },
  {
    name: "fb-navigation-menu",
    description: "ナビゲーションメニュー",
    preview: (
      <div className="flex items-center gap-4 text-sm">
        <span className="text-[#002CED] font-medium">Home</span>
        <span className="text-gray-600">About</span>
        <span className="text-gray-600">Products</span>
      </div>
    ),
  },
  {
    name: "fb-menubar",
    description: "メニューバー",
    preview: (
      <div className="flex items-center gap-4 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
      </div>
    ),
  },
  {
    name: "fb-scroll-area",
    description: "スクロールエリア",
    preview: (
      <div className="w-32 h-16 border rounded-lg overflow-hidden bg-white dark:bg-gray-900">
        <div className="p-2 text-xs text-gray-500">Scrollable content area</div>
      </div>
    ),
  },
  {
    name: "fb-resizable",
    description: "リサイズ可能",
    preview: (
      <div className="flex w-48 h-12 border rounded-lg overflow-hidden">
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">Panel 1</div>
        <div className="w-1 bg-gray-300 cursor-col-resize" />
        <div className="flex-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-xs">Panel 2</div>
      </div>
    ),
  },
  {
    name: "fb-alert",
    description: "アラート",
    preview: (
      <div className="w-48 rounded-lg border border-[#002CED] bg-[#e6ebfd] p-4">
        <h5 className="text-sm font-medium text-[#002CED]">Info</h5>
        <p className="text-xs text-[#002CED]/80 mt-1">Alert message</p>
      </div>
    ),
  },
  {
    name: "fb-select",
    description: "セレクト",
    preview: (
      <button className="w-36 h-9 px-3 rounded-md border-2 border-gray-400 text-gray-700 bg-transparent flex items-center justify-between text-sm">
        Select option
        <ChevronDown className="h-4 w-4" />
      </button>
    ),
  },
  {
    name: "fb-native-select",
    description: "ネイティブセレクト",
    preview: (
      <select className="w-36 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-gray-900">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    ),
  },
  {
    name: "fb-command",
    description: "コマンド",
    preview: (
      <div className="flex items-center gap-2 px-3 py-2 border rounded-lg w-48">
        <Search className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-500">Search...</span>
        <kbd className="ml-auto inline-flex items-center justify-center h-5 px-1.5 rounded border border-gray-300 bg-gray-100 text-xs font-mono">⌘K</kbd>
      </div>
    ),
  },
  {
    name: "fb-combobox",
    description: "コンボボックス",
    preview: (
      <button className="w-36 h-9 px-3 rounded-md border-2 border-gray-400 text-gray-700 bg-transparent flex items-center justify-between text-sm">
        Select...
        <ChevronDown className="h-4 w-4" />
      </button>
    ),
  },
  {
    name: "fb-slider",
    description: "スライダー",
    preview: (
      <div className="w-48">
        <div className="relative h-1.5 bg-gray-200 rounded-full">
          <div className="absolute h-full w-1/2 bg-gray-900 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 h-4 w-4 bg-white border border-gray-200 rounded-full shadow" />
        </div>
      </div>
    ),
  },
  {
    name: "fb-input-otp",
    description: "OTP入力",
    preview: (
      <div className="flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-10 h-12 border-2 rounded-lg flex items-center justify-center text-lg font-mono">
            {i === 1 ? "1" : ""}
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "fb-form",
    description: "フォーム",
    preview: (
      <div className="space-y-2 w-40">
        <label className="text-sm font-medium">Email</label>
        <input className="w-full h-8 px-2 text-sm rounded-md border border-gray-300 outline-none" placeholder="email@example.com" />
      </div>
    ),
  },
  {
    name: "fb-field",
    description: "フィールド",
    preview: (
      <div className="space-y-1 w-40">
        <label className="text-sm font-medium">Username</label>
        <input className="w-full h-8 px-2 text-sm rounded-md border border-gray-300 outline-none" placeholder="username" />
        <p className="text-xs text-gray-500">Enter your username</p>
      </div>
    ),
  },
  {
    name: "fb-input-group",
    description: "インプットグループ",
    preview: (
      <div className="flex w-48">
        <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l-md text-sm">@</span>
        <input className="flex-1 h-9 px-3 rounded-r-md border border-gray-300 outline-none text-sm" placeholder="username" />
      </div>
    ),
  },
  {
    name: "fb-button-group",
    description: "ボタングループ",
    preview: (
      <div className="flex">
        <PreviewButton variant="outlined" color="neutral" size="s" className="rounded-r-none">Save</PreviewButton>
        <PreviewButton variant="outlined" color="neutral" size="s" className="rounded-l-none border-l-0">
          <ChevronDown className="h-4 w-4" />
        </PreviewButton>
      </div>
    ),
  },
  {
    name: "fb-item",
    description: "アイテム",
    preview: (
      <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer w-40">
        <User className="h-4 w-4 text-gray-500" />
        <span className="text-sm">Profile</span>
      </div>
    ),
  },
  {
    name: "fb-table",
    description: "テーブル",
    preview: (
      <table className="w-48 text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-1 px-2">Name</th>
            <th className="text-left py-1 px-2">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-1 px-2">John</td>
            <td className="py-1 px-2">Admin</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    name: "fb-data-table",
    description: "データテーブル",
    preview: (
      <div className="w-48 text-xs">
        <div className="flex items-center gap-2 mb-2">
          <input className="flex-1 h-7 px-2 rounded-md border border-gray-300 outline-none text-sm" placeholder="Filter..." />
        </div>
        <div className="border rounded text-center py-2 text-gray-500">Table</div>
      </div>
    ),
  },
  {
    name: "fb-calendar",
    description: "カレンダー",
    preview: (
      <div className="p-2 border rounded-lg">
        <div className="text-center text-sm font-medium mb-2">December 2024</div>
        <div className="grid grid-cols-7 gap-1 text-xs text-center">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="text-gray-400">{d}</div>
          ))}
          {[...Array(31)].map((_, i) => (
            <div
              key={i}
              className={`py-0.5 rounded ${i === 14 ? "bg-[#002CED] text-white" : ""}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "fb-date-picker",
    description: "日付選択",
    preview: (
      <button className="w-40 h-9 px-3 rounded-md border-2 border-gray-400 text-gray-700 bg-transparent flex items-center gap-2 text-sm">
        📅 Pick a date
      </button>
    ),
  },
  {
    name: "fb-carousel",
    description: "カルーセル",
    preview: (
      <div className="flex items-center gap-2">
        <PreviewButton variant="flat" color="neutral" size="s">←</PreviewButton>
        <div className="w-24 h-16 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-xs">Slide 1</div>
        <PreviewButton variant="flat" color="neutral" size="s">→</PreviewButton>
      </div>
    ),
  },
  {
    name: "fb-chart",
    description: "チャート",
    preview: (
      <div className="flex items-end gap-1 h-16">
        {[40, 60, 30, 80, 50, 70].map((h, i) => (
          <div
            key={i}
            className="w-4 bg-[#002CED] rounded-t"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    name: "fb-empty",
    description: "空状態",
    preview: (
      <div className="text-center py-4">
        <div className="text-3xl mb-2">📭</div>
        <p className="text-sm text-gray-500">No data</p>
      </div>
    ),
  },
  {
    name: "fb-sidebar",
    description: "サイドバー",
    preview: (
      <div className="w-32 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg space-y-1">
        <div className="flex items-center gap-2 px-2 py-1 bg-[#002CED] text-white rounded text-xs">
          <span>🏠</span> Home
        </div>
        <div className="flex items-center gap-2 px-2 py-1 text-gray-600 text-xs">
          <span>⚙️</span> Settings
        </div>
      </div>
    ),
  },
]

export default function Home() {
  const totalComponents = allComponents.length

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/fly-by-logo.png"
              alt="fly-by Design System"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Package className="h-4 w-4" />
              {totalComponents} components
            </span>
            <a
              href="https://github.com/yukyu30/yukyui"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <section className="py-12 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/fly-by-logo.png"
              alt="fly-by Design System"
              width={300}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            <strong className="text-[#002CED]">Yukyu Flavor</strong>（#002CED）を基調とする
            <br />
            shadcn/ui 互換のコンポーネントライブラリ。
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              <Grid3X3 className="h-4 w-4" />
              {totalComponents} コンポーネント
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              <Palette className="h-4 w-4" />
              Yukyu Flavor
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              <Terminal className="h-4 w-4" />
              shadcn CLI 対応
            </div>
          </div>
        </section>

        {/* Usage - Side by side */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800" id="usage">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="h-6 w-6" />
            使い方
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#002CED]/10 flex items-center justify-center mb-4">
                <span className="text-[#002CED] font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">shadcn CLI を初期化</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                まず shadcn/ui をプロジェクトに初期化します。
              </p>
              <CodeBlock code="npx shadcn@latest init" />
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#002CED]/10 flex items-center justify-center mb-4">
                <span className="text-[#002CED] font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">コンポーネントを追加</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                必要なコンポーネントを追加します。
              </p>
              <CodeBlock code={`npx shadcn@latest add "${BASE_URL}/fb-button.json"`} />
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#002CED]/10 flex items-center justify-center mb-4">
                <span className="text-[#002CED] font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">コンポーネントを使用</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                インポートして使用します。
              </p>
              <CodeBlock
                code={`import { FbButton } from "@/components/ui/fb-button"

<FbButton>Click me</FbButton>`}
              />
            </div>
          </div>
        </section>

        {/* Component Showcase - Flat grid */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800" id="components">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Package className="h-6 w-6" />
            コンポーネント一覧
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({totalComponents} components)
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allComponents.map((component) => (
              <ComponentShowcase
                key={component.name}
                name={component.name}
                description={component.description}
              >
                {component.preview}
              </ComponentShowcase>
            ))}
          </div>
        </section>

        {/* Design Principles */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800" id="design">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Palette className="h-6 w-6" />
            デザイン原則
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
              <h3 className="font-semibold mb-4">命名規則</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#002CED]">•</span>
                  <span><strong>プレフィックス:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">fb-</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002CED]">•</span>
                  <span><strong>クラス形式:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">fb-{"{component}"} -{"{modifier}"}-{"{value}"}</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002CED]">•</span>
                  <span><strong>data-slot属性:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">data-slot=&quot;fb-{"{component}"}&quot;</code></span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
              <h3 className="font-semibold mb-4">Yukyu Flavor カラーパレット</h3>
              <div className="space-y-2">
                {[
                  { name: "Primary 50", hex: "#e6ebfd", usage: "背景（薄い）" },
                  { name: "Primary 100", hex: "#ccd7fb", usage: "ホバー背景" },
                  { name: "Primary 500", hex: "#002CED", usage: "基準色・ボタン" },
                  { name: "Primary 600", hex: "#0025c4", usage: "ホバー" },
                  { name: "Primary 700", hex: "#001e9b", usage: "アクティブ" },
                ].map((color) => (
                  <div key={color.name} className="flex items-center gap-3 text-sm">
                    <div
                      className="w-8 h-8 rounded-md border border-gray-200 dark:border-gray-700"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <div className="font-medium">{color.name}</div>
                      <div className="text-gray-500 text-xs">{color.hex} - {color.usage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>fly-by Design System - Built with shadcn/ui</p>
          <p className="mt-2">
            <a
              href="https://github.com/yukyu30/yukyui"
              className="text-[#002CED] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
