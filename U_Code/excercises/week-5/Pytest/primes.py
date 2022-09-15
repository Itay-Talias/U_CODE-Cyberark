import math


class Primre:
    def is_prime(number):
        is_prime = True
        factor = int(math.sqrt(number))+1
        for i in range(2, factor):
            if (number % i == 0):
                is_prime = False
        if number==1:
            is_prime=False
        return is_prime

    def are_prime_numbers(*args):
        prime_numbers = True
        for i in args:
            if not Primre.is_prime(i):
                prime_numbers = False
        return prime_numbers



