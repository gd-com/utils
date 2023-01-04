extends Node

var ws = null

func _ready():
	ws = WebSocketClient.new()
	ws.connect("connection_established", self, "_connection_established")
	ws.connect("connection_closed", self, "_connection_closed")
	ws.connect("connection_error", self, "_connection_error")
	
	var url = "ws://localhost:8080"
	print("Connecting to " + url)
	ws.connect_to_url(url)
	
func _connection_established(protocol):
	print("Connection Established With Protocol: ", protocol)
	
func _connection_closed():
	print("Connection Closed")

func _connection_error():
	print("Connection Error")
    
func _process(delta):
	if ws.get_connection_status() == ws.CONNECTION_CONNECTING || ws.get_connection_status() == ws.CONNECTION_CONNECTED:
		ws.poll()
	
	if ws.get_peer(1).is_connected_to_host():
		if Input.is_action_just_released("ui_left"):
				var buffer = StreamPeerBuffer.new()
				buffer.put_u16(1001)
				_sendPacket(buffer.get_data_array())

		if Input.is_action_just_released("ui_right"):
				var buffer = StreamPeerBuffer.new()
				buffer.put_u16(1002)
				buffer.put_string('an extra parameter')
				_sendPacket(buffer.get_data_array())
		
		if ws.get_peer(1).get_available_packet_count() > 0 :
			var packet = ws.get_peer(1).get_packet()
			var buffer = StreamPeerBuffer.new()
			buffer.set_data_array(packet)
			
			var type = buffer.get_u16()
			print('Recieve %s' % type)
			match type:
				1:
					print("My id is %s !" % buffer.get_string())
				1003:
					print("We recieve OK_GO_LEFT !")
				1004:
					print("We recieve OK_GO_RIGHT !")
					# extra data
					print("Recieve extra %s : " % buffer.get_string())
			
func _sendPacket(data):
	ws.get_peer(1).put_packet(data)