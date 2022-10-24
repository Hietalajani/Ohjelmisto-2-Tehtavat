class Auto:
    def __init__(self, rekisteritunnus, huippunopeus):
        self.rekisteritunnus = rekisteritunnus
        self.huippunopeus = huippunopeus
        self.nopeus = 0
        self.matka = 0


auto1 = Auto('ABC-123', '142 km/h')
print(f'{auto1.rekisteritunnus}, {auto1.huippunopeus}, {auto1.nopeus}, {auto1.matka}')