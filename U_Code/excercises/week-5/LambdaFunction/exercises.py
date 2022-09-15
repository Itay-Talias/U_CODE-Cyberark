import json
code = {
    "0": "A",
    "1": "E",
    "2": "O",
    "3": "U",
    "4": "G",
    "5": "R",
    "6": "T",
    "7": "U",
    "8": "Y"
}

encrypted_message = "82705145106"

print("".join(list(map(lambda number: code[number], encrypted_message))))


with open("pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)

pokemon_data = list(map(lambda pokemon: {
                    "id": pokemon["id"], "name": pokemon["name"], "type": pokemon["type"], "weight": pokemon["weight"], "height": pokemon["height"], "weaknesses": pokemon["weaknesses"]}, pokemon_data))

print(pokemon_data[0])

pokemon_name = list(map(lambda pokemon:
                    pokemon["name"], pokemon_data))

print(pokemon_name)

heavy_pokemon = list(
    filter(lambda pokemon: pokemon["weight"] > 100, pokemon_data))
print(len(heavy_pokemon))

weaknesses_water_pokemon = list(map(lambda pokemon: pokemon["name"],
                                    (filter(lambda pokemon: "Water" in pokemon["weaknesses"], pokemon_data))))
