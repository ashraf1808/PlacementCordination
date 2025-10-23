from flask import Blueprint, request, jsonify
from .config import students_col, admins_col
import bcrypt, jwt, os


auth_bp = Blueprint('auth', __name__)

SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")

# Student Register
@auth_bp.route('/student/register', methods=['POST'])
def student_register():
    data = request.json
    hashed_pw = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
    student = {
        "name": data['name'],
        "email": data['email'],
        "password": hashed_pw,
        "contact": data.get('contact', ''),
        "resume": {},
        "applications": []
    }
    students_col.insert_one(student)
    return jsonify({"msg": "Student registered successfully"}), 201

# Student Login
@auth_bp.route('/student/login', methods=['POST'])
def student_login():
    data = request.json
    student = students_col.find_one({"email": data['email']})
    if student and bcrypt.checkpw(data['password'].encode('utf-8'), student['password']):
        token = jwt.encode({"email": student['email']}, SECRET_KEY, algorithm="HS256")
        return jsonify({"token": token})
    return jsonify({"msg": "Invalid credentials"}), 401

# Admin Register/Login would be similar using admins_col
