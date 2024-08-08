FROM python:3.9

WORKDIR /app

ENV FLASK_APP=app.py

ENV FLASK_ENV=development

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "app.py"]

# Build an image: sudo docker build -t api .
# Build run a container with change detect: sudo docker run -p 90:5000 -v $(pwd):/app api