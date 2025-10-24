"""from flask import Blueprint, request, jsonify
from .config import mongo_db

student_bp = Blueprint("student_bp", __name__)
students = mongo_db["Student"]

@student_bp.route("/register", methods=["POST"])
def register_student():
    data = request.get_json()
    students.insert_one(data)
    return jsonify({"message": "Student registered successfully"})

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
"""



from werkzeug.security import generate_password_hash, check_password_hash


from flask import Blueprint, request, jsonify
from .config import sql_db
#from config import sql_db
from .sql_models import Student

student_bp = Blueprint("student_bp", __name__)

# ---------------------------
# Register Student
# ---------------------------
@student_bp.route("/register", methods=["POST"])
def register_student():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    # Check if student already exists
    existing = Student.query.filter_by(email=email).first()
    if existing:
        return jsonify({"error": "Email already registered"}), 400
    
    hashed_password = generate_password_hash(password)
    new_student = Student(name=name, email=email, password=hashed_password)

    sql_db.session.add(new_student)
    sql_db.session.commit()

    return jsonify({"message": "Student registered successfully"})

# ---------------------------
# Login Student
# ---------------------------
@student_bp.route("/login", methods=["POST"])
def login_student():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    student = Student.query.filter_by(email=email).first()
    if student and check_password_hash(student.password,password):
        return jsonify({"message": "Login successful", "name": student.name})
    else:
        return jsonify({"error": "Invalid credentials"}), 401
