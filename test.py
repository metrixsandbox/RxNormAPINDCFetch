#openFDAAPI

import webbrowser
import json
import urllib.request
import sys

from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/')
def my_form():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def my_form_post():
    base_url = "https://rxnav.nlm.nih.gov/REST/"
    paras = "ndcstatus.json?ndc="
    user_input = request.form['variable']
    #return variable
    #user_input = "00904629161"
#def url():
    results = base_url + paras + user_input
    print(results)
    response = urllib.request.urlopen(results)
    data = json.loads(response.read())
    print(data["ndcStatus"]["conceptName"])
    print(my_form_post)

#webbrowser.open(url(), new=2)


