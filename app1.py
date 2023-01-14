from flask import Flask, render_template, request
import cgi
import cgitb

cgitb.enable()
app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("page-testing2.html")

@app.route("/result", methods= ['POST'])
def result():
    name = request.form.get("name")
    # do something with the form data
    return (name)


if __name__ == '__main__':
    app.run(debug= True, port=80)



