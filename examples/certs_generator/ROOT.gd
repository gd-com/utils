extends Node

var CN = "Certs Generator"
var O = "GD-COM"
var C = "FR"
var not_before = "20201023000000"
var not_after =  "20251023000000"

func _ready():
	var dir = Directory.new()
	if not dir.dir_exists("res://certs"):
		dir.make_dir("res://certs")

func GenerateX509(name: String):
	var X509_cert_filename = name + ".crt"
	var X509_key_filename = name + ".key"
	var X509_cert_path = "res://certs/" + X509_cert_filename
	var X509_key_path = "res://certs/" + X509_key_filename
	
	var CNOC = "CN=" + CN + ",O=" + O + ",C=" + C
	var crypto = Crypto.new()
	var crypto_key = crypto.generate_rsa(4096)
	var X509_cert = crypto.generate_self_signed_certificate(
		crypto_key,
		CNOC,
		not_before,
		not_after
	)
	X509_cert.save(X509_cert_path)
	crypto_key.save(X509_key_path)


func _on_Button_pressed():
	GenerateX509($Panel/LineEdit.text)
