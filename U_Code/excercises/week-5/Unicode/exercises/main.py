# ex1
def to_upper(ch):
    if ord(ch) >= ord('a') and ord(ch) <= ord('z'):
        return chr(ord(ch)+ord('A')-ord('a'))
    return ch


def upper(words):
    new_str = list(words)
    for i in range(0, len(words)-1):
        new_str[i] = str(to_upper(words[i]))
    return ' '.join(new_str)


print(to_upper("d"))    # "D"
print(to_upper("Q"))    # "Q" (no change)
print(to_upper("!"))    # "!" (no change)
print(upper("I love Python!"))    # "I LOVE PYTHON!"

# ex2


def encode1(msg):
    code = [0]*(len(msg))
    for i in range(0, len(msg)):
        code[i] = str(ord(msg[i]))
    return ' '.join(code)


def decode(code):
    msg_arr = code.split(' ')
    number_arr = [int(numeric_string) for numeric_string in msg_arr]
    new_str = list(number_arr)
    for i in range(len(new_str)):
        new_str[i] = chr(new_str[i])
    return ''.join(new_str)


print(encode1("Hello"))
print(decode(encode1("Hello")))        # "Hello"

# ex3


def get_word_value(str):
    msg_arr = encode1(str).split()
    number_arr = [int(numeric_string)-(int(ord('a')-1))
                  for numeric_string in msg_arr]
    print(number_arr)
    sum = 0
    for i in range(len(number_arr)):
        sum += number_arr[i]
    return sum


print(get_word_value("day"))

# ex4


def encode(msg, n):
    msg_arr = encode1(msg).split()
    number_arr = [int(numeric_string)
                  for numeric_string in msg_arr]
    for i in range(len(number_arr)):
        if (number_arr[i]+n > int(ord('Z'))):
            number_arr[i] = int(ord('A'))-1+number_arr[i]+n-int(ord('Z'))
        else:
            number_arr[i] += n

    return ' '.join([chr(num) for num in number_arr])


print(encode("XYZ", 1))
