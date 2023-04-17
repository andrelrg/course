from flask import Flask
from routes import routes

def create_app():
    app = Flask(__name__)    
    return app

app = create_app()

routes(app)