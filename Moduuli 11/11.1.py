class Julkaisu:
    def __init__(self, nimi):
        self.nimi = nimi


class Kirja(Julkaisu):
    def __init__(self, nimi, kirjailija, sivum):
        self.kirjailija = kirjailija
        self.sivum = sivum
        super().__init__(nimi)

    def tulosta_tiedot(self):
        print(f'Nimi: {self.nimi}\nKirjailija: {self.kirjailija}\nSivumäärä: {self.sivum}')

class Lehti(Julkaisu):
    def __init__(self, nimi, pt):
        self.pt = pt
        super().__init__(nimi)

    def tulosta_tiedot(self):
        print(f'Nimi: {self.nimi}\nPäätoimittaja: {self.pt}')

julkaisu1 = Lehti('Aku Ankka', 'Aki Hyyppä')
julkaisu2 = Kirja('Hytti n:o 6', 'Rosa Liksom', 200)
julkaisu1.tulosta_tiedot()
julkaisu2.tulosta_tiedot()