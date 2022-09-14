
def my_gen():
    n = 1
    print('This is printed in the first call')
    yield n
    n += 1
    print('This is printed second')
    yield n
    n += 1
    print('This is printed at last')
    yield n


def reverse(iterable):
    length = len(iterable)
    for i in range(length - 1, -1, -1):
        yield iterable[i]    # For loop to print the reversed string


gen = (x for x in range(20))
print(next(gen))
print(next(gen))
print(type(gen))
