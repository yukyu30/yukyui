import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbAspectRatio } from '../fb-aspect-ratio'

describe('FbAspectRatio', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(
        <FbAspectRatio data-testid="aspect-ratio" ratio={16 / 9}>
          <div>Content</div>
        </FbAspectRatio>
      )
      expect(screen.getByTestId('aspect-ratio')).toBeInTheDocument()
    })

    it('data-slot="fb-aspect-ratio"が設定される', () => {
      render(
        <FbAspectRatio data-testid="aspect-ratio" ratio={16 / 9}>
          <div>Content</div>
        </FbAspectRatio>
      )
      expect(screen.getByTestId('aspect-ratio')).toHaveAttribute('data-slot', 'fb-aspect-ratio')
    })

    it('fb-aspect-ratioクラスが付与される', () => {
      render(
        <FbAspectRatio data-testid="aspect-ratio" ratio={16 / 9}>
          <div>Content</div>
        </FbAspectRatio>
      )
      expect(screen.getByTestId('aspect-ratio')).toHaveClass('fb-aspect-ratio')
    })

    it('子要素がレンダリングされる', () => {
      render(
        <FbAspectRatio ratio={16 / 9}>
          <div>Content</div>
        </FbAspectRatio>
      )
      expect(screen.getByText('Content')).toBeInTheDocument()
    })
  })
})
