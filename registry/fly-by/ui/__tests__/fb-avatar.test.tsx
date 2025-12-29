import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbAvatar, FbAvatarImage, FbAvatarFallback } from '../fb-avatar'

describe('FbAvatar', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(
        <FbAvatar data-testid="avatar">
          <FbAvatarFallback>UN</FbAvatarFallback>
        </FbAvatar>
      )
      expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })

    it('data-slot="fb-avatar"が設定される', () => {
      render(
        <FbAvatar data-testid="avatar">
          <FbAvatarFallback>UN</FbAvatarFallback>
        </FbAvatar>
      )
      expect(screen.getByTestId('avatar')).toHaveAttribute('data-slot', 'fb-avatar')
    })

    it('fb-avatarクラスが付与される', () => {
      render(
        <FbAvatar data-testid="avatar">
          <FbAvatarFallback>UN</FbAvatarFallback>
        </FbAvatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('fb-avatar')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(
        <FbAvatar data-testid="avatar">
          <FbAvatarFallback>UN</FbAvatarFallback>
        </FbAvatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(
        <FbAvatar data-testid="avatar" size="l">
          <FbAvatarFallback>UN</FbAvatarFallback>
        </FbAvatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('-size-l')
    })
  })

  describe('shape バリアント', () => {
    it('デフォルトでcircleが適用される', () => {
      render(
        <FbAvatar data-testid="avatar">
          <FbAvatarFallback>UN</FbAvatarFallback>
        </FbAvatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('-shape-circle')
    })

    it('shape="square"が適用される', () => {
      render(
        <FbAvatar data-testid="avatar" shape="square">
          <FbAvatarFallback>UN</FbAvatarFallback>
        </FbAvatar>
      )
      expect(screen.getByTestId('avatar')).toHaveClass('-shape-square')
    })
  })
})
