def sum(num1, num2):
    return num1 + num2


def test_sum_success():
    assert sum(
        1, 1) == 2, "Test failed! Wrong total when adding regular number with zero"


def test_sum_failure():
    assert sum(
        1, 1) == 3, "Test failed! Wrong total when adding two regular numbers"
