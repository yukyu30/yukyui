# fly-by デザインシステム 完全リファレンス

## 概要

**fly-by**は、Inhouseデザインシステムをベースにした、モダンでクラスベースのReactコンポーネントライブラリです。HTMLやReactコンポーネント作成時に使用され、一貫性のあるUIを迅速に構築できます。

### 主な特徴

- **プレフィックス**: すべてのコンポーネントとクラスは `fb-` で始まる
- **Yukyu Flavor**: 鮮やかな青（`#002CED`）をベースカラーとしたカラーパレット
- **クラスベース**: class-variance-authority (CVA)を使用した型安全なバリアント管理
- **スロット構造**: `_header`, `_body`, `_footer` などの明確な内部スロット
- **ダークモード対応**: すべてのコンポーネントがダークモードをサポート

---

## デザイン原則

### Yukyu Flavor

fly-byデザインシステムの中核となるカラーシステムです。

**ベースカラー**: `#002CED` - 鮮やかで印象的な青

このカラーは以下の場面で使用されます：
- Primary actionボタン（informative色のsolidアピアランス）
- フォーカス状態のアウトライン
- リンクやインタラクティブ要素の強調

---

## クラス命名規則

fly-byは一貫した命名規則を採用しています。

### 基本構造

```
fb-{component} -{variant}-{value}
```

**例**:
- `fb-button -appearance-solid -color-informative -size-m`
- `fb-card -elevation-1`
- `fb-text -level-l -density-normal`

### スロット

コンポーネントの内部構造を示すために、アンダースコアプレフィックス（`_`）を使用します。

**例**:
- `_header` - ヘッダー部分
- `_body` - メインコンテンツ
- `_footer` - フッター部分

---

## カラーシステム

fly-byは5つの主要なカラーバリエーションを提供します。

### Color Variants

| Color | 用途 | Hex (Light) |
|-------|------|-------------|
| `neutral` | デフォルト、中立的な要素 | グレー系 |
| `informative` | 情報、主要アクション | `#002CED` (Yukyu Flavor) |
| `positive` | 成功、肯定的なアクション | 緑系 (`#16a34a`) |
| `negative` | エラー、警告、削除 | 赤系 (`#dc2626`) |
| `favorite` | お気に入り、特別な要素 | ピンク系 (`#ec4899`) |

---

## サイズシステム

多くのコンポーネントで共通のサイズバリエーションを使用します。

| Size | 高さ | パディング | テキストサイズ |
|------|------|-----------|--------------|
| `xs` | 24px (h-6) | 8px | 12px (text-xs) |
| `s` | 32px (h-8) | 12px | 14px (text-sm) |
| `m` | 36px (h-9) | 16px | 14px (text-sm) |
| `l` | 40px (h-10) | 20px | 16px (text-base) |
| `xl` | 48px (h-12) | 24px | 18px (text-lg) |

---

## アピアランスシステム

主要なコンポーネント（Button, Badgeなど）で使用される4つのアピアランス：

### Appearance Variants

| Appearance | 説明 | 使用例 |
|-----------|------|--------|
| `flat` | 背景色あり、枠線なし | デフォルトのボタン、バッジ |
| `outlined` | 透明背景、枠線あり | セカンダリーボタン |
| `solid` | 塗りつぶし、テキストは白 | プライマリーボタン、強調バッジ |
| `transparent` | 透明背景、枠線なし | テキストボタン、リンク風 |

---

## コンポーネント一覧

### 1. レイアウト・コンテナ

#### FbCard

カード型のコンテナコンポーネント。

**Props**:
- `elevation`: `0 | 1 | 2 | 3` - シャドウの深さ（デフォルト: `1`）

**サブコンポーネント**:
- `FbCardHeader` - ヘッダー部分（`_header`）
- `FbCardTitle` - タイトル
- `FbCardDescription` - 説明文
- `FbCardBody` - メインコンテンツ（`_body`）
- `FbCardFooter` - フッター（`_footer`）

**使用例**:
```tsx
<FbCard elevation={1}>
  <FbCardHeader>
    <FbCardTitle>タイトル</FbCardTitle>
    <FbCardDescription>説明文</FbCardDescription>
  </FbCardHeader>
  <FbCardBody>メインコンテンツ</FbCardBody>
  <FbCardFooter>フッター</FbCardFooter>
</FbCard>
```

#### FbScrollArea

スクロール可能なエリアを提供します。

#### FbResizable

リサイズ可能なパネルを提供します。

#### FbSidebar

サイドバーレイアウトを提供します。

---

### 2. タイポグラフィ

#### FbText

テキスト表示のための基本コンポーネント。

**Props**:
- `level`: `xxs | xs | s | m | l | xl | xxl | xxxl` - テキストサイズ（デフォルト: `m`）
- `density`: `dense | normal | loose` - 行間（デフォルト: `normal`）
- `weight`: `normal | medium | semibold | bold` - フォントウェイト
- `as`: `span | p | div | h1 | h2 | h3 | h4 | h5 | h6` - レンダリングするHTML要素

