from random import randint

x = randint(1, 20)

if (x == 1):
    print('Erro Crítico')
elif (1 < x <= 10):
    print('Sem dano')
elif (10 < x <= 19):
    print('Dano Normal')
else:
    print('Dano Crítico')