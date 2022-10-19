from sqlite3 import connect
from warnings import catch_warnings
import mysql.connector
from mysql.connector import Error

conect = mysql.connector.connect(host='localhost', database='fabipy',user='root', password='')

# so  is how created database in python with mysql   mycursor.execute("CREATE DATABASE fabipy")

mycursor=conect.cursor()

# so is how created table mycursor.execute("CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))") 


#_____________Insert______________________

def insert():
    """ 
    It´s way for insert many data................

    val= [('JAVI', '23 44'),('CAMILO ', '34 23'),('fabi', '123456'),   ('Ise', 'way'),
                    ('Mari', 'cll 56')]
    sql="INSERT INTO customers(name, address) VALUES(%s, %s)"
    mycursor.executemany(sql, val)"""      

    sql     = "INSERT INTO customers(name, address) VALUES (%s, %s)"
    val     = (str(input("write your name")), str(input("address")))
    mycursor.execute(sql,val)
    conect.commit()
    print(mycursor.rowcount, "insert successful")

def delete():
    #____________________Delete____________________
    
    mycursor.execute("DELETE  FROM customers WHERE address ='88'")
    conect.commit()
    print(mycursor.rowcount, "record(s) deleted")

def update():
    #_____________________UPDATE______________________

    data="UPDATE customers SET address = 'Bogota 123' WHERE address = '88'"
    conect.commit()
    print(mycursor.rowcount, "record(s) affected")

def commonconsult():
    # This a consult priority
    mycursor.execute("SELECT * FROM customers WHERE address ='way'")
    myresult=mycursor.fetchall()
    for h in myresult:
        print("this a result_",h)
        
    #this a other consult any
    mycursor.execute("SELECT * FROM customers")
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)
    
    # this is for delete table for ever == mycursor.execute("DROP TABLE customers")
opcion=True
while opcion:    
    opcion=int(input("type your option \n 1 -Insert  \n 2 -Delete \n 3 -Update \n 4 -Consult \n " ))

    if opcion == 1:
        insert()
    elif opcion ==2:
        delete()
    elif opcion==3:
        update()
    elif opcion==4:
        commonconsult()

    else:
        opcion= False
        



        
    

    
    
    
