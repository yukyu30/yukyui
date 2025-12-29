# fly-by Design System

Yukyu Flavor（鮮やかな青 #002CED）を基調とする shadcn/ui 互換のコンポーネントライブラリ。

## Usage / 使い方

### 1. shadcn CLI のインストール

```bash
npx shadcn@latest init
```

### 2. コンポーネントの追加

```bash
npx shadcn@latest add "https://yukyui.vercel.app/r/fb-button.json"
```

または複数コンポーネントを一括追加：

```bash
npx shadcn@latest add "https://yukyui.vercel.app/r/fb-button.json" "https://yukyui.vercel.app/r/fb-card.json" "https://yukyui.vercel.app/r/fb-input.json"
```

### 3. コンポーネントの使用

```tsx
import { FbButton } from "@/components/ui/fb-button"

export default function MyComponent() {
  return (
    <FbButton variant="default" size="default">
      Click me
    </FbButton>
  )
}
```

---

## Component List / コンポーネント一覧

### Phase 1: 基礎コンポーネント

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-button | ボタン | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-button.json"` |
| fb-card | カード | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-card.json"` |
| fb-input | テキスト入力 | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-input.json"` |
| fb-label | ラベル | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-label.json"` |
| fb-textarea | テキストエリア | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-textarea.json"` |
| fb-text | テキスト | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-text.json"` |
| fb-separator | 区切り線 | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-separator.json"` |
| fb-badge | バッジ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-badge.json"` |
| fb-spinner | スピナー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-spinner.json"` |
| fb-skeleton | スケルトン | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-skeleton.json"` |
| fb-kbd | キーボード | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-kbd.json"` |
| fb-avatar | アバター | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-avatar.json"` |
| fb-aspect-ratio | アスペクト比 | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-aspect-ratio.json"` |
| fb-progress | プログレスバー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-progress.json"` |
| fb-toggle | トグル | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-toggle.json"` |
| fb-checkbox | チェックボックス | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-checkbox.json"` |
| fb-switch | スイッチ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-switch.json"` |
| fb-radio-group | ラジオグループ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-radio-group.json"` |

### Phase 2: オーバーレイ・ポップアップ系

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-tooltip | ツールチップ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-tooltip.json"` |
| fb-popover | ポップオーバー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-popover.json"` |
| fb-dialog | ダイアログ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-dialog.json"` |
| fb-alert-dialog | アラートダイアログ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-alert-dialog.json"` |
| fb-sheet | シート | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-sheet.json"` |
| fb-drawer | ドロワー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-drawer.json"` |
| fb-dropdown-menu | ドロップダウンメニュー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-dropdown-menu.json"` |
| fb-context-menu | コンテキストメニュー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-context-menu.json"` |
| fb-hover-card | ホバーカード | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-hover-card.json"` |
| fb-toast | トースト | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-toast.json"` |
| fb-sonner | Sonner | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-sonner.json"` |

### Phase 3: ナビゲーション・構造系

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-accordion | アコーディオン | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-accordion.json"` |
| fb-collapsible | 折りたたみ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-collapsible.json"` |
| fb-tabs | タブ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-tabs.json"` |
| fb-toggle-group | トグルグループ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-toggle-group.json"` |
| fb-breadcrumb | パンくずリスト | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-breadcrumb.json"` |
| fb-pagination | ページネーション | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-pagination.json"` |
| fb-navigation-menu | ナビゲーションメニュー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-navigation-menu.json"` |
| fb-menubar | メニューバー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-menubar.json"` |
| fb-scroll-area | スクロールエリア | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-scroll-area.json"` |
| fb-resizable | リサイズ可能 | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-resizable.json"` |

### Phase 4: フォーム・入力系

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-alert | アラート | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-alert.json"` |
| fb-select | セレクト | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-select.json"` |
| fb-native-select | ネイティブセレクト | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-native-select.json"` |
| fb-command | コマンド | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-command.json"` |
| fb-combobox | コンボボックス | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-combobox.json"` |
| fb-slider | スライダー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-slider.json"` |
| fb-input-otp | OTP入力 | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-input-otp.json"` |
| fb-form | フォーム | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-form.json"` |
| fb-field | フィールド | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-field.json"` |
| fb-input-group | インプットグループ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-input-group.json"` |
| fb-button-group | ボタングループ | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-button-group.json"` |
| fb-item | アイテム | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-item.json"` |

### Phase 5: データ表示・高度なコンポーネント

| コンポーネント | 説明 | インストールコマンド |
|--------------|------|---------------------|
| fb-table | テーブル | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-table.json"` |
| fb-data-table | データテーブル | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-data-table.json"` |
| fb-calendar | カレンダー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-calendar.json"` |
| fb-date-picker | 日付選択 | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-date-picker.json"` |
| fb-carousel | カルーセル | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-carousel.json"` |
| fb-chart | チャート | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-chart.json"` |
| fb-empty | 空状態 | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-empty.json"` |
| fb-sidebar | サイドバー | `npx shadcn@latest add "https://yukyui.vercel.app/r/fb-sidebar.json"` |

### Blocks / ブロック

| ブロック | 説明 | インストールコマンド |
|---------|------|---------------------|
| hello-world | Hello World サンプル | `npx shadcn@latest add "https://yukyui.vercel.app/r/hello-world.json"` |
| example-form | フォームサンプル | `npx shadcn@latest add "https://yukyui.vercel.app/r/example-form.json"` |
| example-login | ログインフォーム | `npx shadcn@latest add "https://yukyui.vercel.app/r/example-login.json"` |

---

## Design Principles / デザイン原則

- **プレフィックス**: `fb-` （例: `fb-button`, `fb-card`）
- **4pxグリッド**: すべてのサイズは4pxの倍数
- **Class-based**: `fb-{component} -{modifier}-{value}` 形式
- **Yukyu Flavor**: 鮮やかな青（#002CED）をベースカラーに
- **data-slot属性**: コンポーネント識別用に `data-slot="fb-{component}"` を使用

## Color Palette / カラーパレット

| 名前 | 用途 | HEX |
|------|------|-----|
| Primary 50 | 背景（薄い） | #e6ebfd |
| Primary 100 | ホバー背景 | #ccd7fb |
| Primary 500 | 基準色・ボタン | #002CED |
| Primary 600 | ホバー | #0025c4 |
| Primary 700 | アクティブ | #001e9b |

---

## Development / 開発

### ビルド

```bash
pnpm build
```

### レジストリのビルド

```bash
npx shadcn@latest build
```

### 開発サーバー

```bash
pnpm dev
```

## Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to view the full documentation.

## License

MIT
