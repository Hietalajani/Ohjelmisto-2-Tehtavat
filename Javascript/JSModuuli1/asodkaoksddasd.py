import math

number = int(input('Anna luku: '))

if number == 2 or number == 3 or number == 5 or number == 7:
    print(f'{number} is a prime number')

elif number % 2 != 0 and number > 7:
    for i in range(3, int(math.sqrt(number)+1), 2):
        if number % i == 0:
            print(f'{number} is not a prime number')
            break

    else:
        print(f'{number} is a prime number')
else:
    print(f'{number} is not a prime number')