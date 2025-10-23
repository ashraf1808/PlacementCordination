from flask import Flask
from flask_cors import CORS
#from routes.auth_route import auth_bp
from routes.student_route import student_bp
from routes.admin_route import admin_bp
app = Flask(__name__)
#CORS(app)  # enable CORS for React frontend
CORS(app, origins=["http://localhost:3000"], supports_credentials=True)
#app.register_blueprint(auth_bp, url_prefix='/api')
app.register_blueprint(student_bp, url_prefix="/api/student")
app.register_blueprint(admin_bp, url_prefix="/api/admin")

if __name__ == "__main__":
    app.run(debug=True)
