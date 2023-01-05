extends Node

signal connected
signal data
signal disconnected
signal error

var _status: int = WebSocketPeer.STATE_CONNECTING
var _stream: WebSocketPeer = WebSocketPeer.new()

func _ready() -> void:
	_status = _stream.get_ready_state()

func _process(_delta: float) -> void:
	_stream.poll()
	var new_status: int = _stream.get_ready_state()
	if new_status != _status:
		_status = new_status
		match _status:
			_stream.STATE_CLOSED:
				print("Disconnected from host.")
				emit_signal("disconnected")
			_stream.STATE_CONNECTING:
				print("Connecting to host.")
			_stream.STATE_OPEN:
				print("Connected to host.")
				emit_signal("connected")
			_stream.STATE_CLOSING:
				print("Closing with socket stream.")
				emit_signal("error")

	if _status == _stream.STATE_OPEN:
		var available_packet_count: int = _stream.get_available_packet_count()
		if available_packet_count > 0:
			emit_signal("data", _stream.get_packet())

func connect_to_host(host: String, port: int) -> void:
	var url = "ws://%s:%d" % [host, port]
	print("Connecting to %s" % [url])
	# Reset status so we can tell if it changes to error again.
	_status = _stream.STATE_CONNECTING
	if _stream.connect_to_url(url, false) != OK:
		print("Error connecting to host.")
		emit_signal("error")

func send(dataToSend) -> bool:
	if _status != _stream.STATE_OPEN:
		print("Error: Stream is not currently connected.")
		return false
	var errorCode: int = _stream.send(dataToSend)
	if errorCode != OK:
		print("Error writing to stream: ", errorCode)
		return false
	return true
