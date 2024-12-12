from random import randint

def definir_raridade():
    numero = randint(1, 100)
    if numero <= 50:
        return "Comum"
    elif 50 < numero <= 80:
        return "Raro"
    elif 80 < numero <= 95:
        return "Épico"
    elif numero > 95:
        return "Lendário"

def definir_item(raridade):
    numero = randint(1, 4)
    if numero == 1:
        item = Equipamento("Espada", raridade)
    elif numero == 2:
        item = Equipamento("Escudo", raridade)
    elif numero == 3:
        item = Equipamento("Machado", raridade)
    elif numero == 4:
        item = Equipamento("Armadura", raridade)
    return item 

class Equipamento:
    def __init__(self, tipo, raridade):
        self.tipo = tipo
        self.raridade = raridade

class Animal:
    def __init__(self, nome, raca, idade):
        self.nome = nome
        self.raca = raca
        self.idade = idade
    
    def falar(self, som):
        print(som)

class Cachorro(Animal):
    def __init__(self, nome, raca, idade, pedigree):
        super().__init__(nome, raca, idade)
        self.pedigree = pedigree

    def cavar(self):
        if (randint(1, 100) > 80):
            raridade = definir_raridade()
            item = definir_item(raridade)
            print(f"Você encontrou: {item.tipo} {item.raridade}")
        else:
            print("Você não encontrou nada")
    

cachorro1 = Cachorro("Floquinho", "Yorkshire", 2, True)
for i in range(100):
    cachorro1.cavar()