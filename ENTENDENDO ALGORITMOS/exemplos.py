from random import randint
from numpy import arange

# Algoritmo de Pesquisa Binária
def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1
    cont = 1

    while baixo <= alto:
        meio = int((baixo + alto)/2)
        chute = lista[meio]
        if chute == item:
            return print(f"Indice: {meio}, Valor: {lista[meio]}, Descoberto em {cont} tentativas")
        if chute > item:
            alto = meio - 1
            cont += 1
        else:
            baixo = meio + 1
            cont += 1
    return None

print(pesquisa_binaria(arange(1, 101), randint(1, 100)))

# Problema do Caixeiro viajante