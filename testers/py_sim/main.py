# write to api
# import socket


# host = '127.0.0.1'
# port = 9091
# buffer_size = 1024
# msg = "READ"

# s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# s.connect((host,port))
# s.send(msg.encode())
# data = s.recv(buffer_size)
# s.close()

# print("data: %s" % (data))
import socket

host = '127.0.0.1'
port = 9091
buffer_size = 1024

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((host, port))
s.listen()

conn, addr = s.accept()

print('connection:')
print(addr)

while 1:
    data = conn.recv(buffer_size)

    if not data: break

    print(data)

    conn.send(data) # echo back to client

conn.close()