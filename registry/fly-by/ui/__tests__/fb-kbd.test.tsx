import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbKbd } from '../fb-kbd'

describe('FbKbd', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<FbKbd>⌘</FbKbd>)
      expect(screen.getByText('⌘')).toBeInTheDocument()
    })

    it('data-slot="fb-kbd"が設定される', () => {
      render(<FbKbd data-testid="kbd">K</FbKbd>)
      expect(screen.getByTestId('kbd')).toHaveAttribute('data-slot', 'fb-kbd')
    })

    it('fb-kbdクラスが付与される', () => {
      render(<FbKbd data-testid="kbd">K</FbKbd>)
      expect(screen.getByTestId('kbd')).toHaveClass('fb-kbd')
    })

    it('kbd要素としてレンダリングされる', () => {
      render(<FbKbd data-testid="kbd">K</FbKbd>)
      expect(screen.getByTestId('kbd').tagName).toBe('KBD')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<FbKbd data-testid="kbd">K</FbKbd>)
      expect(screen.getByTestId('kbd')).toHaveClass('-size-m')
    })

    it('size="s"が適用される', () => {
      render(<FbKbd data-testid="kbd" size="s">K</FbKbd>)
      expect(screen.getByTestId('kbd')).toHaveClass('-size-s')
    })

    it('size="l"が適用される', () => {
      render(<FbKbd data-testid="kbd" size="l">K</FbKbd>)
      expect(screen.getByTestId('kbd')).toHaveClass('-size-l')
    })
  })
})
