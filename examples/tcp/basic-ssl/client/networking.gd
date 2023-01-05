extends Node

signal connected
signal data
signal disconnected
signal error

var _status: int = 0
var _stream: StreamPeerTLS = StreamPeerTLS.new()
var _cert: X509Certificate = X509Certificate.new()
var CN = "localhost"

func _ready() -> void:
	_status = _stream.get_status()
	_cert.load('res://certs/x509.crt')

func _process(_delta: float) -> void:
	_stream.poll()
	var new_status: int = _stream.get_status()
	if new_status != _status:
		_status = new_status
		match _status:
			_stream.STATUS_DISCONNECTED:
				print("Disconnected from host.")
				emit_signal("disconnected")
			_stream.STATUS_HANDSHAKING:
				print("Performing SSL handshake with host.")
			_stream.STATUS_CONNECTED:
				print("Connected to host.")
				emit_signal("connected")
			_stream.STATUS_ERROR:
				print("Error with socket stream.")
				emit_signal("error")
			_stream.STATUS_ERROR_HOSTNAME_MISMATCH:
				print("Error with socket stream: Hostname mismatch.")
				emit_signal("error")

	if _status == _stream.STATUS_CONNECTED:
		var available_bytes: int = _stream.get_available_bytes()
		if available_bytes > 0:
			var data: Array = _stream.get_partial_data(available_bytes)
			# Check for read error.
			if data[0] != OK:
				print("Error getting data from stream: ", data[0])
				emit_signal("error")
			else:
				emit_signal("data", data[1])

func connect_to_host(host: String, port: int) -> void:
	print("Connecting to %s:%d" % [host, port])
	# Reset status so we can tell if it changes to error again.
	_status = _stream.STATUS_DISCONNECTED
	var tcp: StreamPeerTCP = StreamPeerTCP.new()
	var error: int = tcp.connect_to_host(host, port)
	if error != OK:
		print("Error connecting to host: ", error)
		emit_signal("error")
		return

	error = _stream.connect_to_stream(tcp, false, CN, _cert)
	if error != OK:
		print("Error upgrading connection to SSL: ", error)

func send(data: PackedByteArray) -> bool:
	if _status != _stream.STATUS_CONNECTED:
		print("Error: Stream is not currently connected.")
		return false
	var error: int = _stream.put_data(data)
	if error != OK:
		print("Error writing to stream: ", error)
		return false
	return true
