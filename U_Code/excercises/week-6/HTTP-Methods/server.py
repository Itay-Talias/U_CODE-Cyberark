from fastapi import FastAPI, Request
import uvicorn


app = FastAPI()

wonders = [
    {
        "ID": 1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]


# @app.put("/wonders/{id}")
# async def wonders(id, name=Body(...), location=Body(...)):
#     print(id)
#     print(f"name: ${name}, location ${location}")
#     return "done"


@app.post('/wonders', status_code=201)
async def create_wonder(request: Request):
    res = await request.json()
    wonders.append({"ID": len(wonders)+1, "name": res.get(
        "name"), "location": res.get("location")})
    print(wonders)
    return "Created"


@app.get('/wonders/{id}')
def get_wonders(id):
    for wonder in wonders:
        if (wonder["ID"] == int(id)):
            return wonder["name"]
    return wonders


@app.get('/')
def root():
    return {"message": "Server is up and running"}


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
