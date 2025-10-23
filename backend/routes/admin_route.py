from flask import Blueprint, request, jsonify
from config import db

student_bp = Blueprint("admin_bp", __name__)
students = db["Admin"]

@student_bp.route("/register", methods=["POST"])
def register_student():
    data = request.get_json()
    students.insert_one(data)
    return jsonify({"message": "Admin registered successfully"})

@student_bp.route("/login", methods=["POST"])
def login_student():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = students.find_one({"email": email, "password": password})
    if user:
        return jsonify({"message": "Login successful", "name": user["name"]})
    else:
        return jsonify({"error": "Invalid credentials"}), 401
