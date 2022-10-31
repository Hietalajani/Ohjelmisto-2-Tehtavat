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


class Kilpailu:
    def __init__(self, nimi, km, autolista):
        self.nimi = nimi
        self.km = km
        self.autot = autolista

    def tunti_kuluu(self):
        for auto in self.autot:
            auto.kiihdyta(random.randint(-10, 15))
            auto.kulje(1)

    def tulosta_tilanne(self):
        table = []
        for auto in self.autot:
            lista = [auto.rekisteritunnus, auto.huippunopeus, auto.nopeus, auto.matka]
            table.append(lista)

        print(tabulate(table, headers=['Rekisteritunnus', 'Huippunopeus (km/h)', 'Nopeus (km/h)', 'Kuljettu matka (km)'],
                     tablefmt='rounded_outline'))

    def kilpailu_ohi(self):
        for auto in self.autot:
            if auto.matka >= self.km:
                return True
        return False

def main():
    autot = []
    for i in range(10):
        auto = Auto(f'ABC-{i + 1}', random.randint(100, 200))
        autot.append(auto)
    kilpailu = Kilpailu('Suuri romuralli', 8000, autot)

    i = 0
    while not kilpailu.kilpailu_ohi():
        kilpailu.tunti_kuluu()
        i += 1
        if i == 10:
            kilpailu.tulosta_tilanne()
    kilpailu.tulosta_tilanne()