# import an image with Python 
FROM python:3.8-slim

# Set working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy the sign language detection model into the container
COPY model /app/model

# Copy the source code into the container
COPY src /app/src

# Expose any necessary ports
EXPOSE 8080:80

# Command to run the sign language detection application
CMD ["python", "src/inference_classifier.py"]
