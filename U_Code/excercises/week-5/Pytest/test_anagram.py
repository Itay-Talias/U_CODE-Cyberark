from typing import Counter
import pytest


def anagram(str1, str2):
    counter_str1 = Counter(str1)
    counter_str2 = Counter(str2)
    is_anagram = True

    for ch in str1:
        if not ch in counter_str2 or counter_str1[ch] != counter_str2[ch]:
            is_anagram = False
    return is_anagram


@pytest.mark.parametrize("str1,str2", [("elbow", "below"), ("act", "act"), ("meteor", "remote")])
def test_is_anagram(str1, str2):
    assert anagram(str1, str2) == True, "Got error in anagram!"


@pytest.mark.parametrize("str1,str2", [("elbow", "blow"), ("act", "at"), ("meteor", "rmote")])
def test_is_not_anagram(str1, str2):
    assert anagram(str1, str2) == False, "Got error in anagram!"
