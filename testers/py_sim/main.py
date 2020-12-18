# write to api
import socket


host = '127.0.0.1'
port = 9091
buffer_size = 1024
msg = "READ"

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((host,port))
s.send(msg.encode())
data = s.recv(buffer_size)
s.close()

print("data: %s" % (data))