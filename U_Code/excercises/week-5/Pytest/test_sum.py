def sum(num1, num2):
    return num1 + num2


# def test_sum_with_zero():
#     assert sum(
#         0, 1) == 2, "Test failed! Wrong total when adding regular number with zero"


# def test_sum_regular():
#     assert sum(
#         1, 2) == 3, "Test failed! Wrong total when adding two regular numbers"


def get_name():
    return "Shoobert"


def test_get_name1():
    assert get_name() == "Shoobert"


def test_get_name2():
    assert get_name() == "shoobert"
