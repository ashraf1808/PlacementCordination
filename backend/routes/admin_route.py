"""from flask import Blueprint, request, jsonify
from .config import mongo_db

admin_bp = Blueprint("admin_bp", __name__)
admins = mongo_db["Admin"]

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
"""


# admin_bp.py
from flask import Blueprint, request, jsonify
from .config import sql_db
#from config import sql_db
from .sql_models import Admin
from werkzeug.security import generate_password_hash, check_password_hash

admin_bp = Blueprint("admin_bp", __name__)

# ---------------------------
# Register Admin
# ---------------------------
@admin_bp.route("/register", methods=["POST"])
def register_admin():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    # Check if admin already exists
    existing = Admin.query.filter_by(email=email).first()
    if existing:
        return jsonify({"error": "Email already registered"}), 400

    hashed_password = generate_password_hash(password)  # Hash password
    new_admin = Admin(name=name, email=email, password=hashed_password)

    sql_db.session.add(new_admin)
    sql_db.session.commit()

    return jsonify({"message": "Admin registered successfully"})

# ---------------------------
# Login Admin
# ---------------------------
@admin_bp.route("/login", methods=["POST"])
def login_admin():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = Admin.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return jsonify({"message": "Login successful", "name": user.name})
    else:
        return jsonify({"error": "Invalid credentials"}), 401
