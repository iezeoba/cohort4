from flask import Flask, jsonify, request, render_template

app = Flask(__name__)
stores = [
    {
        'name': 'Princess Stores',
        'items': [
            {'name': 'item1',
             'price': 15.99}
        ]
    }
]

# for a server 'POST' - is used to receive data. It means the opposite for a browser
# for a server 'GET' - is used to send data back only. It means the opposite for a browser


@app.route('/')
def home():
    return render_template('index.html')
    # always make sure the templates folder is in the same directory as the python file


# POST /store data: {name:}
@app.route('/store', methods=['POST'])
def create_store():
    request_data = request.get_json()
    new_store = {
        'name': request_data['name'],
        'items': []
    }
    stores.append(new_store)
    return jsonify(new_store)

# GET /store/<name> data: {name :}


@app.route('/store/<string:name>')  # 'http://127.0.0.1:5000/store/some_name'
def get_store(name):
    for store in stores:
        if store['name'] == name:
            return jsonify(store)
        return jsonify({'message': 'store not found'})

# GET /store


@app.route('/store')
def get_stores():
    return jsonify({'stores': stores})

# POST /store/<name> data: {name :}


@app.route('/store/<string:name>/item', methods=['POST'])
def create_item_in_store(name):
    request_data = request.get_json()
    for store in stores:
        if store['name'] == name:
            new_item = {
                'name': request_data['name'],
                'price': request_data['price']
            }
            store['items'].append(new_item)
            return jsonify(new_item)
        return jsonify({'message': 'store not found'})

# GET /store/<name>/item data: {name :}


@app.route('/store/<string:name>/item')
def get_items_in_store(name):
    for store in stores:
        if store['name'] == name:
            return jsonify({'items': store['items']})
        return jsonify({'message': 'store not found'})


app.run(port=5000)
