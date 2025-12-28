"use client"

import * as React from "react"
import { z } from "zod"

import {
  FbCard,
  FbCardHeader,
  FbCardTitle,
  FbCardDescription,
  FbCardBody,
  FbCardFooter,
} from "@/registry/fly-by/ui/fb-card"
import { FbInput } from "@/registry/fly-by/ui/fb-input"
import { FbLabel } from "@/registry/fly-by/ui/fb-label"
import { FbButton } from "@/registry/fly-by/ui/fb-button"
import { FbTextarea } from "@/registry/fly-by/ui/fb-textarea"
import { FbText } from "@/registry/fly-by/ui/fb-text"

const exampleFormSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "メッセージを入力してください"),
})

export function ExampleForm() {
  const [pending, setPending] = React.useState(false)
  const [state, setState] = React.useState({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    success: false,
    errors: {
      name: "",
      email: "",
      message: "",
    },
  })

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setPending(true)

      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries())
      const result = exampleFormSchema.safeParse(data)

      if (!result.success) {
        setState({
          ...state,
          errors: Object.fromEntries(
            Object.entries(result.error.flatten().fieldErrors).map(
              ([key, value]) => [key, value?.[0] ?? ""]
            )
          ) as Record<keyof typeof state.errors, string>,
        })
        setPending(false)
        return
      }

      setState({
        ...state,
        success: true,
        errors: { name: "", email: "", message: "" },
      })
      setPending(false)
    },
    [state]
  )

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <FbCard elevation={1}>
        <FbCardHeader>
          <FbCardTitle>お問い合わせ</FbCardTitle>
          <FbCardDescription>
            ご質問やご要望がございましたら、お気軽にお問い合わせください。
          </FbCardDescription>
        </FbCardHeader>
        <FbCardBody className="flex flex-col gap-6">
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.name}
          >
            <FbLabel
              htmlFor="name"
              className="group-data-[invalid=true]/field:text-red-600"
            >
              お名前 <span aria-hidden="true">*</span>
            </FbLabel>
            <FbInput
              id="name"
              name="name"
              placeholder="山田 太郎"
              appearance="outlined"
              size="m"
              className="group-data-[invalid=true]/field:border-red-500"
              disabled={pending}
              aria-invalid={!!state.errors?.name}
              defaultValue={state.defaultValues.name}
            />
            {state.errors?.name && (
              <FbText level="xs" className="text-red-600">
                {state.errors.name}
              </FbText>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.email}
          >
            <FbLabel
              htmlFor="email"
              className="group-data-[invalid=true]/field:text-red-600"
            >
              メールアドレス <span aria-hidden="true">*</span>
            </FbLabel>
            <FbInput
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              appearance="outlined"
              size="m"
              className="group-data-[invalid=true]/field:border-red-500"
              disabled={pending}
              aria-invalid={!!state.errors?.email}
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <FbText level="xs" className="text-red-600">
                {state.errors.email}
              </FbText>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.message}
          >
            <FbLabel
              htmlFor="message"
              className="group-data-[invalid=true]/field:text-red-600"
            >
              メッセージ <span aria-hidden="true">*</span>
            </FbLabel>
            <FbTextarea
              id="message"
              name="message"
              placeholder="お問い合わせ内容をご記入ください..."
              appearance="outlined"
              size="m"
              className="group-data-[invalid=true]/field:border-red-500"
              disabled={pending}
              aria-invalid={!!state.errors?.message}
              defaultValue={state.defaultValues.message}
            />
            {state.errors?.message && (
              <FbText level="xs" className="text-red-600">
                {state.errors.message}
              </FbText>
            )}
          </div>
        </FbCardBody>
        <FbCardFooter>
          <FbButton
            type="submit"
            appearance="solid"
            color="informative"
            size="m"
            disabled={pending}
          >
            {pending ? "送信中..." : "送信する"}
          </FbButton>
        </FbCardFooter>
      </FbCard>
    </form>
  )
}
