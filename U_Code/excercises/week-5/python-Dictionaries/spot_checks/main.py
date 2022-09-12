closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

print(closet["shirts"]["white"])
print(closet["pants"]["shorts"]["flamingo-pink"])
closet["pants"]["jeans"]["organic"] = 7
closet["pants"]["jeans"]["denim"] -= 4

print(
    "top") if closet["pants"]["shorts"]["flamingo-pink"] > closet["shirts"]["flamingo-pink"] else print("bottom")

names = ["koko", "momo", "bobo"]


result = {"name" + str(i): v for i, v in enumerate(names)}
print(result)


def get_squares_dictionary(num):
    return {i: i**2 for i in range(1, num+1)}


print(get_squares_dictionary(5))
