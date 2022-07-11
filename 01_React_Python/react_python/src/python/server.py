# -*- coding: utf-8 -*-
from flask import Flask,request
from flask_cors import CORS
app = Flask(__name__)
CORS(
    app,
    supports_credentials=True
)

# URL分岐
@app.route('/')
def hello():
    # Request受付、クエリパラメータを受け取る
    req = request.args
    csv = req.get("csv")

    # 処理

    # 処理結果の返却
    return csv

## おまじない
if __name__ == "__main__":
    app.run(debug=True)