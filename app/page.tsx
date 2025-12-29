"use client"

import * as React from "react"
import Image from "next/image"
import { Check, Copy, Terminal, Package, Palette, Grid3X3, User, Search, ChevronRight, ChevronDown, Settings, Bell } from "lucide-react"

// Import fly-by components
import { FbButton } from "@/registry/fly-by/ui/fb-button"
import { FbBadge } from "@/registry/fly-by/ui/fb-badge"
import { FbCard, FbCardHeader, FbCardTitle, FbCardDescription, FbCardBody } from "@/registry/fly-by/ui/fb-card"
import { FbInput } from "@/registry/fly-by/ui/fb-input"
import { FbLabel } from "@/registry/fly-by/ui/fb-label"
import { FbText } from "@/registry/fly-by/ui/fb-text"
import { FbTextarea } from "@/registry/fly-by/ui/fb-textarea"
import { FbSeparator } from "@/registry/fly-by/ui/fb-separator"
import { FbSpinner } from "@/registry/fly-by/ui/fb-spinner"
import { FbSkeleton } from "@/registry/fly-by/ui/fb-skeleton"
import { FbKbd } from "@/registry/fly-by/ui/fb-kbd"
import { FbProgress } from "@/registry/fly-by/ui/fb-progress"
import { FbCheckbox } from "@/registry/fly-by/ui/fb-checkbox"
import { FbSwitch } from "@/registry/fly-by/ui/fb-switch"
import { FbAlert, FbAlertTitle, FbAlertDescription } from "@/registry/fly-by/ui/fb-alert"

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
    <FbCard elevation={1} className="overflow-hidden">
      <FbCardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <FbCardTitle className="text-base font-mono text-[#002CED]">{name}</FbCardTitle>
          <CopyButton text={command} />
        </div>
        <FbCardDescription>{description}</FbCardDescription>
      </FbCardHeader>
      <FbCardBody className="bg-gray-50 dark:bg-gray-800/50 border-t border-b border-gray-100 dark:border-gray-700 py-8 flex items-center justify-center min-h-[120px]">
        {children}
      </FbCardBody>
      <div className="px-4 py-2 bg-gray-900 text-gray-100 text-xs font-mono overflow-x-auto">
        <code>npx shadcn@latest add &quot;{BASE_URL}/{name}.json&quot;</code>
      </div>
    </FbCard>
  )
}

