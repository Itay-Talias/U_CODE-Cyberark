

import warnings


def get_5common(line):
    words_dict = {}
    line_arr = line.split(" ")
    for word in line_arr:
        if word in words_dict:
            words_dict[word] += 1
        else:
            words_dict[word] = 1
    return sorted(words_dict.items(), key=lambda x: x[1], reverse=True)[:5]


line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
print(get_5common(line))

warnings.filterwarnings("always", r".*NO MORE", ImportWarning)
warnings.warn("This is ignored NO MORE", ImportWarning)
