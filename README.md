# chatpdf-app

<img width="634" alt="スクリーンショット 2023-12-01 13 53 51" src="https://github.com/keento0809/chatpdf-app/assets/65790344/ce2ab202-9055-400e-866a-2e3eede23743">

## 概要

読み込んだ PDF ファイルの内容に関して答えてくれる AI BOT アプリケーションです。

### 必要条件

このプロジェクトを実行する前に、以下のツールがインストールされていることを確認してください。

- Node.js
- npm

## 始め方

このプロジェクトをローカルで実行するには、以下の手順に従ってください。

### インストール

1. リポジトリをクローンします。

```
git clone https://github.com/keento0809/chatpdf-app.git
```

2. 必要なパッケージをインストールします。

### frontend

```
cd frontend
npm install
```

### backend

```
cd backend
npm install
```

### frontend の実行

frontend ディレクトリで以下のコマンドを実行し、フロントエンド側のアプリケーションを起動します。

```
npm run dev
```

### backend の実行

backend ディレクトリで以下のコマンドを実行し、サーバーを起動します。

```
npm run dev
```

## API KEY の追加

backend ディレクトリに`.env`ファイルを作成し、下記の通りに API KEY を追加してください。

```javascript
API_KEY = "お持ちのAPI KEYの値";
```
