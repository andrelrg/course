import unittest
from unittest.mock import MagicMock
from models.user import User
from app import app


class UserTest(unittest.TestCase):

    def test_get_credentials_success(self):
        with app.app_context():
            model = {'username': 'andre', 'password': 'senha', 'github': 'github'}
            user = User()
            user.db.select = MagicMock(return_value=[model])

            result = user.get_credentials('andre', 'senha')

            self.assertIsNotNone(result)
            self.assertEqual(result, model)
        
    def test_get_credentials_fail(self):
        with app.app_context():
            user = User()
            user.db.select = MagicMock(return_value=None)

            self.assertRaises(Exception, lambda: user.get_credentials('andre', 'senha'))

if __name__ == '__main__':
    unittest.main()