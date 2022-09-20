store = [
    {"name": "table", "inventory": 3, "price": 800},
    {"name": "chair", "inventory": 16, "price": 120},
    {"name": "couch", "inventory": 1, "price": 1200},
    {"name": "picture frame", "inventory": 31, "price": 70}
]


def get_price_of_item(item_name):
    price = None
    for item in store:
        if (item.get("name") == item_name):
            price = item.get("price")
    return price


def buy_item(item_name):
    for item in store:
        if item.get("name") == item_name and item.get("inventory") != 0:
            item["inventory"] -= 1
            return item["inventory"], True
    return "The item is not in a store", False

def set_sale():
    for item in store:
        if item.get("inventory") > 10:
            item["price"] /=2