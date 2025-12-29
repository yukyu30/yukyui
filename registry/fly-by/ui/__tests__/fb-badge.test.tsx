import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbBadge } from '../fb-badge'

/**
 * テストリスト（fb-badge）:
 * [x] コンポーネントが正常にレンダリングされる
 * [x] data-slot="fb-badge"が設定される
 * [x] fb-badgeクラスが付与される
 * [x] colorバリアント（informative/positive/negative/neutral/favorite）
 * [x] appearanceバリアント（solid/outlined/flat）
 * [x] sizeバリアント（s/m/l）
 */

describe('FbBadge', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<FbBadge>Badge</FbBadge>)
      expect(screen.getByText('Badge')).toBeInTheDocument()
    })

    it('data-slot="fb-badge"が設定される', () => {
      render(<FbBadge data-testid="badge">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveAttribute('data-slot', 'fb-badge')
    })

    it('fb-badgeクラスが付与される', () => {
      render(<FbBadge data-testid="badge">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('fb-badge')
    })
  })

  describe('color バリアント', () => {
    it('デフォルトでneutralが適用される', () => {
      render(<FbBadge data-testid="badge">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-neutral')
    })

    it('color="informative"が適用される', () => {
      render(<FbBadge data-testid="badge" color="informative">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-informative')
    })

    it('color="positive"が適用される', () => {
      render(<FbBadge data-testid="badge" color="positive">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-positive')
    })

    it('color="negative"が適用される', () => {
      render(<FbBadge data-testid="badge" color="negative">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-negative')
    })

    it('color="favorite"が適用される', () => {
      render(<FbBadge data-testid="badge" color="favorite">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-color-favorite')
    })
  })

  describe('appearance バリアント', () => {
    it('デフォルトでflatが適用される', () => {
      render(<FbBadge data-testid="badge">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-appearance-flat')
    })

    it('appearance="solid"が適用される', () => {
      render(<FbBadge data-testid="badge" appearance="solid">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-appearance-solid')
    })

    it('appearance="outlined"が適用される', () => {
      render(<FbBadge data-testid="badge" appearance="outlined">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-appearance-outlined')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<FbBadge data-testid="badge">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-size-m')
    })

    it('size="s"が適用される', () => {
      render(<FbBadge data-testid="badge" size="s">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-size-s')
    })

    it('size="l"が適用される', () => {
      render(<FbBadge data-testid="badge" size="l">Badge</FbBadge>)
      expect(screen.getByTestId('badge')).toHaveClass('-size-l')
    })
  })
})
