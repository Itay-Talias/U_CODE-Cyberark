
x = 10
y = x
print(id(x))
print(id(y))
print(id(10))
print(x, y)


a = [1, 2]
b = [1, 2]
print(a == b)  # True
print(a is b)  # False


s1 = "Kush"
s2 = "Kush"
print(s1 == s2)           # True
print(s1 is s2)           # True
print(id(s1), id(s2))     # same numbers

l1 = [1, 2]
l2 = [1, 2]
print(l1 == l2)           # True
print(l1 is l2)           # False
print(id(l1), id(l2))     # different numbers

list_ = [3, 4, "Bobby"]
list_str = str(list_)
print(list_str)
dict = {3: "kuku"}
dict_str = str(dict)
print(dict_str)

str_to_int = int("304")
print(str_to_int)

float_to_int = int(3.05)
print(float_to_int)

int_to_float = float(9)
print(int_to_float)


y = (1, 2, 3)
print(y, id(y))
y += (4,)    # changing the tuple
print(y, id(y))


a = "always the same"
b = "always the same"
print(id(a))
print(id(b))
