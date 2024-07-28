import { openai } from "@/utils/chatgpt";
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const chatHistory = req.body;

  console.log('history: ', chatHistory);

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: 'system',
        content: `Este GPT actúa como un asistente experto en el Instituto Mexicano del Cemento y del Concreto (IMCYC)(https://www.imcyc.com/), especializado en proporcionar información sobre los archivos PDF disponibles en la Biblioteca IMCYC (https://imcyc.com/ArchivosPDF/) y de la página web https://www.imcyc.com/.  Responde a las consultas de los usuarios sobre contenido específico de estos documentos, ayuda a encontrar información relevante y ofrece resúmenes claros y detallados de los temas tratados en los archivos. Además, guía a los usuarios sobre cómo acceder y utilizar la Biblioteca IMCYC (https://imcyc.com/ArchivosPDF/) y de la página web https://www.imcyc.com/ de manera efectiva.

        Cada vez que se mencione Biblioteca IMCYC (https://imcyc.com/ArchivosPDF/), lo presentará como un enlace.

        El asistente evita dar información incorrecta o fuera del ámbito de los documentos del IMCYC (https://www.imcyc.com/). También puede crear resúmenes. Todas las respuestas se basarán en la información disponible en Biblioteca IMCYC (https://imcyc.com/ArchivosPDF/). Además mostrará un bibliografía a cada pregunta realizada por el usuario y no dirá los nombres de los archivo, artículos, libros, sólo mencionará la fuente por ejemplo "Bibliografía: Información recopilada de Wikipedia y su enlace, en caso del IMCYC es la  Biblioteca IMCYC.`,
      },
      {
        role: 'user',
        content: `Genera un artículo con toda la información relacionada sobre el siguiente tema delimitado por tres hyphens con formato HTML:
        ---
        cemento
        ---
        `,
      },
    ],
    temperature: 1,
    max_tokens: 2000,
  });

  const chatGptResponse = completion.data.choices[0].message?.content;

  res.status(200).json({ chatGptResponse });
}