**使用例**:
```tsx
<FbText level="l" weight="semibold" as="h2">
  見出しテキスト
</FbText>
```

#### FbLabel

フォーム要素のラベル。

---

### 3. ボタン・アクション

#### FbButton

主要なボタンコンポーネント。

**Props**:
- `appearance`: `flat | outlined | solid | transparent` - 外観（デフォルト: `flat`）
- `color`: `neutral | informative | positive | negative | favorite` - カラー（デフォルト: `neutral`）
- `size`: `xs | s | m | l | xl` - サイズ（デフォルト: `m`）
- `width`: `auto | full` - 幅設定
- `asChild`: `boolean` - Slotとして使用するか

**使用例**:
```tsx
<FbButton appearance="solid" color="informative" size="m">
  保存する
</FbButton>
```

#### FbButtonGroup

複数のボタンをグループ化します。

#### FbToggle

トグルボタン。ON/OFFの状態を表現します。

#### FbToggleGroup

複数のトグルボタンをグループ化します。

---

### 4. フォーム入力

#### FbInput

テキスト入力フィールド。

**Props**:
- `appearance`: `outlined | filled` - 外観（デフォルト: `outlined`）
- `size`: `s | m | l` - サイズ（デフォルト: `m`）

**使用例**:
```tsx
<FbInput
  appearance="outlined"
  size="m"
  placeholder="メールアドレスを入力"
/>
```

#### FbInputGroup

複数の入力要素をグループ化します。

#### FbTextarea

複数行テキスト入力。

#### FbCheckbox

チェックボックス。

#### FbRadioGroup

ラジオボタングループ。

#### FbSwitch

スイッチ（ON/OFF切り替え）。

#### FbSelect

ドロップダウン選択。

#### FbNativeSelect

ネイティブセレクト要素。

#### FbCombobox

検索可能な選択コンポーネント。

#### FbInputOtp

OTP（ワンタイムパスワード）入力。

#### FbSlider

スライダー入力。

#### FbDatePicker

日付選択コンポーネント。

#### FbCalendar

カレンダー表示。

#### FbForm

フォーム全体を管理するラッパー。

#### FbField

フォームフィールドのラッパー。

---

### 5. 表示・フィードバック

#### FbBadge

バッジ・ラベル表示。

**Props**:
- `appearance`: `flat | outlined | solid` - 外観（デフォルト: `flat`）
- `color`: `neutral | informative | positive | negative | favorite` - カラー（デフォルト: `neutral`）
- `size`: `s | m | l` - サイズ（デフォルト: `m`）

**使用例**:
```tsx
<FbBadge appearance="solid" color="informative">
  New
</FbBadge>
```

#### FbAlert

アラート・通知メッセージ。

**Props**:
- `color`: `neutral | informative | positive | negative | warning` - カラー（デフォルト: `neutral`）
- `showIcon`: `boolean` - アイコン表示（デフォルト: `true`）

**サブコンポーネント**:
- `FbAlertTitle` - タイトル
- `FbAlertDescription` - 説明文

**使用例**:
```tsx
<FbAlert color="informative">
  <FbAlertTitle>お知らせ</FbAlertTitle>
  <FbAlertDescription>重要な情報があります。</FbAlertDescription>
</FbAlert>
```

#### FbToast

トースト通知。

#### FbSonner

Sonnerライブラリを使ったトースト。

#### FbSpinner

ローディングスピナー。

#### FbSkeleton

スケルトンローダー。

#### FbProgress

プログレスバー。

#### FbEmpty

空状態の表示。

#### FbKbd

キーボードショートカット表示。

#### FbSeparator

セパレーター（区切り線）。

---

### 6. オーバーレイ・モーダル

#### FbDialog

ダイアログモーダル。

#### FbAlertDialog

確認ダイアログ。

#### FbSheet

シートモーダル（サイドから表示）。

#### FbDrawer

ドロワーコンポーネント。

#### FbPopover

ポップオーバー。

#### FbTooltip

ツールチップ。

#### FbHoverCard

ホバーカード。

---

### 7. ナビゲーション

#### FbTabs

タブコンポーネント。

#### FbAccordion

アコーディオン。

#### FbCollapsible

折りたたみ可能なコンテンツ。

#### FbBreadcrumb

パンくずリスト。

#### FbPagination

ページネーション。

#### FbNavigationMenu

ナビゲーションメニュー。

#### FbMenubar

メニューバー。

#### FbDropdownMenu

ドロップダウンメニュー。

#### FbContextMenu

コンテキストメニュー。

#### FbCommand

コマンドパレット。

---

### 8. データ表示

#### FbTable

テーブル表示。

#### FbDataTable

データテーブル（ソート・フィルタリング対応）。

#### FbAvatar

アバター表示。

#### FbAspectRatio

アスペクト比固定コンテナ。

#### FbCarousel

カルーセル。

#### FbChart

チャート表示。

#### FbItem

リストアイテム。

---

## 使用例

### ログインフォーム

