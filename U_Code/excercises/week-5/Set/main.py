example_set = set("Hello")

print(example_set)

s1 = {1, 2, 5}
s2 = {2, 4, 1}
print(s1 - s2)  # {5}

s1 = {1, 2, 3, 4}
s2 = {9, 10, 11, 4}
s3 = {5, 6, 7, 8}

print(s1.isdisjoint(s2))
print(s1.isdisjoint(s3))
print(s2.isdisjoint(s3))

s1 = {'a', 'b', 'c', 'd'}
s2 = {'a', 'b', 'c'}
s3 = {'a', 'b', 'e'}
s4 = {'a', 'b', 'c', 'd'}
s5 = set()

print(s1.issuperset(s2))
print(s1.issuperset(s3))
print(s1.issuperset(s4))
print(s1.issuperset(s5))

fs = frozenset((1, 2, 3, 4))
print(fs)
print(type(fs))

fs = frozenset([1, 2, 3, 4])
print(fs)

set_ = {1, 2}
frozenset_ = frozenset((1, 3, 4))


dictionary = {}
dictionary[frozenset_] = 1  # valid
print(dictionary)
dictionary[set_] = 1  # throws Error
