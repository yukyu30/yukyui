import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbProgress } from '../fb-progress'

describe('FbProgress', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<FbProgress data-testid="progress" value={50} />)
      expect(screen.getByTestId('progress')).toBeInTheDocument()
    })

    it('data-slot="fb-progress"が設定される', () => {
      render(<FbProgress data-testid="progress" value={50} />)
      expect(screen.getByTestId('progress')).toHaveAttribute('data-slot', 'fb-progress')
    })

    it('fb-progressクラスが付与される', () => {
      render(<FbProgress data-testid="progress" value={50} />)
      expect(screen.getByTestId('progress')).toHaveClass('fb-progress')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<FbProgress data-testid="progress" value={50} />)
      expect(screen.getByTestId('progress')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(<FbProgress data-testid="progress" value={50} size="l" />)
      expect(screen.getByTestId('progress')).toHaveClass('-size-l')
    })
  })
})
