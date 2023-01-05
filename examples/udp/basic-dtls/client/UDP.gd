extends Node

var connection = PacketPeerUDP.new()
var dtls = PacketPeerDTLS.new()

var _cert: X509Certificate = X509Certificate.new()

var test = null
var values = [
	true,false,
	1, -1, 500, -500,
	1.2, -1.2, 50.1, -50.1, 80.852078542,
	"test1", "test2", "test3"
]

func _ready():
	_cert.load('res://certs/x509.crt')
	print("Start client UDP")
	# Connect
	connection.connect_to_host("127.0.0.1", 9091)
	dtls.connect_to_peer(connection, true, "127.0.0.1", _cert)
	connection.put_var(null)

func _process(_delta):
	dtls.poll()
	
	if dtls.get_status() == PacketPeerDTLS.STATUS_CONNECTED:
		while dtls.get_available_packet_count() > 0:
			test = connection.get_var()
			print(test)
		if values.size() > 0 :
			connection.put_var(values.pop_front())
