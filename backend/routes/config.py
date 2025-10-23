from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()  # load .env file

MONGO_URI = os.getenv("MONGO_URI")  # Your Atlas connection string
client = MongoClient(MONGO_URI)
db = client['placementcord']

# Collections
students_col = db['Student']
admins_col = db['Admin']
jobs_col = db['jobs']
#applications_col = db['applications']
