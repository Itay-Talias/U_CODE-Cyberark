def get_list_element(my_list, index):
    print(my_list[index])


try:
    arr = [1, 2, 3]
    get_list_element(arr, 4)
except IndexError as exp:
    print("index error")
    print(exp.args[0])
