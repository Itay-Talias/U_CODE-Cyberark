from pickle import TRUE


my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8, 9, 10]]


def is_all_uppercase(list):
    all_uppercase = True
    for word in list:
        if type(word) == type("string") and not word.isupper():
            all_uppercase = False
    return all_uppercase


def test_number():
    assert not 3 in my_list, "Should assert if number 3 is in my_list"
    assert 56 in my_list, "Should assert if number 56 is in my_list"


def test_str():
    assert "I" in my_list and "Love" in my_list and "Coding" in my_list, 'Should assert if "I", "Love" and "Coding" are in my_list'


def test_upper_str():
    assert is_all_uppercase(
        my_list) == False, "Should assert if all the strings in my_list are in upper case"

# def test_negative():
#   assert … # Should assert if number 6 is not in my_list - result should be true
