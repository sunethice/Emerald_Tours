const apiKey = process.env.MIX_GOOGLE_TRANSLATE_API_KEY;

export const googleTranslate = require("google-translate")(apiKey);
