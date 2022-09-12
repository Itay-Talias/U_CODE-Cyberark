from doctest import Example
import numbers


numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
print(numbers[::2])
num = tuple([1, 2])
print(num)

# ex1
my_tuple = (1, "itay", 2, 1.2, True, "foo")

# ex2
print(my_tuple[:3])
print(my_tuple[:-4:-1])

# ex3

days = ("Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday")
print(days[:4]+days[-2:])

# ex4

numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(numbers[::-1])


# ex5

example1 = (1, 2, 3)
print(example1[:0:-1])
example2 = (2, 4, 6, 8, 10, 12)
print(example2[:0:-1])
example3 = (1, 2, 3)
print(example1[-2::-1])
example4 = (2, 4, 6, 8, 10, 12)
print(example2[-2::-1])
