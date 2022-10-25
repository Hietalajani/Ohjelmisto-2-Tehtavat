class Hissi:
    def __init__(self, alin, ylin):
        self.alinkerros = alin
        self.ylinkerros = ylin
        self.thkerros = 0

    def kerros_ylös(self):
        self.thkerros += 1
        print(f'Hissi on kerroksessa {self.thkerros}.')

    def kerros_alas(self):
        self.thkerros -= 1
        print(f'Hissi on kerroksessa {self.thkerros}.')


    def siirry_kerrokseen(self, kerros):
        if kerros > self.thkerros:
            for i in range(kerros - self.thkerros):
                if self.thkerros < self.ylinkerros:
                    self.kerros_ylös()
        elif kerros < self.thkerros:
            for i in range(self.thkerros - kerros):
                if self.thkerros > self.alinkerros:
                    self.kerros_alas()

class Talo:
    def __init__(self, alin, ylin, hissilkm):
        hissit = []
        for i in range(hissilkm):
            h = Hissi(alin, ylin)
            hissit.append(h)

        self.hissit = hissit


    def aja_hissiä(self, hissinumero, kerros):
        self.hissit[hissinumero].siirry_kerrokseen(kerros)



talo1 = Talo(0, 5, 3)
talo1.aja_hissiä(2, 6)


