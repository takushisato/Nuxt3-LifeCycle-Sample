# Nuxt3 ライフサイクルイベントのサンプル

## 起動について
yarnが入っているので、下記コマンドで起動可能です。

```
yarn dev
```

もしくは通常通りnpmコマンドでも起動できます。
```
npm run dev
```

## サンプルのディレクトリについて
componentsの中のLifeCycle.vueに記載しています。

それをpagesのindex.vueが呼び出す形になっています。


## その他
余談ですが、nuxt.config.ts が defineNuxtConfig でexportするとエラーを吐きます。
プロジェクト作成時からなので、バージョンアップで何か仕様が変わったっぽいですが、現状確認できていません。
defineNuxtConfigを削除しても動く様なので今は削除して対応しています。

バージョン情報
Nuxt3　3.4.1
