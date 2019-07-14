# quickjs-docker
QuickJS - A small JavaScript Engine written by Fabrice Bellard https://bellard.org/quickjs/

## Build Docker Image

```shell
$ docker build -t soleo/quickjs .
```

## Run examples

### Quick console.log test

```shell
$ docker run  --rm -v `pwd`:/mnt/src soleo/quickjs qjs examples/console-log/hello.js
```

### VueJS SPA

```shell
$ docker run  --rm -v `pwd`:/mnt/src soleo/quickjs qjs examples/vue-js-spa/app.js
```