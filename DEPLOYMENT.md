# Deployment Guide - fly-by Design System

このドキュメントでは、fly-byデザインシステムを `fly-by.design.yukyu.net` にデプロイする手順を説明します。

## 概要

- **ホスティングサービス**: Vercel
- **フレームワーク**: Next.js 15
- **カスタムドメイン**: `fly-by.design.yukyu.net`
- **ドキュメントURL**: `https://fly-by.design.yukyu.net/fly-by-full.md`

## 前提条件

- GitHubリポジトリ: `yukyu30/yukyui` (または `yukyu30/fly-by`)
- Vercelアカウント
- DNSアクセス権限（yukyu.netドメイン）

## デプロイ手順

### 1. Vercelにプロジェクトをインポート

1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
2. 「Add New...」→「Project」をクリック
3. GitHubリポジトリ `yukyu30/yukyui` を選択
4. 以下の設定を行う：
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (デフォルト)
   - **Build Command**: `npm run build` (自動検出)
   - **Output Directory**: `.next` (自動検出)

5. 「Deploy」をクリック

### 2. カスタムドメインの設定

デプロイ完了後、カスタムドメインを設定します。

#### Vercel側の設定

1. Vercelプロジェクトの「Settings」→「Domains」に移動
2. 「Add Domain」をクリック
3. `fly-by.design.yukyu.net` を入力
4. 以下のDNS設定情報が表示されます：

```
Type: CNAME
Name: fly-by.design
Value: cname.vercel-dns.com
```

#### DNS設定（yukyu.netドメイン）

DNSプロバイダー（例：Cloudflare、Route53など）で以下を追加：

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `fly-by.design` | `cname.vercel-dns.com` | Auto |

**注意**: サブドメイン `design.yukyu.net` が既に別の用途で使用されている場合、代わりに以下も検討できます：
- `fly-by.yukyu.net`
- `design-fly-by.yukyu.net`

### 3. SSL証明書の自動発行

Vercelは自動的にLet's Encryptを使用してSSL証明書を発行します。DNS設定が正しく行われていれば、数分以内にHTTPSが有効になります。

### 4. 動作確認

以下のURLで動作を確認：

- **メインサイト**: https://fly-by.design.yukyu.net/
- **ドキュメント**: https://fly-by.design.yukyu.net/fly-by-full.md
- **コンポーネントレジストリ**: https://fly-by.design.yukyu.net/r/fb-button.json

## 環境変数（必要な場合）

現時点では環境変数は不要ですが、将来的に必要になった場合：

1. Vercelプロジェクトの「Settings」→「Environment Variables」
2. 必要な環境変数を追加

## 自動デプロイ

Vercelは以下のブランチで自動デプロイを実行します：

- **Production**: `main` ブランチへのpushで本番環境にデプロイ
- **Preview**: Pull Requestごとにプレビュー環境を自動生成

## トラブルシューティング

### ドメインが反映されない

1. DNS設定が正しいか確認
2. DNS伝播を待つ（最大48時間、通常は数分〜数時間）
3. `dig fly-by.design.yukyu.net` または `nslookup fly-by.design.yukyu.net` で確認

### ビルドエラー

1. ローカルで `npm run build` が成功することを確認
2. Vercelのビルドログを確認
3. 必要に応じて `vercel.json` の設定を調整

### SSL証明書エラー

1. DNS設定が正しいか再確認
2. Vercel Dashboardで「Renew Certificate」を試行
3. 数分待ってから再度アクセス

## コマンドリファレンス

### ローカル開発

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start
```

### Vercel CLI（オプション）

```bash
# Vercel CLIインストール
npm i -g vercel

# ローカルでVercel環境をシミュレート
vercel dev

# デプロイ（手動）
vercel --prod
```

## まとめ

1. GitHubにpush
2. Vercelで自動デプロイ
3. DNS設定
4. HTTPSで公開完了

これでfly-byデザインシステムが `https://fly-by.design.yukyu.net/` で公開されます！
