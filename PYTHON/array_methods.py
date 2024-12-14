minha_lista = [5, 3, 1, 2, 4]

minha_lista.append(6)
print(minha_lista)

# This method returns the number of occurences of given number
result = minha_lista.count(1)
print(result)

# This method sorts the list, from smallest to largest
minha_lista.sort()
print(minha_lista)

# This method reverses the list, inverting the order of the elements
minha_lista.reverse()
print(minha_lista)

# This method removes an item from the list, if no argument is given, it removes que last one
minha_lista.pop()
print(minha_lista)

minha_lista.pop(2) # Removes the item of index 2 from the list
print(minha_lista)

# This method returns a copy of the elements in the array
minha_lista2 = minha_lista.copy()
print(minha_lista2)

# This method removes all elements from the list
minha_lista.clear()
print(minha_lista)