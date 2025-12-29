import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FbRadioGroup, FbRadioGroupItem } from '../fb-radio-group'

describe('FbRadioGroup', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(
        <FbRadioGroup data-testid="radio-group">
          <FbRadioGroupItem value="1" data-testid="radio-item" />
        </FbRadioGroup>
      )
      expect(screen.getByTestId('radio-group')).toBeInTheDocument()
    })

    it('data-slot="fb-radio-group"が設定される', () => {
      render(
        <FbRadioGroup data-testid="radio-group">
          <FbRadioGroupItem value="1" />
        </FbRadioGroup>
      )
      expect(screen.getByTestId('radio-group')).toHaveAttribute('data-slot', 'fb-radio-group')
    })

    it('fb-radio-groupクラスが付与される', () => {
      render(
        <FbRadioGroup data-testid="radio-group">
          <FbRadioGroupItem value="1" />
        </FbRadioGroup>
      )
      expect(screen.getByTestId('radio-group')).toHaveClass('fb-radio-group')
    })
  })
})

describe('FbRadioGroupItem', () => {
  describe('レンダリング', () => {
    it('data-slot="fb-radio-group-item"が設定される', () => {
      render(
        <FbRadioGroup>
          <FbRadioGroupItem value="1" data-testid="radio-item" />
        </FbRadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveAttribute('data-slot', 'fb-radio-group-item')
    })

    it('fb-radio-group-itemクラスが付与される', () => {
      render(
        <FbRadioGroup>
          <FbRadioGroupItem value="1" data-testid="radio-item" />
        </FbRadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('fb-radio-group-item')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(
        <FbRadioGroup>
          <FbRadioGroupItem value="1" data-testid="radio-item" />
        </FbRadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(
        <FbRadioGroup>
          <FbRadioGroupItem value="1" data-testid="radio-item" size="l" />
        </FbRadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('-size-l')
    })
  })

  describe('color バリアント', () => {
    it('デフォルトでinformativeが適用される', () => {
      render(
        <FbRadioGroup>
          <FbRadioGroupItem value="1" data-testid="radio-item" />
        </FbRadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('-color-informative')
    })

    it('color="positive"が適用される', () => {
      render(
        <FbRadioGroup>
          <FbRadioGroupItem value="1" data-testid="radio-item" color="positive" />
        </FbRadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('-color-positive')
    })
  })
})
