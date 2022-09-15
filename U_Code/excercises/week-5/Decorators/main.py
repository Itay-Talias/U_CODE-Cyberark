from utils import my_decorator, print_args


@my_decorator
def just_print():
    print("** some function that uses the decorator")


print(just_print.__name__)


@print_args
def add2(x, y):
    return x+y


@print_args
def add3(x, y, z):
    return x+y+z


@print_args
def add4(w, x, y, z):
    return w+x+y+z


add2(1, 2)
add3(1, 2, 3)
add4(1, 2, 3, 4)
