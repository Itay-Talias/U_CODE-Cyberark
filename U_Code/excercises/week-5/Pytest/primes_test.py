import primes


def test_is_three_prime():
    assert primes.Primre.is_prime(
        3) == True, "assert if number 3 is prime number"


def test_nine():
    assert primes.Primre.is_prime(
        9) == False, "assert if number 9 is not prime number"


def test_ten():
    assert primes.Primre.is_prime(
        10) == False, "assert if number 10 is not prime number"


def test_five_six_seven():
    assert primes.Primre.are_prime_numbers(
        5, 6, 7) == False, "assert if number 5,6,7 are prime numbers"


def test_one():
    assert primes.Primre.is_prime(
        1) == False, "assert if number 1 is not prime number"
