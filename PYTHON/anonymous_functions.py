"""
    An anonymous function is a function that has no name
    In python, we declare it with the lambda keyword.
    To use an anonymous function you have to assign it to a variable.
    Ex:
    my_var = lambda x: x * 2
    print(my_var(2)) // 4
"""
# Assigning an anonymous function to x
x = lambda y: 5*y + 2
print(x(2))

# Defining a function that returns an anonymous function as result
def my_poweramplier(n):
    return lambda x: x ** n

quadrador = my_poweramplier(2)
cubador = my_poweramplier(3)

print(quadrador(2))
print(cubador(2))

# Using lambda to define key to sorted
dados = [('João', 23), ('Ana', 22), ('Paulo', 36), ('Pedro', 20)]
ordered_by_age = sorted(dados, key=lambda x: x[1])
print(ordered_by_age)

# Declaring and using lambda functions in sequence
print((lambda x,y: x*y)(2,3))