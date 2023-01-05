extends Node

signal connected
signal data
signal disconnected
signal error

var _status: int = 0
var _stream: StreamPeerTLS = StreamPeerTLS.new()
var _cert: X509Certificate = X509Certificate.new()

func _ready() -> void:
	_status = _stream.get_status()
	_cert.load('res://certs/x509.crt')

func _process(_delta: float) -> void:
	var new_status: int = _stream.get_status()
	if new_status == _stream.STATUS_CONNECTED || new_status == _stream.STATUS_HANDSHAKING:
		_stream.poll()
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
			var dataToSend: Array = _stream.get_partial_data(available_bytes)
			# Check for read error.
			if dataToSend[0] != OK:
				print("Error getting data from stream: ", dataToSend[0])
				emit_signal("error")
			else:
				emit_signal("data", dataToSend[1])

func connect_to_host(host: String, port: int) -> void:
	print("Connecting to %s:%d" % [host, port])
	# Reset status so we can tell if it changes to error again.
	_status = _stream.STATUS_DISCONNECTED
	var tcp: StreamPeerTCP = StreamPeerTCP.new()
	var errorCode: int = tcp.connect_to_host(host, port)
	if errorCode != OK:
		print("Error connecting to host: ", errorCode)
		emit_signal("error")
		return

	errorCode = _stream.connect_to_stream(tcp, true, host, _cert)
	if errorCode != OK:
		print("Error upgrading connection to SSL: ", errorCode)

func send(dataToSend) -> bool:
	if _status != _stream.STATUS_CONNECTED:
		print("Error: Stream is not currently connected.")
		return false
	var errorCode: int = _stream.put_data(dataToSend)
	if errorCode != OK:
		print("Error writing to stream: ", errorCode)
		return false
	return true
