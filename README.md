# selelab/web
![CI](https://github.com/selelab/web/workflows/CI/badge.svg)

エレラボ公式サイトのソースコード

## 環境構築

### node.jsをインストールします。

#### Macの場合
  ```bash
  brew install node
  ```

#### Windowsの場合
  以下からダウンロードします。<br>
  https://nodejs.org/ja/download/

### yarnをインストールします。
  ```bash
  npm install -g yarn
  ```

### 依存関係を解決します。
  ```bash
  yarn install
  ```

### ローカル用のサーバーを立ち上げます。
  ```bash
  yarn start
  ```

  以下のように表示されたら成功です。指示の通りブラウザで `http://localhost:3000` へアクセスしましょう。
  ```
  Compiled successfully!

  You can now view selelab_web in the browser.

    Local:            http://localhost:3000
    On Your Network:  http://<your LAN address>:3000

  Note that the development build is not optimized.
  To create a production build, use yarn build.
  ```
