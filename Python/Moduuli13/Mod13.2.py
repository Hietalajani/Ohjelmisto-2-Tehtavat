import json

from mysql import connector
import mysql
from flask import Flask, request

yhteys = mysql.connector.connect(
    host='localhost',
    port='3306',
    database='flight_game',
    user='root',
    password='0232',
    autocommit=True
)

app = Flask(__name__)


@app.route('/kentta/<icao>')
def kentta(icao):
    sql = f'select ident, name, municipality from airport where ident = "{icao}"'

    kursori = yhteys.cursor()
    kursori.execute(sql)
    tulos = kursori.fetchone()

    print(tulos)

    if kursori.rowcount > 0:
        jtulos = {
            'ICAO': tulos[0],
            'Name': tulos[1],
            'Municipality': tulos[2]
        }
    else:
        jtulos = {
            'status': 400,
            'teksti': 'Virheellinen syöte'
        }
    return jtulos


@app.errorhandler(404)
def page_not_found(virhekoodi):
    jtulos = {
        'status': '404',
        'teksti': 'Virheellinen päätepiste'
    }
    return jtulos


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)
