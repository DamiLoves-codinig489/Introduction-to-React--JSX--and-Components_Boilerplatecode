export const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY || '';

// Groq API key — used in Lesson 5 for AI chat (not needed yet)
export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';

// AI models — used in Lesson 5
export const GROQ_MODELS = [
    'llama-3.1-8b-instant',
    'llama-3.3-70b-versatile',
    'gemma2-9b-it',
];