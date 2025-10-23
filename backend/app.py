from flask import Flask
from flask_cors import CORS
from routes.auth_route import auth_bp

app = Flask(__name__)
CORS(app)  # enable CORS for React frontend

app.register_blueprint(auth_bp, url_prefix='/api')

if __name__ == "__main__":
    app.run(debug=True)
