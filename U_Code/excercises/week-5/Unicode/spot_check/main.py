print(chr(ord("M")))

print(ord(chr(22)))

print(chr(ord("4") + 3))

# for i in range(200, 1500):
#     print(chr(i))

print(r"This is a new\n dawn")


byte_string = b'ABC'
for x in byte_string:
    print(x)

print(b"ABC".hex())

for b in "ABC😂".encode("utf-8"):
    print(b)
