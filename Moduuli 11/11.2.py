from Moduuli10 import nimi

class Sähköauto(nimi.Auto):
    def __init__(self, rekisteritunnus, huippunopeus, kapasiteetti):
        self.rek = rekisteritunnus
        self.hnopeus = huippunopeus
        self.kap = kapasiteetti
        super().__init__(rekisteritunnus, huippunopeus)




class Polttomoottoriauto(nimi.Auto):
    def __init__(self, rekisteritunnus, huippunopeus, koko):
        self.rek = rekisteritunnus
        self.hnopeus = huippunopeus
        self.koko = koko
        super().__init__(rekisteritunnus, huippunopeus)


def main():
    sähköauto = Sähköauto('ABC-15', 180, 52.5)
    polttomoottoriauto = Polttomoottoriauto('ACD-123', 165, 32.3)
    sähköauto.kiihdyta(30)
    polttomoottoriauto.kiihdyta(79)
    sähköauto.kulje(3)
    polttomoottoriauto.kulje(3)
    print(sähköauto.matka)
    print(polttomoottoriauto.matka)




