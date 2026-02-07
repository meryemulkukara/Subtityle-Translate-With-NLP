"""
Example script to test the FastAPI backend endpoints
Run this from the backend directory: python test_api.py
"""

import requests

BASE_URL = "http://127.0.0.1:8000/api"


def test_health_check():
    """Test GET /api/health"""
    print("Testing GET /api/health...")
    response = requests.get(f"{BASE_URL}/health")
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")
    print("-" * 50)


def test_translate():
    """Test POST /api/translate"""
    print("Testing POST /api/translate...")
    response = requests.post(
        f"{BASE_URL}/translate",
        json={}  # Empty body for now
    )
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")
    print("-" * 50)


if __name__ == "__main__":
    try:
        test_health_check()
        test_translate()
    except requests.exceptions.ConnectionError:
        print("❌ Error: Could not connect to backend.")
        print("Make sure the server is running: uvicorn app.main:app --reload")
    except Exception as e:
        print(f"❌ Error: {e}")
