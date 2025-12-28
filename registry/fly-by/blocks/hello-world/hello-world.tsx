import { FbText } from "@/registry/fly-by/ui/fb-text"
import { FbButton } from "@/registry/fly-by/ui/fb-button"

export function HelloWorld() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <FbText level="xxxl" weight="bold" as="h1">
        Hello World
      </FbText>
      <FbText level="m" density="normal" className="text-gray-500">
        fly-by デザインシステムへようこそ
      </FbText>
      <FbButton appearance="solid" color="informative" size="m">
        はじめる
      </FbButton>
    </div>
  )
}
