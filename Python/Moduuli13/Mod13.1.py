from flask import Flask, request
import math


app = Flask(__name__)


@app.route('/prime')
def prime():
    args = request.args
    luku = int(args.get('luku'))
    print(luku)

    isprime = False
    if luku == 2 or luku == 3 or luku == 5 or luku == 7:
        isprime = True

    else:
        if luku % 2 != 0:
            for i in range(3, int(math.sqrt(luku))+1, 2):
                if luku % i == 0:
                    break
            else:
                isprime = True

    vastaus = {
        'number': luku,
        'isPrime': isprime
    }

    return vastaus


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)