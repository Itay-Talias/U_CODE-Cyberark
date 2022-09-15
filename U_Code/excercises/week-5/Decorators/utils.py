from functools import wraps


def my_decorator(some_func):
    @wraps(some_func)
    def wrapper():
        print("1. before executing some_func()")
        some_func()  # here we execute the function
        print("2. after executing some_func()")
    return wrapper


def print_args(func):
    def inner(*args, **kwargs):
        print("args: ", end=" ")
        for x in args:
            print(x, end=" ")
        print()
        res = func(*args, **kwargs)
        print(res)
        return res
    return inner
