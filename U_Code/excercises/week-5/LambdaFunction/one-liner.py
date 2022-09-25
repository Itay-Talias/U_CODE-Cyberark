# ex1

def is_plindrom(str):
    return str == str[::-1]


print(is_plindrom("dood"))
print(is_plindrom("dodo"))

# ex2


def reverse_words(sentece):
    return ' '.join(map(lambda word: word[::-1], sentece.split(" ")))


print(reverse_words("hello world"))


# ex3

def swap_2_var(x, y):
    return y, x


print(swap_2_var(1, 2))

# ex4
