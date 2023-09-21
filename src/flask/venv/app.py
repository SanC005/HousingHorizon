import numpy as np
import pandas as pd
from flask import Flask,request,jsonify,render_template
from flask_restful import Resource, Api
import pickle
from locations import LocationsData
from flask_cors import CORS,cross_origin


model = pickle.load(open("HousingHorizon.pkl","rb"))
# app = Flask(__name__)


app = Flask(__name__)
api = Api(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

class HelloWorld(Resource):
    def get(self):
        return render_template("index.html")
        # return {'task': 'Hello world'}
    
    
class prediction(Resource):
    def get(self,features_input):
        # Default to 200 OK
        features_input = [x for x in request.form.values()]
        features = np.array(features_input)
        print(features)
        prediction = predict_price(features)
        print(prediction)
        return str(prediction)

api.add_resource(prediction,'/predict')

# class getData(Resource):
#     def get(self):
#         # Set the response code to 201
#         df = pd.read_csv()
#         res = df.to_json()
#         return res

class Todo3(Resource):
    def get(self):
        # Set the response code to 201 and return custom headers
        return {'task': 'Hello world'}, 201, {'Etag': 'some-opaque-string'}

api.add_resource(HelloWorld,
    '/hello')
def predict_price(features):  
    location,sqft,bath,bhk = features
    loc_index = np.where(LocationsData==location)[0]
    print(len(LocationsData))
    x = np.zeros(len(LocationsData))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1

    return model.predict([x])[0]

# @app.route("/")
# def Home():
#     return render_template("index.html")

# @app.route("/predict",methods=["POST","GET"])
# def predict():
#     # print("came here")
#     # if request.method == "POST":
#     #     lol = request.form.get("location") or "hryyyy"
#     #     print(lol)
#     #     print(request.form.keys())
#     features_input = [x for x in request.form.values()]
#     # for i in range(1,4):
#     #     features_input[i]=float(features_input[i])
#     # print(features_input)
#     features = np.array(features_input)
#     print(features)
#     prediction = predict_price(features)
#     print(prediction)

#     return render_template("index.html",prediction_text = "The predicted price is {:1f} Lakhs.".format(prediction))
# @app.route("/test", methods=["GET"])
# @cross_origin()
# def test():
#     return jsonify(3)

# @app.route("/predict",methods=["POST","GET"])
# @cross_origin()
# def predict():  
#     features_input = [x for x in request.form.values()]
#     features = np.array(features_input)
#     print(features)
#     prediction = predict_price(features)
#     print(prediction)

#     return { "prediction":prediction}




# api.add_resource(HelloWorld, '/')

if __name__=="__main__":
    app.run(debug=True)