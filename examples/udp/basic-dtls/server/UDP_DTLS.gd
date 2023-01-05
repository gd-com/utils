extends Node

var dtls := DTLSServer.new()
var server := UDPServer.new()
var peers = []

func _ready():
	server.listen(9091)
	var key = load("res://certs/x509.key")
	var cert = load("res://certs/x509.crt")
	dtls.setup(key, cert)

func _process(_delta):
	while server.is_connection_available():
		var peer : PacketPeerUDP = server.take_connection()
		var dtls_peer : PacketPeerDTLS = dtls.take_connection(peer)
		if dtls_peer.get_status() != PacketPeerDTLS.STATUS_HANDSHAKING:
			continue # It is normal that 50% of the connections fails due to cookie exchange.
		print("Peer connected!")
		peers.append(dtls_peer)
	for p in peers:
		p.poll() # Must poll to update the state.
		if p.get_status() == PacketPeerDTLS.STATUS_CONNECTED:
			while p.get_available_packet_count() > 0:
				print("Received message from client: %s" % p.get_packet().get_string_from_utf8())
				p.put_packet("Hello DTLS client")
