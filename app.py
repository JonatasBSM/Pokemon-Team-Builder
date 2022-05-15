from flask import Flask, redirect, render_template, request, session
import mysql.connector
from flask import jsonify, url_for
import creds




app = Flask(__name__)


con = mysql.connector.connect(host= creds.HOST, database= creds.DATABASE, user= creds.USER, password = creds.PASSWORD)

if con.is_connected():
    print(con.get_server_info())
    cursor = con.cursor(dictionary = True)
else:
    print("nao deu certo")

def fraquezaResistencia(pokemon):
    query = """Select name, type1, type2 from pokemon where name = %s"""
    cursor.execute(query, (pokemon,))
    pokeTypes = cursor.fetchall()
    return pokeTypes

@app.route("/", methods=["GET", "POST"])
def homepage():
    if request.method == "GET":
        cursor.execute("Select name from pokemon ORDER BY pokemon.name")
        pokemonList = cursor.fetchall()
        return render_template("index.html", pokemonList = pokemonList)

    else:
        print(request.form['name'])
        cursor.execute("Select name from pokemon ORDER BY pokemon.name")
        pokemonList = cursor.fetchall()
        pokeTypes = fraquezaResistencia(request.form['name'])[0]

        return jsonify(pokeTypes)



if __name__ == "__main__":
    app.run(debug=True)







