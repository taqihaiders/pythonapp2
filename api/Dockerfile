FROM python:3.11 AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 5000
CMD ["python3", "app.py"]