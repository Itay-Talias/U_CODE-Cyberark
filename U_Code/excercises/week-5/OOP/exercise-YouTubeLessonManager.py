import re


class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}
        self.URL = "https://www.youtube.com/watch?v="

    def save(self, name, url):
        self.lessons[self.get_generic_key(name)] = [url[url.find('?v=')+3:], 0]

    def get(self, lesson_name):
        generic_key = self.get_generic_key(lesson_name)
        lesson_url_arr = []

        for lessons_key in self.lessons:
            if generic_key in lessons_key:
                self.lessons[lessons_key][1] += 1
                lesson_url_arr.append(self.URL+self.lessons[lessons_key][0])
        return lesson_url_arr

    def get_generic_key(self, key):
        return re.sub(r'[^\w\s]', ' ', key).upper()

    def get_counts(self, lesson_name):
        generic_key = self.get_generic_key(lesson_name)
        if generic_key in self.lessons:
            return self.lessons[generic_key]
        else:
            return "The key is not in a dict"


lesson_manager = YouTubeLessonManager()
lesson_manager.save(
    "For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
lesson_manager.save(
    "while-loops", "https://www.youtube.com/watch?v=6TEGxJXLAWQ")
lesson_manager.save(
    "Dictionaries", "https://www.youtube.com/watch?v=daefaLgNkw0")
print(lesson_manager.get("loops"))
lesson_manager.get("For-Loops")
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries")
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries")
print(lesson_manager.get_counts('For-Loops'))  # outputs: 3
print(lesson_manager.get_counts('Dictionaries'))  # outputs: 2
