from database.sqlite import SQLite

class User():

    def __init__(self):
        self.db = SQLite()

    def get_credentials(self, username, password):
        query = "SELECT username, password, github FROM users WHERE username = ? AND password = ?"

        result = self.db.select(query, [username, password])

        if not result:
            raise 'user not found'
        
        return result[0]