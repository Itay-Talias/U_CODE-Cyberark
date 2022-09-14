# ex01

def my_enumerate(list, first_index=0):
    for i in range(0, len(list)):
        yield first_index+i, list[i]


for index, elem in my_enumerate([10, 20, 30, 40]):
    print(index, elem)
for index, elem in my_enumerate([10, 20, 30, 40], 10):
    print(index, elem)


# ex2

def my_accumulate(list):
    sum = 0
    for elem in list:
        sum += elem
        yield sum


for elem in my_accumulate([1, 2, 3, 4, 5]):
    print(elem)


# ex3

def get_prime_factors_generator(number):
    prime_factor = 2
    while number != 1:
        if (number % prime_factor == 0):
            yield prime_factor
            number /= prime_factor
        else:
            prime_factor += 1


for x in get_prime_factors_generator(147):
    print(x)


# ex4

def CircleIter(list, number):
    for i in range(0, number):
        yield list[i % len(list)]


for x in CircleIter([1, 2, 3], 4):
    print(x, end=" ")
    for y in CircleIter([5, 6], 3):
        print(y, end=" ")
    print()
