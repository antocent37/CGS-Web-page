from flask import Flask, render_template, request, url_for, redirect, flash
#import mysql.connector
#import mysql
# import panda as pd
# import statistics

# al iniciar el objeto, template_folder='nueva carpeta' podemos cambiar la carpeta por defecto
app = Flask(__name__)
app.secret_key = 'mysecretkey'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/layout')
def layout():
    return render_template("layout.html")

@app.route('/quienessomos')
def quienesomos():
    return render_template("quienessomos.html")

@app.route('/obras')
def obras():
    return render_template("obras.html")

@app.route('/contenido')
def contenido():
    return render_template("contenido.html")

@app.route('/contacto')
def contacto():
    return render_template("contacto.html")

@app.route('/presupuestador')
def presupuestador(precio):
    return render_template("presupuestador.html")

@app.route('/obrasdetalle')
def obrasdetalle():
    return render_template("obrasdetalle.html")

"""def dolar_a_peso(precio):
    pass
    return precio * cotizacion

    r = request.get("https://api.recursospython.com/dollar")
    cotizacion = statistics.mean(r.jason().values())
    excel = pd.read_excel("productos.xslx")
    excel["precio_en_pesos"] = excel["precio_en_dolares"].apply(dolar_a_peso)
    excel.to_excel("productos_en_pesos", index=false)
    
  
@app.route('/nuevo')
def nuevo():
    return render_template("index11.html")
"""
if __name__ == "__main__":
    app.run(debug=True, port = 8000)
    
