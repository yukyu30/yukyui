import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbToggle } from '../fb-toggle'

describe('FbToggle', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<FbToggle data-testid="toggle">B</FbToggle>)
      expect(screen.getByTestId('toggle')).toBeInTheDocument()
    })

    it('data-slot="fb-toggle"が設定される', () => {
      render(<FbToggle data-testid="toggle">B</FbToggle>)
      expect(screen.getByTestId('toggle')).toHaveAttribute('data-slot', 'fb-toggle')
    })

    it('fb-toggleクラスが付与される', () => {
      render(<FbToggle data-testid="toggle">B</FbToggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('fb-toggle')
    })
  })

  describe('appearance バリアント', () => {
    it('デフォルトでdefaultが適用される', () => {
      render(<FbToggle data-testid="toggle">B</FbToggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('-appearance-default')
    })

    it('appearance="outlined"が適用される', () => {
      render(<FbToggle data-testid="toggle" appearance="outlined">B</FbToggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('-appearance-outlined')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<FbToggle data-testid="toggle">B</FbToggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(<FbToggle data-testid="toggle" size="l">B</FbToggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('-size-l')
    })
  })
})
