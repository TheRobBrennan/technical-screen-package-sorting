from fastapi import FastAPI
from datetime import datetime

app = FastAPI()

@app.get("/api/ping")
def ping():
    current_time = datetime.now()
    # Format the timestamp as you like, here it's in ISO format - "2024-02-20T15:23:53.783919"
    timestamp = current_time.isoformat()
    return {"message": "Pong.", "timestamp": timestamp}
