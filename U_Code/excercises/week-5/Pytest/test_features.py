import pytest


# @pytest.mark.skip
def test_sum1():
    assert 1 + 2 == 3


def test_sum2():
    assert 1 + 2 == 4


# @pytest.mark.xfail
def test_sum3():
    assert 10 + 20 == 30


# @pytest.mark.low3
# @pytest.mark.santity
def test_sum4():
    assert 1 + 2 == 3


# @pytest.mark.low3
def test_sum5():
    assert 1 + 1 == 2


# @pytest.mark.low3
# @pytest.mark.santity
def test_sum6():
    assert 1 + 0 == 1


def test_sum7():
    assert 1 + 5 == 6
