"use client"

import * as React from "react"
import { Check, Copy, Terminal, Package, Palette, Grid3X3 } from "lucide-react"

// Component data
const components = {
  "Phase 1: 基礎コンポーネント": [
    { name: "fb-button", description: "ボタン", variants: "variant, size" },
    { name: "fb-card", description: "カード", variants: "elevation" },
    { name: "fb-input", description: "テキスト入力", variants: "appearance, size" },
    { name: "fb-label", description: "ラベル", variants: "-" },
    { name: "fb-textarea", description: "テキストエリア", variants: "-" },
    { name: "fb-text", description: "テキスト", variants: "level, density" },
    { name: "fb-separator", description: "区切り線", variants: "orientation" },
    { name: "fb-badge", description: "バッジ", variants: "appearance, color, size" },
    { name: "fb-spinner", description: "スピナー", variants: "size, color" },
    { name: "fb-skeleton", description: "スケルトン", variants: "shape" },
    { name: "fb-kbd", description: "キーボード", variants: "size" },
    { name: "fb-avatar", description: "アバター", variants: "size, shape" },
    { name: "fb-aspect-ratio", description: "アスペクト比", variants: "-" },
    { name: "fb-progress", description: "プログレスバー", variants: "size, color" },
    { name: "fb-toggle", description: "トグル", variants: "appearance, size" },
    { name: "fb-checkbox", description: "チェックボックス", variants: "size, color" },
    { name: "fb-switch", description: "スイッチ", variants: "size, color" },
    { name: "fb-radio-group", description: "ラジオグループ", variants: "size, color" },
  ],
  "Phase 2: オーバーレイ・ポップアップ系": [
    { name: "fb-tooltip", description: "ツールチップ", variants: "-" },
    { name: "fb-popover", description: "ポップオーバー", variants: "-" },
    { name: "fb-dialog", description: "ダイアログ", variants: "-" },
    { name: "fb-alert-dialog", description: "アラートダイアログ", variants: "-" },
    { name: "fb-sheet", description: "シート", variants: "side" },
    { name: "fb-drawer", description: "ドロワー", variants: "-" },
    { name: "fb-dropdown-menu", description: "ドロップダウンメニュー", variants: "-" },
    { name: "fb-context-menu", description: "コンテキストメニュー", variants: "-" },
    { name: "fb-hover-card", description: "ホバーカード", variants: "-" },
    { name: "fb-toast", description: "トースト", variants: "color" },
    { name: "fb-sonner", description: "Sonner", variants: "-" },
  ],
  "Phase 3: ナビゲーション・構造系": [
    { name: "fb-accordion", description: "アコーディオン", variants: "-" },
    { name: "fb-collapsible", description: "折りたたみ", variants: "-" },
    { name: "fb-tabs", description: "タブ", variants: "appearance" },
    { name: "fb-toggle-group", description: "トグルグループ", variants: "appearance, size" },
    { name: "fb-breadcrumb", description: "パンくずリスト", variants: "-" },
    { name: "fb-pagination", description: "ページネーション", variants: "-" },
    { name: "fb-navigation-menu", description: "ナビゲーションメニュー", variants: "-" },
    { name: "fb-menubar", description: "メニューバー", variants: "-" },
    { name: "fb-scroll-area", description: "スクロールエリア", variants: "-" },
    { name: "fb-resizable", description: "リサイズ可能", variants: "-" },
  ],
  "Phase 4: フォーム・入力系": [
    { name: "fb-alert", description: "アラート", variants: "color" },
    { name: "fb-select", description: "セレクト", variants: "size" },
    { name: "fb-native-select", description: "ネイティブセレクト", variants: "size" },
    { name: "fb-command", description: "コマンド", variants: "-" },
    { name: "fb-combobox", description: "コンボボックス", variants: "-" },
    { name: "fb-slider", description: "スライダー", variants: "size, color" },
    { name: "fb-input-otp", description: "OTP入力", variants: "-" },
    { name: "fb-form", description: "フォーム", variants: "-" },
    { name: "fb-field", description: "フィールド", variants: "-" },
    { name: "fb-input-group", description: "インプットグループ", variants: "size" },
    { name: "fb-button-group", description: "ボタングループ", variants: "orientation" },
    { name: "fb-item", description: "アイテム", variants: "variant, size" },
  ],
  "Phase 5: データ表示・高度なコンポーネント": [
    { name: "fb-table", description: "テーブル", variants: "-" },
    { name: "fb-data-table", description: "データテーブル", variants: "-" },
    { name: "fb-calendar", description: "カレンダー", variants: "-" },
    { name: "fb-date-picker", description: "日付選択", variants: "-" },
    { name: "fb-carousel", description: "カルーセル", variants: "-" },
    { name: "fb-chart", description: "チャート", variants: "-" },
    { name: "fb-empty", description: "空状態", variants: "size" },
    { name: "fb-sidebar", description: "サイドバー", variants: "side, variant, collapsible" },
  ],
}

