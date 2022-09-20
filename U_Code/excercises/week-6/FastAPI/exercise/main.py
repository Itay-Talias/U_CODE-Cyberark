from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn
import store

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get('/')
def root():
    return "Hello world"


@app.get("/sale")
def set_sale(admin):
    print(admin)
    if admin == "True":
        store.set_sale()
        return "The discount has started"
    else:
        return "You aren't admin"


@app.get('/buy/{item_name}')
def buy_item(item_name):
    current_quantity, flag = store.buy_item(item_name)
    if flag:
        return {"current_quantity": current_quantity}
    else:
        return current_quantity


@app.get('/{item_name}')
def get_price_of_item(item_name):
    price = store.get_price_of_item(item_name)
    return {"price": price}


@app.get('/sanity')
def check():
    return "Server is up and running smoothly"


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)
