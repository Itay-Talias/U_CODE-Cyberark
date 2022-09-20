from fastapi import FastAPI
import requests
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get('/')
def root():
    return FileResponse('./static/example.txt')


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{first_name}/{last_name}")
async def greet_user(first_name, last_name):
    return {"message": "Hi there {} {}".format(first_name, last_name)}


@app.get("/optionalParameters/")
async def query_params(name):
    return {"message": "Hi there {}".format(name)}


@app.get("/book/{name}")
async def get_book(name):
    res = requests.get(
        'https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
