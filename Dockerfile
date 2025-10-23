# Use lightweight Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy all files into the container
COPY . .

# Run the Python script
CMD ["python", "app.py"]
