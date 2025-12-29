// @testing-library/jest-dom がインストールされたら以下をアンコメント
// import '@testing-library/jest-dom/vitest'

// カスタムマッチャー（jest-domの代替）
import { expect } from 'vitest'

expect.extend({
  toBeInTheDocument(received) {
    const pass = received !== null && received !== undefined
    return {
      pass,
      message: () => `expected element ${pass ? 'not ' : ''}to be in the document`,
    }
  },
  toHaveClass(received, className: string) {
    const pass = received?.classList?.contains(className) ?? false
    return {
      pass,
      message: () => `expected element ${pass ? 'not ' : ''}to have class "${className}"`,
    }
  },
  toHaveAttribute(received, attr: string, value?: string) {
    const hasAttr = received?.hasAttribute?.(attr) ?? false
    const attrValue = received?.getAttribute?.(attr)
    const pass = value !== undefined ? attrValue === value : hasAttr
    return {
      pass,
      message: () => `expected element ${pass ? 'not ' : ''}to have attribute "${attr}"${value !== undefined ? ` with value "${value}"` : ''}`,
    }
  },
})