```tsx
import { FbButton } from "@/registry/fly-by/ui/fb-button"
import { FbInput } from "@/registry/fly-by/ui/fb-input"
import { FbCard, FbCardHeader, FbCardTitle, FbCardBody } from "@/registry/fly-by/ui/fb-card"

export function LoginForm() {
  return (
    <FbCard elevation={2}>
      <FbCardHeader>
        <FbCardTitle>ログイン</FbCardTitle>
      </FbCardHeader>
      <FbCardBody>
        <form className="space-y-4">
          <div>
            <FbInput
              type="email"
              placeholder="メールアドレス"
              appearance="outlined"
              size="m"
            />
          </div>
          <div>
            <FbInput
              type="password"
              placeholder="パスワード"
              appearance="outlined"
              size="m"
            />
          </div>
          <FbButton
            type="submit"
            appearance="solid"
            color="informative"
            width="full"
          >
            ログイン
          </FbButton>
        </form>
      </FbCardBody>
    </FbCard>
  )
}
```

### アラート表示

```tsx
import { FbAlert, FbAlertTitle, FbAlertDescription } from "@/registry/fly-by/ui/fb-alert"

export function NotificationExample() {
  return (
    <div className="space-y-4">
      <FbAlert color="informative">
        <FbAlertTitle>情報</FbAlertTitle>
        <FbAlertDescription>
          新しい機能が追加されました。
        </FbAlertDescription>
      </FbAlert>

      <FbAlert color="positive">
        <FbAlertTitle>成功</FbAlertTitle>
        <FbAlertDescription>
          データが正常に保存されました。
        </FbAlertDescription>
      </FbAlert>

      <FbAlert color="negative">
        <FbAlertTitle>エラー</FbAlertTitle>
        <FbAlertDescription>
          処理中にエラーが発生しました。
        </FbAlertDescription>
      </FbAlert>
    </div>
  )
}
```

### ボタングループ

```tsx
import { FbButton } from "@/registry/fly-by/ui/fb-button"
import { FbButtonGroup } from "@/registry/fly-by/ui/fb-button-group"

export function ActionButtons() {
  return (
    <FbButtonGroup>
      <FbButton appearance="outlined" color="neutral">
        キャンセル
      </FbButton>
      <FbButton appearance="flat" color="informative">
        下書き保存
      </FbButton>
      <FbButton appearance="solid" color="informative">
        公開する
      </FbButton>
    </FbButtonGroup>
  )
}
```

### バッジの使用

```tsx
import { FbBadge } from "@/registry/fly-by/ui/fb-badge"

export function StatusBadges() {
  return (
    <div className="flex gap-2">
      <FbBadge color="positive" appearance="solid">公開中</FbBadge>
      <FbBadge color="neutral" appearance="outlined">下書き</FbBadge>
      <FbBadge color="informative" appearance="flat">新着</FbBadge>
      <FbBadge color="negative" appearance="solid">期限切れ</FbBadge>
    </div>
  )
}
```

---

## 技術スタック

fly-byは以下のライブラリを使用しています：

- **React**: UIコンポーネントの基盤
- **Radix UI**: アクセシブルなプリミティブコンポーネント
- **class-variance-authority (CVA)**: 型安全なバリアント管理
- **Tailwind CSS**: ユーティリティファーストのスタイリング
- **lucide-react**: アイコンライブラリ

---

## インストール・セットアップ

fly-byコンポーネントは、shadcn/uiスタイルのレジストリから個別にインストールできます。

### 前提条件

```bash
npm install tailwindcss class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot
```

### コンポーネントのインポート

```tsx
import { FbButton } from "@/registry/fly-by/ui/fb-button"
import { FbCard } from "@/registry/fly-by/ui/fb-card"
```

---

## ベストプラクティス

### 1. カラーの使い分け

- **informative (Yukyu Blue)**: 主要なアクション、情報の強調
- **positive**: 成功メッセージ、肯定的なアクション
- **negative**: エラー、警告、削除などの危険なアクション
- **neutral**: デフォルト、中立的な要素
- **favorite**: お気に入り、特別なマーキング

### 2. サイズの選択

- **xs**: アイコンボタン、小さなバッジ
- **s**: コンパクトなUI
- **m**: デフォルト、最も一般的
- **l**: 強調したい要素
- **xl**: ヒーローセクション、ランディングページ

### 3. アピアランスの使い分け

- **solid**: 最も強い視覚的重み、プライマリーアクション
- **flat**: デフォルト、バランスの取れた視覚的重み
- **outlined**: セカンダリーアクション、目立ちすぎない強調
- **transparent**: テキストボタン、最小限の視覚的重み

---

## まとめ

fly-byデザインシステムは、Yukyu Flavorの鮮やかな青を中心とした、一貫性のある美しいUIを構築するための包括的なコンポーネントライブラリです。クラスベースの設計により、型安全性と拡張性を保ちながら、迅速な開発を可能にします。

**公式リポジトリ**: https://github.com/yukyu30/yukyui
