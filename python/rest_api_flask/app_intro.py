from flask import Flask

# The uppercase 'Flask' is a class and it's being instantiated here below

app = Flask(__name__)


@app.route('/')     # 'http://www.google.com/'  ..... the '/' is the home endpoint of a website. other endpoints are written after the '/' eg 'http://www.google.com/maps'
def home():
    return 'Hello, World!'


app.run(port=5000)

# Notes:
# The '@' in @app.route above is a decorator. Read up on decorators