// All components in a flat list
const allComponents = [
  {
    name: "fb-button",
    description: "ボタン",
    preview: (
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <FbButton appearance="solid" color="informative">Primary</FbButton>
        <FbButton appearance="outlined" color="informative">Outlined</FbButton>
        <FbButton appearance="flat" color="neutral">Flat</FbButton>
      </div>
    ),
  },
  {
    name: "fb-card",
    description: "カード",
    preview: (
      <FbCard elevation={2} className="w-48">
        <FbCardBody className="text-center">
          <FbText level="s">Card Content</FbText>
        </FbCardBody>
      </FbCard>
    ),
  },
  {
    name: "fb-input",
    description: "テキスト入力",
    preview: (
      <div className="w-48">
        <FbInput placeholder="入力してください" />
      </div>
    ),
  },
  {
    name: "fb-label",
    description: "ラベル",
    preview: <FbLabel>ラベルテキスト</FbLabel>,
  },
  {
    name: "fb-textarea",
    description: "テキストエリア",
    preview: <FbTextarea placeholder="テキストを入力..." className="w-48 h-20" />,
  },
  {
    name: "fb-text",
    description: "テキスト",
    preview: (
      <div className="space-y-1 text-center">
        <FbText level="l" density="dense">Large Text</FbText>
        <FbText level="m">Medium Text</FbText>
        <FbText level="s" className="text-gray-500">Small Text</FbText>
      </div>
    ),
  },
  {
    name: "fb-separator",
    description: "区切り線",
    preview: (
      <div className="w-48 space-y-2">
        <FbText level="s">Above</FbText>
        <FbSeparator />
        <FbText level="s">Below</FbText>
      </div>
    ),
  },
  {
    name: "fb-badge",
    description: "バッジ",
    preview: (
      <div className="flex flex-wrap gap-2 justify-center">
        <FbBadge color="informative">New</FbBadge>
        <FbBadge appearance="solid" color="positive">Success</FbBadge>
        <FbBadge appearance="outlined" color="negative">Error</FbBadge>
      </div>
    ),
  },
  {
    name: "fb-spinner",
    description: "スピナー",
    preview: (
      <div className="flex gap-4 items-center">
        <FbSpinner size="s" />
        <FbSpinner size="m" />
        <FbSpinner size="l" />
      </div>
    ),
  },
  {
    name: "fb-skeleton",
    description: "スケルトン",
    preview: (
      <div className="space-y-2 w-48">
        <FbSkeleton className="h-4 w-full" />
        <FbSkeleton className="h-4 w-3/4" />
        <FbSkeleton className="h-4 w-1/2" />
      </div>
    ),
  },
  {
    name: "fb-kbd",
    description: "キーボード",
    preview: (
      <div className="flex gap-1 items-center">
        <FbKbd>⌘</FbKbd>
        <FbKbd>K</FbKbd>
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
        <FbProgress value={60} />
        <FbProgress value={80} color="positive" />
      </div>
    ),
  },
  {
    name: "fb-toggle",
    description: "トグル",
    preview: (
      <div className="flex gap-2">
        <button className="h-9 w-9 rounded-md flex items-center justify-center bg-gray-200 text-gray-900 font-bold">B</button>
        <button className="h-9 w-9 rounded-md flex items-center justify-center bg-transparent hover:bg-gray-100 font-bold italic">I</button>
      </div>
    ),
  },
  {
    name: "fb-checkbox",
    description: "チェックボックス",
    preview: (
      <div className="flex gap-4 items-center">
        <FbCheckbox />
        <FbCheckbox defaultChecked />
        <FbCheckbox defaultChecked color="positive" />
      </div>
    ),
  },
  {
    name: "fb-switch",
    description: "スイッチ",
    preview: (
      <div className="flex gap-4 items-center">
        <FbSwitch />
        <FbSwitch defaultChecked />
        <FbSwitch defaultChecked color="positive" />
      </div>
    ),
  },
  {
    name: "fb-radio-group",
    description: "ラジオグループ",
    preview: (
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full border-2 border-[#002CED] flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#002CED]" />
          </div>
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
    preview: <FbButton appearance="outlined" color="informative">Hover me</FbButton>,
  },
  {
    name: "fb-popover",
    description: "ポップオーバー",
    preview: <FbButton appearance="outlined" color="informative">Open Popover</FbButton>,
  },
  {
    name: "fb-dialog",
    description: "ダイアログ",
    preview: <FbButton appearance="outlined" color="informative">Open Dialog</FbButton>,
  },
  {
    name: "fb-alert-dialog",
    description: "アラートダイアログ",
    preview: <FbButton appearance="outlined" color="negative">Delete</FbButton>,
  },
  {
    name: "fb-sheet",
    description: "シート",
    preview: <FbButton appearance="outlined" color="informative">Open Sheet</FbButton>,
  },
  {
    name: "fb-drawer",
    description: "ドロワー",
    preview: <FbButton appearance="outlined" color="informative">Open Drawer</FbButton>,
  },
  {
    name: "fb-dropdown-menu",
    description: "ドロップダウンメニュー",
    preview: (
      <FbButton appearance="flat" color="neutral">
        <Settings className="h-4 w-4 mr-2" />
        Menu
        <ChevronDown className="h-4 w-4 ml-2" />
      </FbButton>
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
      <FbButton appearance="solid" color="informative">
        <Bell className="h-4 w-4 mr-2" />
        Show Toast
      </FbButton>
    ),
  },
  {
    name: "fb-sonner",
    description: "Sonner",
    preview: <FbButton appearance="solid" color="positive">Show Notification</FbButton>,
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
        <FbButton appearance="solid" color="informative" size="s" className="rounded-r-none">Left</FbButton>
        <FbButton appearance="outlined" color="informative" size="s" className="rounded-none border-l-0">Center</FbButton>
        <FbButton appearance="outlined" color="informative" size="s" className="rounded-l-none border-l-0">Right</FbButton>
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
        <FbButton appearance="flat" color="neutral" size="s">←</FbButton>
        <FbButton appearance="solid" color="informative" size="s">1</FbButton>
        <FbButton appearance="flat" color="neutral" size="s">2</FbButton>
        <FbButton appearance="flat" color="neutral" size="s">3</FbButton>
        <FbButton appearance="flat" color="neutral" size="s">→</FbButton>
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
      <FbAlert color="informative" className="w-48">
        <FbAlertTitle>Info</FbAlertTitle>
        <FbAlertDescription>Alert message</FbAlertDescription>
      </FbAlert>
    ),
  },
  {
    name: "fb-select",
    description: "セレクト",
    preview: (
      <FbButton appearance="outlined" color="neutral" className="w-36 justify-between">
        Select option
        <ChevronDown className="h-4 w-4" />
      </FbButton>
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
        <FbKbd className="ml-auto">⌘K</FbKbd>
      </div>
    ),
  },
  {
    name: "fb-combobox",
    description: "コンボボックス",
    preview: (
      <FbButton appearance="outlined" color="neutral" className="w-36 justify-between">
        Select...
        <ChevronDown className="h-4 w-4" />
      </FbButton>
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
        <FbLabel>Email</FbLabel>
        <FbInput placeholder="email@example.com" size="s" />
      </div>
    ),
  },
  {
    name: "fb-field",
    description: "フィールド",
    preview: (
      <div className="space-y-1 w-40">
        <FbLabel>Username</FbLabel>
        <FbInput placeholder="username" size="s" />
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
        <FbInput placeholder="username" className="rounded-l-none" />
      </div>
    ),
  },
  {
    name: "fb-button-group",
    description: "ボタングループ",
    preview: (
      <div className="flex">
        <FbButton appearance="outlined" color="neutral" size="s" className="rounded-r-none">Save</FbButton>
        <FbButton appearance="outlined" color="neutral" size="s" className="rounded-l-none border-l-0">
          <ChevronDown className="h-4 w-4" />
        </FbButton>
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
          <FbInput placeholder="Filter..." size="s" className="h-7" />
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
      <FbButton appearance="outlined" color="neutral" className="w-40 justify-start">
        📅 Pick a date
      </FbButton>
    ),
  },
  {
    name: "fb-carousel",
    description: "カルーセル",
    preview: (
      <div className="flex items-center gap-2">
        <FbButton appearance="flat" color="neutral" size="s">←</FbButton>
        <div className="w-24 h-16 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-xs">Slide 1</div>
        <FbButton appearance="flat" color="neutral" size="s">→</FbButton>
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
