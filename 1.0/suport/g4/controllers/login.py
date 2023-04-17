from flask import render_template, request
from models.user import User

class Login:

    def get():
        return render_template('login.html')
    
    def sign_in():
        username = request.form['username']
        password = request.form['password']

        userModel = User()
        
        try:
            user = userModel.get_credentials(username, password)
        except:
            return 'Any user found'

        
        return 'User ' + user['github'] + ' connected sucessfully'
