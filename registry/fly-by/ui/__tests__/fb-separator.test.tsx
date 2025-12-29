import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbSeparator } from '../fb-separator'

/**
 * テストリスト（fb-separator）:
 * [x] コンポーネントが正常にレンダリングされる
 * [x] data-slot="fb-separator"が設定される
 * [x] fb-separatorクラスが付与される
 * [x] orientation="horizontal"（デフォルト）のスタイルが適用される
 * [x] orientation="vertical"のスタイルが適用される
 * [x] decorative属性がサポートされる
 */

describe('FbSeparator', () => {
  // レンダリングテスト
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<FbSeparator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toBeInTheDocument()
    })

    it('data-slot="fb-separator"が設定される', () => {
      render(<FbSeparator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveAttribute('data-slot', 'fb-separator')
    })

    it('fb-separatorクラスが付与される', () => {
      render(<FbSeparator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('fb-separator')
    })
  })

  // バリアントテスト
  describe('orientation', () => {
    it('デフォルトでhorizontalスタイルが適用される', () => {
      render(<FbSeparator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('-orientation-horizontal')
    })

    it('orientation="vertical"のスタイルが適用される', () => {
      render(<FbSeparator data-testid="separator" orientation="vertical" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('-orientation-vertical')
    })
  })

  // アクセシビリティテスト
  describe('アクセシビリティ', () => {
    it('decorative=trueでrole="none"が設定される', () => {
      render(<FbSeparator data-testid="separator" decorative />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveAttribute('role', 'none')
    })

    it('decorative=falseでrole="separator"が設定される', () => {
      render(<FbSeparator data-testid="separator" decorative={false} />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveAttribute('role', 'separator')
    })
  })
})
