import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 6);
const urlDatabase = new Map();

export const createURL = async (req, res) => {
  try {
    const { longUrl } = req.body;

    if (!longUrl || typeof longUrl !== "string") {
      return res.status(400).json({ message: "URL larga invalida o faltante" });
    }

    const shortCode = nanoid();
    urlDatabase.set(shortCode, longUrl);

    const shortUrl = `${req.protocol}://${req.get("host")}/${shortCode}`;

    return res.status(201).json({
      longUrl,
      shortCode,
      shortUrl,
      message: "URL acortada existosamente",
    });
  } catch (err) {
    console.error("Error en **createURL**:", err.message);

    return res.status(500).json({
      message: "Error de interno del servidor. No se pudo acortar la URL",
      errDetail: err.message,
    });
  }
};

export const redirectURL = (req, res) => {
  const { shortCode } = req.params;
  if (!shortCode) return res.status(404).json({ message: `URL no encontrado` });

  const longUrl = urlDatabase.get(shortCode);

  if (!longUrl) {
    return res.status(404).json({ message: "No existe esa URL corta." });
  }

  return res.redirect(301, longUrl);
};
