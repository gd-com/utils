extends Node

const HOST: String = "127.0.0.1"
const PORT: int = 9090
const RECONNECT_TIMEOUT: float = 3.0

const Client = preload("res://networking.gd")
var _client: Client = Client.new()

func _ready() -> void:
	_client.connect("connected",Callable(self,"_handle_client_connected"))
	_client.connect("disconnected",Callable(self,"_handle_client_disconnected"))
	_client.connect("error",Callable(self,"_handle_client_error"))
	_client.connect("data",Callable(self,"_handle_client_data"))
	add_child(_client)
	_client.connect_to_host(HOST, PORT)

func _process(delta):
	if Input.is_action_just_released("ui_left"):
		var buffer = StreamPeerBuffer.new()
		buffer.put_u16(1001)
		buffer.put_string("COUCOU")
		_client.send(buffer.get_data_array())

	if Input.is_action_just_released("ui_right"):
		var buffer = StreamPeerBuffer.new()
		buffer.put_u16(1002)
		_client.send(buffer.get_data_array())

func _connect_after_timeout(timeout: float) -> void:
	await get_tree().create_timer(timeout).timeout # Delay for timeout
	_client.connect_to_host(HOST, PORT)

func _handle_client_connected() -> void:
	print("Client connected to server.")

func _handle_client_data(data: PackedByteArray) -> void:
	var buffer = StreamPeerBuffer.new()
	buffer.data_array = data
	
	var type = buffer.get_u16()
	print('Recieve %s' % type)
	match type:
		1:
			var length = buffer.get_u32()
			print("My id is %s !" % buffer.get_string(length))
		1003:
			print("We recieve OK_GO_LEFT !")
		1004:
			print("We recieve OK_GO_RIGHT !")

func _handle_client_disconnected() -> void:
	print("Client disconnected from server.")
	_connect_after_timeout(RECONNECT_TIMEOUT) # Try to reconnect after 3 seconds

func _handle_client_error() -> void:
	print("Client error.")
	_connect_after_timeout(RECONNECT_TIMEOUT) # Try to reconnect after 3 seconds
