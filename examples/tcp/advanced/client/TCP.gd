extends Node

var connection = null
var peerstream = null

func _ready():
		print("Start client TCP")
		# Connect
		connection = StreamPeerTCP.new()
		connection.connect_to_host("127.0.0.1", 9090)
		peerstream = PacketPeerStream.new()
		peerstream.set_stream_peer(connection)

func _process(delta):
		if connection.is_connected_to_host():
				if Input.is_action_just_released("ui_left"):
						var buffer = StreamPeerBuffer.new()
						buffer.put_u16(1001)
						buffer.put_string("COUCOU")
						peerstream.put_packet(buffer.get_data_array())

				if Input.is_action_just_released("ui_right"):
						var buffer = StreamPeerBuffer.new()
						buffer.put_u16(1002)
						peerstream.put_packet(buffer.get_data_array())
				
				if peerstream.get_available_packet_count() > 0 :
						var packet = peerstream.get_packet()
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
