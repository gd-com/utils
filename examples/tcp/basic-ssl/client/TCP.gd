extends Node

const HOST: String = "127.0.0.1"
const PORT: int = 9090
const RECONNECT_TIMEOUT: float = 3.0

const Client = preload("res://networking.gd")
var _client: Client = Client.new()

var values = [
	true,false,
	1, -1, 500, -500,
	1.2, -1.2, 50.1, -50.1, 80.852078542,
	"test1", "test2", "test3"
]

func _ready() -> void:
	_client.connect("connected",Callable(self,"_handle_client_connected"))
	_client.connect("disconnected",Callable(self,"_handle_client_disconnected"))
	_client.connect("error",Callable(self,"_handle_client_error"))
	_client.connect("data",Callable(self,"_handle_client_data"))
	add_child(_client)
	_client.connect_to_host(HOST, PORT)

func _connect_after_timeout(timeout: float) -> void:
	await get_tree().create_timer(timeout).timeout # Delay for timeout
	_client.connect_to_host(HOST, PORT)

func _handle_client_connected() -> void:
	print("Client connected to server.")
	# send a first variant !
	var bufferToSend = StreamPeerBuffer.new()
	bufferToSend.put_var(values.pop_front())
	_client.send(bufferToSend.data_array)

func _handle_client_data(data: PackedByteArray) -> void:
	var buffer = StreamPeerBuffer.new()
	buffer.data_array = data
	
	print("Client data: ", buffer.get_var())

	if values.size() > 0 :
		var bufferToSend = StreamPeerBuffer.new()
		bufferToSend.put_var(values.pop_front())
		_client.send(bufferToSend.data_array)

func _handle_client_disconnected() -> void:
	print("Client disconnected from server.")
	_connect_after_timeout(RECONNECT_TIMEOUT) # Try to reconnect after 3 seconds

func _handle_client_error() -> void:
	print("Client error.")
	_connect_after_timeout(RECONNECT_TIMEOUT) # Try to reconnect after 3 seconds
