import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbSwitch } from '../fb-switch'

describe('FbSwitch', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<FbSwitch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toBeInTheDocument()
    })

    it('data-slot="fb-switch"が設定される', () => {
      render(<FbSwitch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toHaveAttribute('data-slot', 'fb-switch')
    })

    it('fb-switchクラスが付与される', () => {
      render(<FbSwitch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toHaveClass('fb-switch')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<FbSwitch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(<FbSwitch data-testid="switch" size="l" />)
      expect(screen.getByTestId('switch')).toHaveClass('-size-l')
    })
  })

  describe('color バリアント', () => {
    it('デフォルトでinformativeが適用される', () => {
      render(<FbSwitch data-testid="switch" />)
      expect(screen.getByTestId('switch')).toHaveClass('-color-informative')
    })

    it('color="positive"が適用される', () => {
      render(<FbSwitch data-testid="switch" color="positive" />)
      expect(screen.getByTestId('switch')).toHaveClass('-color-positive')
    })
  })
})
