from flask import Flask, render_template

from refs import REFS

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", refs=REFS)


@app.route("/health")
def health():
    return "ok"


if __name__ == "__main__":
    app.run(debug=True)
