import random
from tabulate import tabulate

class Auto:
    def __init__(self, rekisteritunnus, huippunopeus):
        self.rekisteritunnus = rekisteritunnus
        self.huippunopeus = huippunopeus
        self.nopeus = 0
        self.matka = 0

    def kiihdyta(self, muutos):
        self.nopeus += muutos
        if self.nopeus > self.huippunopeus:
            self.nopeus = self.huippunopeus
        if self.nopeus < 0:
            self.nopeus = 0

    def kulje(self, tunnit):
        self.matka += abs(tunnit) * self.nopeus

    def kisa(self):
        self.kiihdyta(random.randint(-10, 15))
        self.kulje(1)


def main():
    autot = []
    for i in range(10):
        auto = Auto(f'ABC-{i+1}', random.randint(100, 200))
        autot.append(auto)

    pisin = 0
    while pisin < 10000:
        for auto in autot:
            auto.kisa()
            if auto.matka > pisin:
                pisin = auto.matka




    table = []

    for auto in autot:
        lista = [auto.rekisteritunnus, auto.huippunopeus, auto.nopeus, auto.matka]
        table.append(lista)

    print(tabulate(table, headers=['Rekisteritunnus', 'Huippunopeus (km/h)', 'Nopeus (km/h)', 'Kuljettu matka (km)'], tablefmt='rounded_outline'))

main()