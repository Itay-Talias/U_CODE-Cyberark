
import pymysql


# databaseServerIP = "localhost"  # IP address of the MySQL database serve
# databaseUserName = "root"       # User name of the database server
# databaseUserPassword = ""           # Password for the database user
# newDatabaseName = "grocery_store"  # Name of the database that is to be created
# charSet = "utf8"     # Character set
# cusrorType = pymysql.cursors.DictCursor

# connectionInstance = pymysql.connect(host=databaseServerIP, user=databaseUserName, password=databaseUserPassword,

#                                      charset=charSet, cursorclass=cusrorType)
# try:
#     cursorInsatnce = connectionInstance.cursor()
#     # SQL Statement to create a database
#     sqlStatement = "CREATE DATABASE "+newDatabaseName
#     cursorInsatnce.execute(sqlStatement)
#     databaseList = cursorInsatnce.fetchall()
# except Exception as e:
#     print("Exeception occured:{}".format(e))
# finally:
#     connectionInstance.close()

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

# try:
#     with connection.cursor() as cursor:
#         query = "CREATE TABLE category(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(32))"
#         cursor.execute(query)
#         query = "CREATE TABLE products(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(32), category INT,FOREIGN KEY(category) REFERENCES category(id) )"
#         cursor.execute(query)
#         result = cursor.fetchall()
# except Exception as e:
#     print("Exeception occured:{}".format(e))


try:
    with connection.cursor() as cursor:
        query = 'INSERT into category(id,name) values(1,"health");'
        cursor.execute(query)
        query = 'INSERT into category (id,name) values (2,"gym")'
        cursor.execute(query)
        query = 'INSERT into category (id,name) values (3,"food")'
        cursor.execute(query)
        query = 'INSERT into products (id,name,category) values (1,"A",1)'
        cursor.execute(query)
        query = 'INSERT into products (id,name,category) values (2,"B",2)'
        cursor.execute(query)
        query = 'INSERT into products (id,name,category) values (3,"C",3)'
        cursor.execute(query)
        connection.commit()
except Exception as e:
    print("Exeception occured:{}".format(e))
