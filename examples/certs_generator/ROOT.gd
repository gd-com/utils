extends Node

var CN = "localhost"
var O = "GD-COM"
var C = "FR"

func _ready():
	if not DirAccess.dir_exists_absolute("res://certs"):
		DirAccess.make_dir_absolute("res://certs")

func GenerateX509(name: String):
	var X509_cert_filename = name + ".crt"
	var X509_key_filename = name + ".key"
	var X509_cert_path = "res://certs/" + X509_cert_filename
	var X509_key_path = "res://certs/" + X509_key_filename
	
	var CNOC = "CN=" + CN + ",O=" + O + ",C=" + C
	var crypto = Crypto.new()
	var crypto_key = crypto.generate_rsa(4096)
	var X509_cert = crypto.generate_self_signed_certificate(crypto_key,CNOC)
	X509_cert.save(X509_cert_path)
	crypto_key.save(X509_key_path)


func _on_Button_pressed():
	GenerateX509($Panel/LineEdit.text)
