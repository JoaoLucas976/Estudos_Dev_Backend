# Decorator are functions that recives functions as arguments and implement new functionalities do them

# Método 1
def decorator1(func):
    def wrapper():
        print("Início da função")
        func()
        print("Fim da função")
    return wrapper

def funcao():
    for i in range(10):
        print(i + 1)

funcao_resultado = decorator1(funcao)
funcao_resultado()

# Método 2
def decorator2(func):
    def wrapper():
        print("Início da função")
        func()
        print("Fim da função")
    return wrapper

@decorator2
def funcao2():
    for i in range(10):
        print(i + 1)

funcao2()

# Using decorators in functions with arguments
import functools

def my_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print('Start')
        result = func(*args, **kwargs)
        print('End')
        return result
    return wrapper

def add5(x):
    return x + 5

# USEFUL DECORATOR EXAMPLES
# Function Repeater
def repeat(num_times):
    def decorator_repeat(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator_repeat

@repeat(num_times=3)
def greet(name):
    print(f"Hello {name}!")

greet('João')

# Execution time counter
import time
def tictoc(func):
    def wrapper():
        t1 = time.time()
        func()
        t2 = time.time()
        print(f"function {func.__name__} took {(t2 - t1)*1000:.4f} ms to execute")
    return wrapper

@tictoc
def count():
    for i in range(100):
        print(i + 1)

count()