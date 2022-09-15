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
