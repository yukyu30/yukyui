import * as React from "react"
import { HelloWorld } from "@/registry/fly-by/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/fly-by/blocks/example-form/example-form"
import { ExampleLogin } from "@/registry/fly-by/blocks/example-login/example-login"

// This page displays items from the fly-by registry.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">fly-by Registry</h1>
        <p className="text-muted-foreground">
          fly-byデザインシステムを使用したカスタムレジストリ
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Hello World コンポーネント
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <HelloWorld />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              お問い合わせフォーム（Zod validation使用）
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              ログインフォーム（CSSファイル付き）
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ExampleLogin />
          </div>
        </div>
      </main>
    </div>
  )
}
