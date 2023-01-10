FROM ubuntu:16.04

RUN apt-get update --fix-missing -y

RUN apt-get install -y wget
RUN apt-get install -y ruby-full
RUN gem install bundler

RUN apt-get install -y curl

RUN wget https://github.com/gohugoio/hugo/releases/download/v0.101.0/hugo_0.101.0_Linux-64bit.tar.gz
RUN mv hugo_0.101.0_Linux-64bit.tar.gz /hugo.tar.gz && tar -zxf /hugo.tar.gz && rm /hugo.tar.gz && mv /hugo /usr/local/bin/hugo

RUN mkdir -p /app
WORKDIR /app

COPY Gemfile /app
RUN bundle

COPY . /app
CMD ["hugo", "server", "-p", "2323", "--bind=0.0.0.0"]
