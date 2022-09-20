import requests

item_name = input("Please enter your item that you want to buy: ")
res = requests.get(
    f'http://localhost:8080/{item_name}')
price = res.json().get("price")
res = requests.get(
    f'http://localhost:8080/buy/{item_name}')
inventory = res.json().get("current_quantity")
print(
    f"Congratulations, you've just bought {item_name} for {price}. There are {inventory} left now in the store.")
