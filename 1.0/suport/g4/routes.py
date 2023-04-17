from controllers.index import Index
from controllers.login import Login
from controllers.about import About

def routes(app):
    app.add_url_rule('/', 'index', Index.index)
    app.add_url_rule('/about', 'about', About.get)
    app.add_url_rule('/login', 'login', Login.get)
    app.add_url_rule('/login', 'sign_in', Login.sign_in, methods=['POST'])
