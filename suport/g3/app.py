from flask import Flask, request, render_template, redirect, url_for

from database.sqlite import SQLite

def create_app():
    app = Flask(__name__)    
    return app

app = create_app()

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    else:
        username = request.form['username']
        password = request.form['password']

        query = "SELECT username, password FROM users WHERE username = ? AND password = ?"
        sqlite = SQLite()
        test = sqlite.select(query, [username, password])

        if test and (test['username'] == test['password'] == password):
            return 'Sucesso'
        return 'Não'

@app.route('/about')
def about():
    return render_template('about.html')