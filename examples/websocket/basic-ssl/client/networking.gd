extends Node

signal connected
signal data
signal disconnected
signal error

var _status: int = 0
var _ws: WebSocketClient = WebSocketClient.new()
var _cert: X509Certificate = X509Certificate.new()
var CN = "Certs Generator"

func _ready() -> void:
	_ws.set_verify_ssl_enabled(false)
	_ws.set_trusted_ssl_certificate(_cert)
	_status = _ws.get_connection_status()
	_cert.load('res://certs/x509.crt')

func _process(_delta: float) -> void:
	var new_status: int = _ws.get_connection_status()
	if new_status != _status:
		_status = new_status
		match _status:
			_ws.CONNECTION_DISCONNECTED:
				print("Disconnected from host.")
				emit_signal("disconnected")
			_ws.CONNECTION_CONNECTED:
				print("Connected to host.")
				emit_signal("connected")
			_ws.CONNECTION_CONNECTING:
				print("Connecting ...")
				
	if _status == _ws.CONNECTION_CONNECTED || _status == _ws.CONNECTION_CONNECTING:
		# Poll the stream to ensure connection is valid.
		_ws.poll()

	if _status == _ws.CONNECTION_CONNECTED:
		var available_packets: int = _ws.get_peer(1).get_available_packet_count()
		if available_packets > 0:
			var data: Array = _ws.get_peer(1).get_packet()
			emit_signal("data", data)

func connect_to_host(host: String, port: int) -> void:
	print("Connecting to %s:%d" % [host, port])
	# Reset status so we can tell if it changes to error again.
	_status = _ws.CONNECTION_DISCONNECTED
	var error: int = _ws.connect_to_url("wss://" + host + ":" + String(port))
	if error != OK:
		print("Error connecting to host: ", error)
		emit_signal("error")
		return

func send(data: PoolByteArray) -> bool:
	if _status != _ws.CONNECTION_CONNECTED:
		print("Error: Stream is not currently connected.")
		return false

	var error: int = _ws.get_peer(1).put_packet(data)
	if error != OK:
		print("Error writing to stream: ", error)
		return false
	return true
