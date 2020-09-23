# dump-server

A simple HTTP server which dumps all incoming JSON requests into files. Works great with [ngrok](https://ngrok.com)!

## Usage

```sh
npm start

# and in another shell:

ngrok http --subdomain SUBDOMAIN 8080
```
