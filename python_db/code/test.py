import sqlite3

# This code below creates a 'data.db' or whatever you name it file in the pwd
connection = sqlite3.connect('data.db')

cursor = connection.cursor()

create_table = "CREATE TABLE users (id int, username text, password text)"
cursor.execute(create_table)

user = (1, 'ben', 'asdf')
# The '?' marks are used to represent the arguments.
insert_query = "INSERT INTO users VALUES (?,?,?)"
cursor.execute(insert_query, user)

users = [
    (2, 'bill', 'hjkl'),
    (3, 'jean', 'qwer')
]
cursor.executemany(insert_query, users)

select_query = "SELECT * FROM users"
for row in cursor.execute(select_query):
    print(row)

connection.commit()

connection.close()
