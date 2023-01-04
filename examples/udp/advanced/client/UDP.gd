extends Node

var connection = PacketPeerUDP.new()

var ADDRESS = '127.0.0.1'
var PORT_SERVER = 9091

func _ready():
	print("Start client UDP")
	# Connect
	connection.set_dest_address(ADDRESS, PORT_SERVER)

func _process(delta):
	if Input.is_action_just_released("ui_left"):
		var buffer = StreamPeerBuffer.new()
		buffer.put_u16(1001)
		connection.put_packet(buffer.get_data_array())

	if Input.is_action_just_released("ui_right"):
		var buffer = StreamPeerBuffer.new()
		buffer.put_u16(1002)
		print('pass')
		connection.put_packet(buffer.get_data_array())
		
	if connection.get_available_packet_count() > 0 :
		var packet = connection.get_packet()
		var buffer = StreamPeerBuffer.new()
		buffer.set_data_array(packet)
			
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
