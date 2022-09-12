from calendar import isleap, weekday

print(isleap(2010))
print(isleap(2020))

num_of_leap_year = 0
for year in range(2020, 2081):
    if (isleap(year)):
        num_of_leap_year += 1
print(num_of_leap_year)

print(weekday(2028, 3, 22))
