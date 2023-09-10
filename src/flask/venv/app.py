import numpy as np
from flask import Flask,request,jsonify,render_template
import pickle
from locations import LocationsData
from flask_cors import CORS, cross_origin

model = pickle.load(open("HousingHorizon.pkl","rb"))
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

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

@app.route("/")
def Home():
    return render_template("index.html")

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
@app.route("/test", methods=["GET"])
@cross_origin()
def test():
    return jsonify(3)

@app.route("/predict",methods=["POST","GET"])
@cross_origin()
def predict():
    # print("came here")
    # if request.method == "POST":
    #     lol = request.form.get("location") or "hryyyy"
    #     print(lol)
    #     print(request.form.keys())
    features_input = [x for x in request.form.values()]
    # for i in range(1,4):
    #     features_input[i]=float(features_input[i])
    # print(features_input)
    features = np.array(features_input)
    print(features)
    prediction = predict_price(features)
    print(prediction)

    return { "prediction":prediction}

if __name__=="__main__":
    app.run(debug=True)