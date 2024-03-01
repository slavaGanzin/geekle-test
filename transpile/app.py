from fastapi import FastAPI, HTTPException  # Import FastAPI and HTTPException classes from the fastapi module
from fastapi.responses import PlainTextResponse  # Import PlainTextResponse class from fastapi.responses module
import uvicorn  # Import uvicorn module, an ASGI server implementation

app = FastAPI()  # Create an instance of the FastAPI class

@app.get("/hello", response_class=PlainTextResponse)  # Define a route handler for GET requests on the "/hello" path, specifying the response class as plain text
def read_hello(user: str):  # Define the function read_hello with a parameter 'user' of type string
    if not user:  # Check if the 'user' parameter is empty or not provided
        raise HTTPException(status_code=404, detail="User not found")  # If 'user' is not provided, raise an HTTPException with status code 404
    return f"Hello {user}"  # If 'user' is provided, return a greeting as a plain text response

if __name__ == "__main__":  # Check if the script is being run directly (not imported)
    uvicorn.run(app, host="0.0.0.0", port=3000)  # Run the app with uvicorn on host 0.0.0.0 and port 3000


