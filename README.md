# shopify-vue-demo

A Vue.js demo for Shopify Admin app

## Requirements
* Vue.js
* [ngrok](https://ngrok.com/download)
* Shopify Partners account

## Run

Start ngrok with port 8080.

```
./ngrok http 8080
```

Copry the ngrok URL and add it in env.rb & the Shopify App settings, something link below:

```
https://78ce07c3.ngrok.io
```

Run the Vue.js app.

```
npm run serve
```

## Reference
* [Build a Shopify app with Node and Express](https://help.shopify.com/en/api/tutorials/build-a-shopify-app-with-node-and-express)
* [Build a Shopify app with Ruby and Sinatra - Shopify Developers](https://help.shopify.com/en/api/tutorials/build-a-shopify-app-with-ruby-and-sinatra)
