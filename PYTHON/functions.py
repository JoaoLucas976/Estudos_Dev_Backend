# Functions are structures that encapsules lines of code, making it easier to reuse it
# Functions can either or not recieve/return arguments

# Function that recieve and return arguments
def funcao1(x):
    if (x != 0):
        if (x == 1):
            return x
        else:
            return int(x/x)
    else:
        return 1

# Function that doesnt recieve or return arguments
def count():
    for i in range(10):
        print(i + 1)

# ARGS AND KWARGS

# Defining a decorator to analysis
def list_args(func):
    def wrapper(*args, **kwargs):
        func(*args, **kwargs)
        print('')
        print(f"The positional arguments are: {args}")
        print(f"The keyword args are: {kwargs}")
    return wrapper

# Functions have two main argument types: positional and keyword arguments
# Positional arguments are those passed to the function without the keyword, they are understand by the position the are given
# Keyword arguments are those passed to the function with the keyword, they are explicitellly nominated to the function

@list_args
def function2(x, y, z, lista):
    for item in lista:
        print(f'x = {x}, y = {y}, z = {z}, item = {item}')

function2(10, 20, z = 30, lista = [1, 2, 3])

# On the example above, we have 2 positional arguments (x, y)
# On the example above, we have 2 keyword arguments (z = 30, lista = [1, 2, 3])