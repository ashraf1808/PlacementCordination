# sql_models.py
from .config import sql_db
from werkzeug.security import generate_password_hash, check_password_hash

class Admin(sql_db.Model):
    __tablename__ = "admins"
    __table_args__ = {'extend_existing': True}

    id = sql_db.Column(sql_db.Integer, primary_key=True)
    name = sql_db.Column(sql_db.String(100), nullable=False)
    email = sql_db.Column(sql_db.String(120), unique=True, nullable=False)
    password = sql_db.Column(sql_db.String(255), nullable=False)

    def __repr__(self):
        return f"<Admin {self.name}>"

    # Optional: helper methods for password hashing
    """def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)"""


# ---------------------------
# Student Model
# ---------------------------
class Student(sql_db.Model):
    __tablename__ = "students"
    __table_args__ = {'extend_existing': True}

    id = sql_db.Column(sql_db.Integer, primary_key=True)
    name = sql_db.Column(sql_db.String(100), nullable=False)
    email = sql_db.Column(sql_db.String(120), unique=True, nullable=False)
    password = sql_db.Column(sql_db.String(255), nullable=False)

    def __repr__(self):
        return f"<Student {self.name}>"

    # Password helpers
    """def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)"""
