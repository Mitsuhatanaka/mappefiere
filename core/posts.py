from db import db,close_connection
import json
from fastapi import FastAPI,Header
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
    
class create_dict(dict): 
  
    # __init__ function 
    def __init__(self): 
        self = dict() 
          
    # Function to add key:value 
    def add(self, key, value): 
        self[key] = value

## Query JSON all  ##

@app.get('/allstand')
def json_all_stand():
    '''Create JSON with all stand row'''

    cur = db.cursor()
    cur.execute("SELECT * FROM stand")
    all_stand = cur.fetchall()
    all_stand_dict = create_dict()
    for row in all_stand:
        all_stand_dict.add(row[0],({
            "n_stand":row[0],
            "name_stand":row[1],
            "category":row[2],
            "description":row[3],
            "n_pavilion":row[4],
            "website":row[5]}))
    
    
    all_stand_json = json.dumps(all_stand_dict,indent=4)
    
    return all_stand_dict

@app.get('/allpavilion')
def json_all_pavilion():
    '''Create JSON with all pavilion row'''

    cur = db.cursor()
    cur.execute("SELECT * FROM pavilion")
    all_pavilion = cur.fetchall()
    all_pavilion_dict = create_dict()
    for row in all_pavilion:
        all_pavilion_dict.add(row[0],({
            "n_pavilion":row[0],
            "name_conference":row[1],
        }))
    
    all_pavilion_json = json.dumps(all_pavilion_dict,indent=4)

    return all_pavilion_dict

@app.get('/allfiere')
def json_all_fiere():
    '''Create JSON with all fiere row'''

    cur = db.cursor()
    cur.execute("SELECT * FROM fiere")
    all_fiere = cur.fetchall()
    all_fiere_dict = create_dict()
    for row in all_fiere:
        all_fiere_dict.add(row[0],({
            "name_conference":row[0],
            "regione":row[1],
            "city":row[2],
            "address":row[3],
            "date":row[4],
            "website":row[5],
            "type":row[6],
            "map":row[7],
            "download_map":row[8],
            "id_conference":row[9],
        }))
    
    all_fiere_json = json.dumps(all_fiere_dict,indent=4)

    return all_fiere_dict

## Query JSON with filter ##

@app.get('/allstand/q={query_where}={query_id}')
def json_filter_stand(query_where:str,query_id:str):
    '''Create JSON with row selected by filter '''

    query_id.replace("%20"," ")
    query = "SELECT * FROM stand WHERE {}={}"
    cur = db.cursor()
    cur.execute(query.format(query_where,query_id))
    results = cur.fetchall()
    my_dict = create_dict()
    for row in results:
        my_dict.add(row[0],({
            "n_stand":row[0],
            "name_stand":row[1],
            "category":row[2],
            "description":row[3],
            "n_pavilion":row[4],
            "website":row[5]}))

    results_json = json.dumps(my_dict)

    return my_dict

@app.get('/allpavilion/q={query_where}={query_id}')
def json_filter_pavilion(query_where:str,query_id:str):
    '''Create JSON with row selected by filter '''

    query_id.replace("%20"," ")
    query = "SELECT * FROM pavilion WHERE {}={}"
    cur = db.cursor()
    cur.execute(query.format(query_where,query_id))
    result = cur.fetchall()
    my_dict = create_dict()
    for row in result:
        my_dict.add(row[0],({
            "n_pavilion":row[0],
            "name_conference":row[1],
        }))
    
    results_json = json.dumps(my_dict)

    return my_dict

@app.get('/allfiere/q={query_where}={query_id}')
def json_filter_fiere(query_where:str,query_id:str):
    '''Create JSON with row selected by filter '''

    query_id.replace("%20"," ")
    query = "SELECT * FROM `fiere` WHERE `{}`='{}'"
    cur = db.cursor()
    cur.execute(query.format(query_where,query_id))
    result = cur.fetchall()
    my_dict = create_dict()
    for row in result:
        my_dict.add(row[0],({
            "name_conference":row[0],
            "regione":row[1],
            "city":row[2],
            "address":row[3],
            "date":row[4],
            "website":row[5],
            "type":row[6],
            "map":row[7],
            "download_map":row[8],
        }))
    
    results_json = json.dumps(my_dict)

    return my_dict

@app.get('/allfiere/q=type={query_id}/{query_date}/{query_reg}/{query_city}')
def json_filter(query_id:str,query_date:str,query_reg:str,query_city:str):
    '''Create JSON with row selected by filter '''

    query_id.replace("%20"," ")
    query_reg.replace("%20"," ")
    query_city.replace("%20"," ")
    query = "SELECT * FROM `fiere` WHERE `type` = '{}' AND `date` = '{}' AND `regione` = '{}' AND `city` = '{}';"
    cur = db.cursor()
    cur.execute(query.format(query_id,query_date,query_reg,query_city))
    result = cur.fetchall()
    my_dict = create_dict()
    i=0
    for row in result:
        
        my_dict.add(i,({
            "name_conference":row[0],
            "regione":row[1],
            "city":row[2],
            "address":row[3],
            "date":row[4],
            "website":row[5],
            "type":row[6],
            "map":row[7],
            "download_map":row[8],
        })) 
    
        i=i+1
    
    results_json = json.dumps(my_dict)

    return my_dict


if __name__ == "__main__":
    uvicorn.run("posts:app",host="127.0.0.1",port=8000,reload=True)