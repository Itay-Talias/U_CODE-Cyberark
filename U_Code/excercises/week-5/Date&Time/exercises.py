# ex1
import datetime
print(datetime.datetime.today().strftime("%A ,%Y-%m-%d, %H.%M.%S.%f"))

# ex2
print(datetime.datetime.today().strftime("time: %H:%M:%S"))
print(datetime.datetime.today().strftime("current1: %d-%m-%Y, %H.%M.%S"))
print(datetime.datetime.today().strftime("current1: %m-%d-%Y, %H.%M.%S"))

# ex3
print(datetime.datetime.today().strftime("current year is: %Y"))
print(datetime.datetime.today().strftime("current day is: %A"))

# extension
birthday_user = input("Please enter your birthday in format DD-MM-YYYY: ")
birthday_datetime = datetime.datetime.strptime(birthday_user, "%d-%m-%Y")
print("Your age is " + str(datetime.datetime.today().year-birthday_datetime.year))
