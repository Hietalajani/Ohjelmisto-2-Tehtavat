import json
import requests



paik = input('Anna paikkakunnan nimi: ')

API = 'aa58881d67d7b5251b15873ce3750c23'

try:
    geocode = requests.get(f'http://api.openweathermap.org/geo/1.0/direct?q={paik}&limit=5&appid={API}').json()
except requests.exceptions.RequestException as e:
    print('Hakua ei voitu suorittaa.')


lat = geocode[0]['lat']
lon = geocode[0]['lon']

weather = requests.get(f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API}').json()

print(f'Kaupungin {paik}\nSäätila: {weather["weather"][0]["main"]}\nLämpötila: {weather["main"]["temp"]-273.15:.2f} Celsius-astetta')