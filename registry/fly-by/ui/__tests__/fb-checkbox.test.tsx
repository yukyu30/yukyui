import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbCheckbox } from '../fb-checkbox'

describe('FbCheckbox', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<FbCheckbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toBeInTheDocument()
    })

    it('data-slot="fb-checkbox"が設定される', () => {
      render(<FbCheckbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toHaveAttribute('data-slot', 'fb-checkbox')
    })

    it('fb-checkboxクラスが付与される', () => {
      render(<FbCheckbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('fb-checkbox')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<FbCheckbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('-size-m')
    })

    it('size="s"が適用される', () => {
      render(<FbCheckbox data-testid="checkbox" size="s" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('-size-s')
    })
  })

  describe('color バリアント', () => {
    it('デフォルトでinformativeが適用される', () => {
      render(<FbCheckbox data-testid="checkbox" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('-color-informative')
    })

    it('color="positive"が適用される', () => {
      render(<FbCheckbox data-testid="checkbox" color="positive" />)
      expect(screen.getByTestId('checkbox')).toHaveClass('-color-positive')
    })
  })
})
