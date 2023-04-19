# Nuxt3 ライフサイクルイベントのサンプル
<br>

## 起動について
yarnが入っているので、下記コマンドで起動可能です。

```
yarn dev
```

もしくは通常通りnpmコマンドでも起動できます。
```
npm run dev
```
<br>

## サンプルのディレクトリについて
```src/components/blocks```の中の```LifeCycle.vue```に記載しています。

それを```pages```の```index.vue```が呼び出す形になっています。

<br>

## その他
余談ですが```nuxt.config.ts```が```defineNuxtConfig```で```export```するとエラーを吐きます。
プロジェクト作成時からなので、バージョンアップで何か仕様が変わったっぽいですが、現状確認できていません。
```defineNuxtConfig```を削除しても動く様なので今は削除して対応しています。<br>
また、setupの書き方がscriptタグではなく、setup()として書いてあります（実験）
<br><br>
バージョン情報<br>
```
Nuxt3　3.4.1
```
