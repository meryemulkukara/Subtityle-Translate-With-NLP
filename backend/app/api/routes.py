from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
async def health_check():
    return {"status": "ok"}


@router.post("/translate")
async def translate_subtitle():
    # TODO: NLP translation pipeline will be implemented here
    return {"message": "Subtitle translation endpoint - to be implemented"}

