from flask import Blueprint, request, jsonify
from .config import db

admin_bp = Blueprint("admin_bp", __name__)
admins = db["Admin"]

@admin_bp.route("/register", methods=["POST"])
def register_admin():
    data = request.get_json()
    admins.insert_one(data)
    return jsonify({"message": "Admin registered successfully"})

@admin_bp.route("/login", methods=["POST"])
def login_admin():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = admins.find_one({"email": email, "password": password})
    if user:
        return jsonify({"message": "Login successful", "name": user["name"]})
    else:
        return jsonify({"error": user}), 401
