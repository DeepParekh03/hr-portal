import cv2  
from deepface import DeepFace
from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
import os
import numpy as np
import keras
import keras.utils as image 
from face_verify import face
import numpy as np
import pytesseract
import matplotlib.pyplot as plt
import pandas as pd
from PIL import Image
import string
import re
from pancard import Tam
from flask_cors import CORS, cross_origin
# from flask_cors import CORS, cross_origin

pytesseract.pytesseract.tesseract_cmd = r"C:/Program Files/Tesseract-OCR/tesseract.exe"

UPLOAD_FOLDER = r'C:\Users\ARYAN\Desktop\Codeshastra\codeshahstra_hojayega\flask-backend\static\test\submitted'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg','.bmp'])
app = Flask(__name__)
CORS(app, origins='*', methods=['GET', 'POST', 'PUT'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# CORS(app, support_credentials=True)
@app.route('/aadharfaceverification', methods=['POST', 'GET'])
def home():
    if request.method == 'POST':
        # Getting image and checking for method
        img = request.files['image']
        if img:
            img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
            img.save(img_loc)
            test_image = './static/test/submitted/' + secure_filename(img.filename)
            y = cv2.imread(test_image)
            x = face(y)
            if x == True:
                y = 1
            else:
                y = 0
        return jsonify(y)
    return jsonify(y)


@app.route('/aadharocr', methods=['POST', 'GET'])
def home2():
    if request.method == 'POST':
        # Getting image and checking for method
        img = request.files['image']
        print(img)
        if img:
          img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
          img.save(img_loc)
          test_image = './static/submitted/' + secure_filename(img.filename)
          y = cv2.imread(test_image)
          img = cv2.imread(r"C:\Users\ARYAN\Desktop\loc\backend\static\submitted\front.jpg")
          crop_img = img[100:250,250:550] #enter image here
          gray = cv2.cvtColor(crop_img, cv2.COLOR_BGR2GRAY)
          th, threshed = cv2.threshold(gray, 127,255, cv2.THRESH_BINARY)
          text2 = pytesseract.image_to_string(threshed) 
          text2 = re.sub(r'[^\w\s]', '', text2) 
          list1 = text2.split()
          fname = list1[0]
          mname = list1[1]
          lname = list1[2]
          bdate = list1[(list1.index("BirthDOB") + 1)]
          gender = list1[(list1.index("BirthDOB") + 2)]
          bday = bdate[:2] + '/' + bdate[2:4]+ '/' + bdate[4:]
          query = {'firstname':fname,'middlename':mname,'lastname':lname,'bday':bday,'gender':gender}
        return jsonify(query)
    return jsonify(query)

@app.route('/fakepan', methods=['POST', 'GET'])
def home3():
    if request.method == 'POST':
        # Getting image and checking for method
        img = request.files['image']
        x=""
        if img:
            img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
            img.save(img_loc)
            test_image = './static/test/submitted/' + secure_filename(img.filename)
            y = cv2.imread(test_image)
            print(y)
            og = cv2.imread(r"C:\Users\ARYAN\Desktop\Codeshastra\codeshahstra_hojayega\flask-backend\static\test\pancardtest.jpeg")
            tampered_gray = cv2.cvtColor(y, cv2.COLOR_BGR2GRAY)
            original_gray = cv2.cvtColor(og, cv2.COLOR_BGR2GRAY)
            func = Tam()
            x = func.tampered1(tampered_gray,tampered_gray)  
        return jsonify(x)    
    return ""    
    


@app.route('/walkin', methods=['POST', 'GET'])
def home4():
    if request.method == 'POST':
        # Getting image and checking for method
        img = request.files['image']
        x=""
        if img:
            img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
            img.save(img_loc)
            test_image = './static/test/submitted/' + secure_filename(img.filename)
            y = cv2.imread(test_image)
            verification = ""
            directory = r'C:\Users\ARYAN\Desktop\Codeshastra\codeshahstra_hojayega\flask-backend\static\test\Faces'  
            for filename in os.listdir(directory):
                f = os.path.join(directory, filename)
                if os.path.isfile(f):
                    verification1 = DeepFace.verify(img1_path = f, img2_path = y,model_name = 'SFace' )
                    if verification1['verified'] == True:
                        verification = filename
                        break
                    # else:
                    #     verification = "Aryan Mehta"
            s = re.sub(r'\.jpg$', '', verification)
        
        return jsonify(s)
    return jsonify(s)

@app.route('/criminal', methods=['POST', 'GET'])
def home5():
    if request.method == 'POST':
        # Getting image and checking for method
        img = request.files['image']
        x=""
        if img:
            img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
            img.save(img_loc)
            test_image = './static/test/submitted/' + secure_filename(img.filename)
            y = cv2.imread(test_image)
            criminal = 0
            directory = r'C:\Users\ARYAN\Desktop\Codeshastra\codeshahstra_hojayega\flask-backend\static\test\mugshots'  
            for filename in os.listdir(directory):
                f = os.path.join(directory, filename)
                if os.path.isfile(f):
                    verification1 = DeepFace.verify(img1_path = f, img2_path = y,model_name = 'SFace' )
                    if verification1['verified'] == True:
                        criminal = 1
                        break
                    # else:
                    #     verification = "Aryan Mehta"
        
        return jsonify(criminal)
    return jsonify(criminal)

if __name__ == '__main__':
    app.run(debug=True)