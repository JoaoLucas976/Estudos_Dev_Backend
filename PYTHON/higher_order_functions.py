"""
    Higher Order Functions are functions that return functions as result.
    or functions that recieve functions as arguments.
    There are a few ways of implementing that, as shown bellow.
"""

# Examples of useful higher-order functions
# Map: Returns the results of a function to a list of inputs
def double_numbers(x):
    return 2*x

results = map(double_numbers, [1, 2, 3, 4, 5])
print(list(results))

# Filter: Returns the results of a function to a list of inputs, filtering the True results
results = filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5])
print(list(results))

# Using map 
def function1(x):
    return 2 * (x ** 2)

numbers = [1, 2, 3, 4, 5, 6]
results = map(function1, numbers) # Recieves a function as argument
print(list(results))

# Using lambda function
def function2(n):
    return lambda x: x * n # Returns a function

mult3 = function2(3)
results2 = mult3(2)
print(results2)

# Using def functions
def function3(name):
    print(f'Hello {name} !')

greeting = function3
greeting('João')

# Using filter
numbers = [1, 2, 3, 4, 5, 6]
pares = filter(lambda x: x % 2 == 0, numbers)
print(list(pares))