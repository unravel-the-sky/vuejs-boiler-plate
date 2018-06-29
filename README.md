# portal-with-vuejs

> THIS IS MY OWN BOILER PLATE FOR FUTURE PROJECTS. FUTURE ME, PLEASE DONT BE TOO HARSH ON MI.
It has the following features:
- Routing
- Login page
- axios for REST api calls 
    - currently using api-staging.attensi.com for example cases

- authentication enabled:
    - auth folder includes auth required stuff, inluding the REST calls (for this example)

- component based
    - layout: for main layout, mainpage, navbar, sidebar, etc
    - login: login related stuff
    - modals: currently only generic modal, but can be extended later on
    - product: template for a product, it also includes product modal as example

- store based
    - for storing, updating and getting data from the store


- build pipeline:
    - webpack FTW
    - ES6/7
    - babel with polyfills
    - build.sh and deploy.sh are for building & deploying on AWS, change names later on

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
