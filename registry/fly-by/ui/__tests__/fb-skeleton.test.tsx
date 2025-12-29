import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbSkeleton } from '../fb-skeleton'

describe('FbSkeleton', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<FbSkeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    })

    it('data-slot="fb-skeleton"が設定される', () => {
      render(<FbSkeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toHaveAttribute('data-slot', 'fb-skeleton')
    })

    it('fb-skeletonクラスが付与される', () => {
      render(<FbSkeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('fb-skeleton')
    })

    it('aria-hidden="true"が設定される', () => {
      render(<FbSkeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('shape バリアント', () => {
    it('デフォルトでrectangleが適用される', () => {
      render(<FbSkeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('-shape-rectangle')
    })

    it('shape="circle"が適用される', () => {
      render(<FbSkeleton data-testid="skeleton" shape="circle" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('-shape-circle')
    })

    it('shape="text"が適用される', () => {
      render(<FbSkeleton data-testid="skeleton" shape="text" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('-shape-text')
    })
  })
})
