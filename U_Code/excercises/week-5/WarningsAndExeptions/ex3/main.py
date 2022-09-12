
try:
    age = int(input("How old are you? "))
    if (age <= 0):
        raise ValueError("The age must be positive")
except ValueError as exp:
    print(exp)
