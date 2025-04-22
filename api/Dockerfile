FROM python:3.11 AS builder
WORKDIR /app
COPY requirements.txt .
RUN python3 -m venv venv
RUN venv/bin/pip install -r requirements.txt
COPY . .
FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /app /app
COPY --from=builder /app/venv /app/venv
EXPOSE 5000
CMD ["./venv/bin/python3", "app.py"]
