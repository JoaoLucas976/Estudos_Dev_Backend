"""
    STRING METHODS:
    String methods are built-in methods that are heritated from the internal 'str' class.
"""

message = str('bom dia')
print(type(message)) # Mostrando o typo da variável message

# This method returns true if the whole string is in uppercase
result = message.isupper()
print(result)

# This method returns the string with case changed 
result = message.swapcase()
print(result)

# This method returns the string with the first letter in Uppercase
result = message.capitalize()
print(result)

# This method returns a version of the string suitable for caseless comparasions 
result = message.casefold()
print(result)

# This method returns 
message = str('boa tarde boa noite')
result = message.count('boa')
print(result)

# This method returns 
result = message.endswith('noite')
print(result)

# This method returns 
result = message.find('boa')
print(result)

# This method returns 
result = message.join(['-boa madrugada-', '-bom dia-'])
print(result)