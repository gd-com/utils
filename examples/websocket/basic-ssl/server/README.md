
## Generate certificate

openssl genrsa -out server-key.pem 4096
openssl req -new -key server-key.pem -out server-csr.pem
openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem

## Chrome testing

go to chrome://flags/#allow-insecure-localhost and enable allow-insecure-localhost

/!\ Don't forget to disabled it after !!!!!!

## Test Websocket

Go to https://websocketking.com/ enter wss://localhost:9090 en hit connect you should see 

- Connected to wss://localhost:9090
- Connecting to wss://localhost:9090

## Now you can launch Godot example :)