

import warnings


def get_5common(line):
    words_dict = {}
    words_list = line.split(" ")

    for word in words_list:
        if word in words_dict:
            words_dict[word] += 1
        else:
            words_dict[word] = 1
    return sorted(words_dict.items(), key=lambda x: x[1], reverse=True)[:5]


line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
print(get_5common(line))
