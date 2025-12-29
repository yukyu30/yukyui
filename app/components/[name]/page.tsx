'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowLeft, Copy, Check, Package, Terminal } from 'lucide-react';
import { getComponent } from '@/lib/registry';
import { FbButton } from '@/registry/fly-by/ui/fb-button';
import { FbBadge } from '@/registry/fly-by/ui/fb-badge';
import { FbCard } from '@/registry/fly-by/ui/fb-card';

const BASE_URL = 'https://fly-by.design.yukyu.net/r';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <FbButton
      appearance="transparent"
      color="neutral"
      size="s"
      onClick={copy}
      className="h-8 w-8 p-0"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </FbButton>
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

export default function ComponentPage() {
  const params = useParams();
  const name = params.name as string;
  const component = getComponent(name);

  if (!component) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Component not found</h1>
          <Link href="/">
            <FbButton appearance="outlined" color="informative">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </FbButton>
          </Link>
        </div>
      </div>
    );
  }

  const installCommand = `npx shadcn@latest add "${BASE_URL}/${name}.json"`;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/fly-by-logo.png"
              alt="fly-by Design System"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <a
            href="https://github.com/yukyu30/fly-by"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/">
            <FbButton appearance="transparent" color="neutral" size="s">
              <ArrowLeft className="h-4 w-4" />
              Back to all components
            </FbButton>
          </Link>
        </div>

        {/* Component Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold font-mono text-[#002CED]">{name}</h1>
            <FbBadge appearance="flat" color="informative" size="m">
              {component.type.replace('registry:', '')}
            </FbBadge>
          </div>
          {component.title && (
            <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              {component.title}
            </h2>
          )}
          {component.description && (
            <p className="text-gray-600 dark:text-gray-400">{component.description}</p>
          )}
        </div>

        {/* Installation */}
        <FbCard elevation={1} className="mb-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              インストール
            </h3>
            <CodeBlock code={installCommand} />
          </div>
        </FbCard>

        {/* Dependencies */}
        {(component.dependencies || component.registryDependencies) && (
          <FbCard elevation={1} className="mb-8">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Package className="h-5 w-5" />
                依存関係
              </h3>

              {component.dependencies && component.dependencies.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    NPM Packages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {component.dependencies.map((dep) => (
                      <FbBadge key={dep} appearance="outlined" color="neutral" size="s">
                        {dep}
                      </FbBadge>
                    ))}
                  </div>
                </div>
              )}

              {component.registryDependencies && component.registryDependencies.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Registry Components
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {component.registryDependencies.map((dep) => (
                      <Link key={dep} href={`/components/${dep}`}>
                        <FbBadge appearance="flat" color="informative" size="s" className="cursor-pointer hover:opacity-80">
                          {dep}
                        </FbBadge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FbCard>
        )}

        {/* Usage Example */}
        <FbCard elevation={1} className="mb-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">使用例</h3>
            <CodeBlock
              code={`import { ${name
                .split('-')
                .map((part, i) =>
                  i === 0
                    ? part.charAt(0).toUpperCase() + part.slice(1)
                    : part.charAt(0).toUpperCase() + part.slice(1)
                )
                .join('')} } from "@/components/ui/${name}"

// コンポーネントを使用
<${name
  .split('-')
  .map((part, i) =>
    i === 0
      ? part.charAt(0).toUpperCase() + part.slice(1)
      : part.charAt(0).toUpperCase() + part.slice(1)
  )
  .join('')}>
  Content
</${name
  .split('-')
  .map((part, i) =>
    i === 0
      ? part.charAt(0).toUpperCase() + part.slice(1)
      : part.charAt(0).toUpperCase() + part.slice(1)
  )
  .join('')}>`}
            />
          </div>
        </FbCard>

        {/* Files */}
        {component.files && component.files.length > 0 && (
          <FbCard elevation={1}>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">ファイル</h3>
              <div className="space-y-2">
                {component.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-md"
                  >
                    <code className="text-sm">{file.path}</code>
                    <FbBadge appearance="outlined" color="neutral" size="s">
                      {file.type.replace('registry:', '')}
                    </FbBadge>
                  </div>
                ))}
              </div>
            </div>
          </FbCard>
        )}
      </main>
    </div>
  );
}
