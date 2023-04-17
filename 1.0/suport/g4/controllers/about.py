from flask import render_template

class About():

    def get():
        return render_template('about.html')