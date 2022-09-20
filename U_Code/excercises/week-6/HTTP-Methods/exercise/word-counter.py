from http import HTTPStatus
from fastapi import FastAPI, Request, Response
import uvicorn
import word_counter_data


app = FastAPI()


@app.get('/')
def root():
    return {"message": "Server is up and running"}


@app.get('/words')
def get_all_words():
    return word_counter_data.word_counter


@app.delete('/word/{word}')
def delete_word(word, response: Response):
    flag = word_counter_data.delete_word(word)
    if not flag:
        response.status_code = HTTPStatus.NOT_FOUND
        return "The word is not found"
    return "The word deleted"


@app.get('/word/{word}')
def get_word_count(word):
    return word_counter_data.get_count_of_word(word)


@app.post('/word', status_code=201)
async def update_word_count(request: Request):
    res = await request.json()
    word = res.get("word")
    count = word_counter_data.add_word(word)
    return {"text": f"Added {word}", "currentCount": count}


@app.post('/sentence', status_code=201)
async def update_word_count_sentence(request: Request):
    res = await request.json()
    sentence = res.get("sentence")
    num_old_words, num_new_words = word_counter_data.add_sentence(sentence)
    return {"text": f"Added {num_new_words} words, {num_old_words} already existed"}

if __name__ == "__main__":
    uvicorn.run("word-counter:app", host="0.0.0.0", port=8000, reload=True)
