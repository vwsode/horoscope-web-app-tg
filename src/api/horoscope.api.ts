import { ZodiacName } from "@/types/zodiac.types";

export const API_URI = "https://poker247tech.ru/";

type GetZodiacSignResponse = {
  horoscope: string;
  language: "original" | "translated";
  period: string;
  sign: ZodiacName;
};

export const getZodiacSign = async (
  sign: ZodiacName,
  language: string
): Promise<GetZodiacSignResponse | undefined> => {
  try {
    const response = await fetch(`${API_URI}get_horoscope/`, {
      method: "POST",
      body: JSON.stringify({
        sign,
        language: language === "ru" ? "original" : "translated",
        period: "today",
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw Error("HTTP Request failed.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
