from werkzeug.security import safe_str_cmp
from user import User

# users = [
#     {
#         'id': 1,
#         'username': 'ben',
#         'password': 'asdf'
#     }
# ]

# OR
# users = [
#     User(1, 'ben', 'asdf')
# ]

# username_mapping = {'ben': {
#     'id': 1,
#     'username': 'ben',
#     'password': 'asdf'
# }
# }

# Or
# username_mapping = {u.username: u for u in users}

# userid_mapping = {1: {
#     'id': 1,
#     'username': 'ben',
#     'password': 'asdf'
# }
# }

# Or
# userid_mapping = {u.id: u for u in users}


def authenticate(username, password):
    # user = username_mapping.get(username, None)
    user = User.find_by_username(username)
    # if user and user.password == password:
    if user and safe_str_cmp(user.password, password):
        return user


def identity(payload):
    user_id = payload['identity']
    # return userid_mapping.get(user_id, None)
    return User.find_by_id(user_id)
