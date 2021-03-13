from flask import Flask
from flask import request

def create_app():
    app = Flask(__name__)
    return app

app = create_app()

@app.route('/')
def index():
    user = request.args.get('user')
    if user:
        return 'Hello ' + user
    
    return 'Hello stranger'

