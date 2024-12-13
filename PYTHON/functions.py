def funcao1(x):
    if (x != 0):
        if (x == 1):
            return x
        else:
            return int(x/x)
    else:
        return 1

for i in range(10):
    print(funcao1(i))