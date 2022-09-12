def divide(x, y):
    try:
        print(f'{x}/{y} is {x / y}')
    except ZeroDivisionError as e:
        print(e.args)
    except TypeError as e:
        print(e.args)
    except ValueError as e:
        print(e.args)
