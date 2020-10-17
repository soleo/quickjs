FROM ubuntu:latest
LABEL maintainer="Xinjiang Shao <shaoxinjiang@gmail.com>"

ENV QUICKJS_VERSION="2020-09-06"
ENV QUICKJS_TAR="https://bellard.org/quickjs/quickjs-${QUICKJS_VERSION}.tar.xz"

VOLUME /mnt/src

ADD $QUICKJS_TAR .

RUN apt-get update && apt-get install -y build-essential libc6-dev libc6-dev-i386 bash

RUN tar Jxf quickjs-${QUICKJS_VERSION}.tar.xz && cd quickjs-${QUICKJS_VERSION} && make install

WORKDIR /mnt/src


