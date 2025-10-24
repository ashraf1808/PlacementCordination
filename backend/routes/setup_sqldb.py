import sys
import os
from sqlalchemy import text, inspect
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import app, sql_db   # import your Flask app and SQLAlchemy object
from sql_models import Student, Admin  # import your models
with app.app_context():
    with sql_db.engine.connect() as conn:   # create a connection
        result = conn.execute(text("SELECT current_database();"))
        print(result.fetchone())
    sql_db.create_all()   # create all tables
    print("✅ Database tables created successfully!")
    inspector = inspect(sql_db.engine)
    tables = inspector.get_table_names()
    print("Tables in database:", tables)


"""
# setup_sqldb.py
import sys
import os

# Add backend folder to path so Python can see config.py and app.py
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from config import sql_db
from app import app
from routes.sql_models import Student, Admin  # adjust if your models are inside routes/sql_models.py

# Create tables inside app context
with app.app_context():
    sql_db.create_all()
    print("All PostgreSQL tables created successfully!")
"""