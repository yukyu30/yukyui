'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Check,
  Copy,
  Terminal,
  Package,
  Palette,
  Grid3X3,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { getAllComponents } from '@/lib/registry';
import { FbCard } from '@/registry/fly-by/ui/fb-card';
import { FbBadge } from '@/registry/fly-by/ui/fb-badge';
import { FbInput } from '@/registry/fly-by/ui/fb-input';
import { FbButton } from '@/registry/fly-by/ui/fb-button';

const BASE_URL = 'https://fly-by.design.yukyu.net/r';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
  );
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
  );
}

export default function Home() {
  const allComponents = getAllComponents();
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredComponents = React.useMemo(() => {
    if (!searchQuery) return allComponents;
    const query = searchQuery.toLowerCase();
    return allComponents.filter(
      (comp) =>
        comp.name.toLowerCase().includes(query) ||
        comp.title?.toLowerCase().includes(query) ||
        comp.description?.toLowerCase().includes(query)
    );
  }, [allComponents, searchQuery]);

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
              {allComponents.length} components
            </span>
            <a
              href="/fly-by-full.md"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              ドキュメント
            </a>
            <a
              href="https://github.com/yukyu30/fly-by"
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
            <strong className="text-[#002CED]">Yukyu Flavor</strong>
            （#002CED）を基調とする
            <br />
            shadcn/ui 互換のコンポーネントライブラリ。
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
            <FbBadge appearance="flat" color="neutral" size="l" className="px-4 py-1">
              <Grid3X3 className="h-4 w-4" />
              {allComponents.length} コンポーネント
            </FbBadge>
            <FbBadge appearance="flat" color="informative" size="l" className="px-4 py-1">
              <Palette className="h-4 w-4" />
              Yukyu Flavor
            </FbBadge>
            <FbBadge appearance="flat" color="neutral" size="l" className="px-4 py-1">
              <Terminal className="h-4 w-4" />
              shadcn CLI 対応
            </FbBadge>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a href="/fly-by-full.md">
              <FbButton appearance="solid" color="informative" size="l">
                <FileText className="h-5 w-5" />
                完全ドキュメントを見る
              </FbButton>
            </a>
            <a href="https://github.com/yukyu30/fly-by" target="_blank" rel="noopener noreferrer">
              <FbButton appearance="outlined" color="neutral" size="l">
                GitHub
              </FbButton>
            </a>
          </div>
        </section>

        <div className="border-t border-gray-200 dark:border-gray-800 my-12" />

        {/* Usage - Side by side */}
        <section className="py-12" id="usage">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="h-6 w-6" />
            使い方
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <FbCard elevation={1}>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-[#002CED]/10 flex items-center justify-center mb-4">
                  <span className="text-[#002CED] font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">shadcn CLI を初期化</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  まず shadcn/ui をプロジェクトに初期化します。
                </p>
                <CodeBlock code="npx shadcn@latest init" />
              </div>
            </FbCard>

            <FbCard elevation={1}>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-[#002CED]/10 flex items-center justify-center mb-4">
                  <span className="text-[#002CED] font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">コンポーネントを追加</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  必要なコンポーネントを追加します。
                </p>
                <CodeBlock
                  code={`npx shadcn@latest add "${BASE_URL}/fb-button.json"`}
                />
              </div>
            </FbCard>

            <FbCard elevation={1}>
              <div className="p-6">
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
            </FbCard>
          </div>
        </section>

        <div className="border-t border-gray-200 dark:border-gray-800 my-12" />

        {/* Component Showcase */}
        <section className="py-12" id="components">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Package className="h-6 w-6" />
              コンポーネント一覧
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({filteredComponents.length} / {allComponents.length})
              </span>
            </h2>
          </div>

          {/* Search */}
          <div className="mb-6 max-w-md">
            <FbInput
              appearance="outlined"
              size="m"
              placeholder="コンポーネントを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredComponents.map((component) => (
              <Link key={component.name} href={`/components/${component.name}`}>
                <FbCard
                  elevation={1}
                  className="h-full hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-mono text-[#002CED] font-semibold">
                        {component.name}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {component.title || component.description || component.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <FbBadge appearance="outlined" color="neutral" size="s">
                        {component.type.replace('registry:', '')}
                      </FbBadge>
                    </div>
                  </div>
                </FbCard>
              </Link>
            ))}
          </div>

          {filteredComponents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">コンポーネントが見つかりませんでした</p>
            </div>
          )}
        </section>

        <div className="border-t border-gray-200 dark:border-gray-800 my-12" />

        {/* Design Principles */}
        <section className="py-12" id="design">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Palette className="h-6 w-6" />
            デザイン原則
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <FbCard elevation={1}>
              <div className="p-6">
                <h3 className="font-semibold mb-4">命名規則</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#002CED]">•</span>
                    <span>
                      <strong>プレフィックス:</strong>{' '}
                      <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                        fb-
                      </code>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#002CED]">•</span>
                    <span>
                      <strong>プロパティ:</strong>{' '}
                      <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                        appearance, color, size
                      </code>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#002CED]">•</span>
                    <span>
                      <strong>4pxグリッド:</strong> すべてのサイズは4pxの倍数
                    </span>
                  </li>
                </ul>
              </div>
            </FbCard>

            <FbCard elevation={1}>
              <div className="p-6">
                <h3 className="font-semibold mb-4">Yukyu Flavor カラーパレット</h3>
                <div className="space-y-2">
                  {[
                    { name: 'Primary 50', hex: '#e6ebfd', usage: '背景（薄い）' },
                    { name: 'Primary 100', hex: '#ccd7fb', usage: 'ホバー背景' },
                    {
                      name: 'Primary 500',
                      hex: '#002CED',
                      usage: '基準色・ボタン',
                    },
                    { name: 'Primary 600', hex: '#0025c4', usage: 'ホバー' },
                    { name: 'Primary 700', hex: '#001e9b', usage: 'アクティブ' },
                  ].map((color) => (
                    <div
                      key={color.name}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div
                        className="w-8 h-8 rounded-md border border-gray-200 dark:border-gray-700"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <div className="font-medium">{color.name}</div>
                        <div className="text-gray-500 text-xs">
                          {color.hex} - {color.usage}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FbCard>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>fly-by Design System - Built with shadcn/ui</p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <a
              href="/fly-by-full.md"
              className="text-[#002CED] hover:underline flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              完全ドキュメント
            </a>
            <span>•</span>
            <a
              href="https://github.com/yukyu30/fly-by"
              className="text-[#002CED] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
