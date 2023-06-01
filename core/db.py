import mysql.connector

def connect_to_db():
    '''Return connection with "progetto_fiera" database'''

    global db 
    db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="progetto_fiera"
    )
    return db

def close_connection():
    '''Close connection to database'''

    db.close()

connect_to_db()