const blocks = [
  { name: "hello-world", description: "Hello World サンプル" },
  { name: "example-form", description: "フォームサンプル" },
  { name: "example-login", description: "ログインフォーム" },
]

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

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
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

function ComponentRow({ name, description, variants }: { name: string; description: string; variants: string }) {
  const command = `npx shadcn@latest add "${BASE_URL}/${name}.json"`

  return (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <td className="py-3 px-4">
        <code className="text-sm font-mono text-[#002CED] dark:text-blue-400">{name}</code>
      </td>
      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{description}</td>
      <td className="py-3 px-4 text-gray-500 dark:text-gray-500 text-sm">{variants}</td>
      <td className="py-3 px-4">
        <div className="flex items-center gap-2">
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono truncate max-w-[300px]">
            {command}
          </code>
          <CopyButton text={command} />
        </div>
      </td>
    </tr>
  )
}

export default function Home() {
  const totalComponents = Object.values(components).flat().length
  const [activeSection, setActiveSection] = React.useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#002CED] flex items-center justify-center">
              <span className="text-white font-bold text-sm">fb</span>
            </div>
            <h1 className="text-xl font-bold">fly-by Design System</h1>
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
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#002CED]">fly-by</span> Design System
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Inhouse をリスペクトした独自デザインシステム。
            <br />
            Yukyu Flavor（#002CED）を基調とする shadcn/ui 互換のコンポーネントライブラリ。
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

        {/* Usage */}
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
                language="tsx"
              />
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
            <h3 className="font-semibold mb-4">複数コンポーネントを一括追加</h3>
            <CodeBlock
              code={`npx shadcn@latest add "${BASE_URL}/fb-button.json" "${BASE_URL}/fb-card.json" "${BASE_URL}/fb-input.json"`}
            />
          </div>
        </section>

        {/* Component List */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800" id="components">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Package className="h-6 w-6" />
            コンポーネント一覧
          </h2>

          {/* Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.keys(components).map((phase) => (
              <button
                key={phase}
                onClick={() => {
                  const el = document.getElementById(phase.replace(/\s/g, "-"))
                  el?.scrollIntoView({ behavior: "smooth" })
                  setActiveSection(phase)
                }}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeSection === phase
                    ? "bg-[#002CED] text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {phase.split(":")[0]}
              </button>
            ))}
          </div>

          {/* Tables */}
          {Object.entries(components).map(([phase, items]) => (
            <div key={phase} id={phase.replace(/\s/g, "-")} className="mb-12">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {phase}
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({items.length} components)
                </span>
              </h3>
              <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr className="text-left text-sm text-gray-600 dark:text-gray-400">
                      <th className="py-3 px-4 font-medium">コンポーネント</th>
                      <th className="py-3 px-4 font-medium">説明</th>
                      <th className="py-3 px-4 font-medium">バリアント</th>
                      <th className="py-3 px-4 font-medium">インストールコマンド</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <ComponentRow key={item.name} {...item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* Blocks */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800" id="blocks">
          <h2 className="text-2xl font-bold mb-6">ブロック</h2>
          <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr className="text-left text-sm text-gray-600 dark:text-gray-400">
                  <th className="py-3 px-4 font-medium">ブロック</th>
                  <th className="py-3 px-4 font-medium">説明</th>
                  <th className="py-3 px-4 font-medium">インストールコマンド</th>
                </tr>
              </thead>
              <tbody>
                {blocks.map((block) => {
                  const command = `npx shadcn@latest add "${BASE_URL}/${block.name}.json"`
                  return (
                    <tr
                      key={block.name}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <code className="text-sm font-mono text-[#002CED] dark:text-blue-400">
                          {block.name}
                        </code>
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{block.description}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono truncate max-w-[300px]">
                            {command}
                          </code>
                          <CopyButton text={command} />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
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
                  <span><strong>data-slot属性:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">data-slot="fb-{"{component}"}"</code></span>
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
