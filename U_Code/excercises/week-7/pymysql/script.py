import pymysql


connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="jobs",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

# try:
#     with connection.cursor() as cursor:
#         query = "SELECT * FROM company"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         for company in result:
#             print(company["name"])
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = "SELECT * FROM noTable"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(type(result))
#         print(result)
# except:
#     print("DB Error")

try:
    with connection.cursor() as cursor:
        query = 'INSERT into company (name,industry, employees) values ("Wix", "hi tech", 4000)'
        cursor.execute(query)
        connection.commit()
except:
    print("Error")
