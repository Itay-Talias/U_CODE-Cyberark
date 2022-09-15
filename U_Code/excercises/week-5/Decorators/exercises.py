from ipaddress import summarize_address_range
from re import X
import time
from functools import wraps

# ex1


def timer_decorator(some_func):
    @wraps(some_func)
    def wrapper(*args):
        print("function runtime: ")
        start = time.time()
        some_func(*args)  # here we execute the function
        end = time.time()
        print(end-start)
        return end-start
    return wrapper


@timer_decorator
def sum_many(number):
    for _ in range(0, number):
        sum = 1


# sum_many(10000000)
# sum_many(50000000)


# ex2
def information_decorator(some_func):
    @wraps(some_func)
    def wrapper(num1, num2, *args, **kwargs):
        print("func name: "+str(some_func.__name__))
        print(f"args: {num1} {num2} {args}")
        print(f"kwarg: {kwargs}")
        res = some_func(num1, num2)  # here we execute the function
        print("return value: " + str(res))
        print("return type: " + str(type(res)))
        return res
    return wrapper


@information_decorator
def add(num1, num2):
    return num1+num2


add(1, 2, 3, text="hello")

# ex3


def slow_down_decorator(some_func):
    @wraps(some_func)
    def wrapper(num1, num2):
        start = time.time()
        while start+1 > time.time():
            a = 2
        res = some_func(num1, num2)  # here we execute the function
        return res
    return wrapper


@slow_down_decorator
def add1(num1, num2):
    return num1+num2


# print("start")
# print(add1(1, 2))
# print("end")


# ex4
def static_vars(**kwargs):
    def counter_call_decorator(some_func):
        def wrapper(num1, num2):
            res = some_func(num1, num2)  # here we execute the function
            print(f"the number of calls function is {kwargs['counter']}")
            kwargs["counter"] += 1
            return res
        return wrapper
    return counter_call_decorator


@static_vars(counter=1)
def add2(num1, num2):
    return num1+num2


add2(1, 2)
add2(3, 2)
add2(2, 2)

# ex5


def static_vars_fibonacci(**kwargs):
    def counter_call_decorator(func):
        def wrapper(index):
            if index in kwargs["dict"]:
                return kwargs["dict"][index]
            else:
                res = func(index)
                kwargs["dict"][index] = res
                return res
        return wrapper
    return counter_call_decorator


@static_vars_fibonacci(dict={})
def fibonacci(index):
    print("calculating: ", index)
    if index == 0 or index == 1:
        return index
    else:
        return fibonacci(index-1)+fibonacci(index-2)


print(fibonacci(2))
print(fibonacci(4))
