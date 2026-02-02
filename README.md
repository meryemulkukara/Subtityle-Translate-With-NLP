## Project Structure

- **backend**: Python FastAPI based API
- **frontend**: React + Vite + TailwindCSS + shadcn/ui (or Material UI) based UI

### Backend (FastAPI)

- **Technologies**
  - FastAPI
  - Uvicorn
  - Pydantic

- **Folder Structure**
  - `backend/app/main.py`: FastAPI entry point
  - `backend/app/api/routes.py`: API endpoints
  - `backend/app/models/`: Data models
  - `backend/app/core/config.py`: Global settings

### Frontend (React + Vite)

- **Technologies**
  - React
  - Vite
  - TypeScript
  - TailwindCSS
  - shadcn/ui (to be added later) or Material UI
  - Video.js

- **Folder Structure**
  - `frontend/src/main.tsx`: React entry point
  - `frontend/src/App.tsx`: Main application component
  - `frontend/src/components/video/VideoPlayer.tsx`: Video.js wrapper component
  - `frontend/src/components/ui/`: UI components (tooltip, popup, etc.)

### Setup (summary)

Backend:
- `cd backend`
- `python -m venv venv`
- `source venv/bin/activate` (Windows: `venv\Scripts\activate`)
- `pip install -r requirements.txt`
- `uvicorn app.main:app --reload`

Frontend:
- `cd frontend`
- `npm install`
- `npm run dev`

