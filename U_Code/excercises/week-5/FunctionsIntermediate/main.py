def add_to_list(value, nums=[]):
    nums.append(value)
    return nums


print(add_to_list(1))
print(add_to_list(2))
print(add_to_list(3))

# def add_to_list(value, nums=None):
#   nums = nums or []
#   nums.append(value)
#   return nums

################## args and kwargs ##################


def more_is_better(*args):
    print(args)


more_is_better(1, 2, 3, 4)


def print_bag(bananas=0, apples=0):
    print("bananas", bananas)
    print("apples", apples)


fruits = {"apples": 4, "bananas": 5}
print_bag(**fruits)


def print_suitcase(**suitcase):
    for item, ammount in suitcase.items():
        print(item, ammount)


items = {
    "shirts": 2,
    "shoes": 8,
    "watermelon": 100
}

print_suitcase(**items)


def all_arguments(num, *args, **kwargs):
    print("regular argument", num)
    print("args", args)
    print("kwargs", kwargs)


all_arguments(3, "arg1", "arg2", arg3=3, arg4=[1, 2])


################## Multiple Return Values ##################

def go_right(x, y):
    return x + 1, y


new_location = go_right(2, 2)  # (3, 2)

x, y = go_right(2, 2)  # x=3 y=2

################ The Function Object #######################


def hello(name="Margo"):
    """this is a greeting function"""
    print(f'Hello {name.capitalize()}!')


print("Documentation: ", hello.__doc__)
print("Name: ", hello.__name__)
print("Code at: ", hello.__code__)
print("defaults : ", hello.__defaults__)


def get_power_of(pow):
    def inner(number):
        return number**pow
    return inner


calc_power_of_2 = get_power_of(2)
calc_power_of_4 = get_power_of(4)
print(calc_power_of_2(5))    # 5^2 = 25
print(calc_power_of_2(7))    # 7^2 = 49
print(calc_power_of_4(2))    # 2^4 = 16
print(calc_power_of_4(3))    # 3^4 = 81


################ Nested Function #######################
def get_print():
    def my_print(msg):
        print(msg)

    return my_print


get_print()("hello")
print_func = get_print()
print(type(print_func))


def generate_add(x):
    def inner(y):
        return x + y

    return inner


add_1 = generate_add(1)
add_2 = generate_add(2)
print(add_1(5))  # 6
print(add_2(5))  # 7


def get_power_of(pow):
    def base(base):
        return base**pow
    return base


calc_power_of_2 = get_power_of(2)
calc_power_of_4 = get_power_of(4)
print(calc_power_of_2(5))    # 5^2 = 25
print(calc_power_of_2(7))    # 7^2 = 49
print(calc_power_of_4(2))    # 2^4 = 16
print(calc_power_of_4(3))    # 3^4 = 81


def outer_func():
    local_var = 11

    def inner_func():
        local_var = 21
        print("inner_func local_var = ", local_var)

    inner_func()
    print("outer_func local_var = ", local_var)


outer_func()


def outer_func():
    local_var = 11

    def inner_func():
        nonlocal local_var
        local_var = 21
        print("inner_func local_var = ", local_var)
    inner_func()
    print("outer_func local_var = ", local_var)


outer_func()


global_var = 10


def outer_func():
    local_var = 11

    def inner_func():
        global global_var
        global_var = 21
        print("inner_func global_var = ", global_var)
    inner_func()
    print("outer_func global_var = ", global_var)


outer_func()
print('outside global_var = ', global_var)


def setCounter(step):
    counter = 0

    def count():
        nonlocal counter
        counter += step
        print(counter)
    return count


increment = setCounter(2)
increment()
increment()
increment()
