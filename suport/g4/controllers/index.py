from flask import redirect, url_for

class Index:

    def index():
        return redirect(url_for('login'))