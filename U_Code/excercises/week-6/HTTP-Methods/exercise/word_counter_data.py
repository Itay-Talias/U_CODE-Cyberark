word_counter = {"hello": 2}


def get_count_of_word(word):
    if word in word_counter:
        return {"count": word_counter[word]}
    else:
        return {"count": 0}


def add_word(word):
    if word in word_counter:
        word_counter[word] += 1
    else:
        word_counter[word] = 1
    return word_counter[word]


def add_sentence(sentence):
    num_old_words = 0
    words = sentence.split(" ")
    for word in words:
        word_count = add_word(word)
        if word_count != 1:
            num_old_words += 1
    return num_old_words, len(word_counter)-num_old_words


def delete_word(word):
    if word in word_counter:
        del word_counter[word]
        return True
    else:
        return False
