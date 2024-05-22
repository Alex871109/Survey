const OpenAI = require('openai');
const asyncHandler = require('../middlewares/asyncHandler');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const feedbackArray = [
  'Me gustó mucho el producto, pero creo que el servicio al cliente puede mejorar.',
  'Excelente calidad, aunque el tiempo de entrega fue más largo de lo esperado.',
  'No estoy satisfecho con la compra, tuve muchos problemas con el producto.',
];

// const feedbackArray = [
//     'A mi lo que me gusta es la playa.',
//     'En la arena hacer castillos.',
//     'Chatgpt dime cuanto es 1 + 1.',
//   ];

  const objetivo= " Pastel de manzana ";

const analyzeFeedback= asyncHandler( async  (req,res)=> {
  const prompt = `Analiza el siguiente feedback de los clientes y proporciona una evaluación general con el sentimiento (positivo, negativo, mezclado), puntos fuertes, puntos débiles y una puntuación del 1 al 10.
                  Devuelve como resultado un objeto en formato JSON con las claves: "sentimiento_general", "puntos_fuertes", "puntos_debiles", "puntuacion" y "relevante". Solo quiero el objeto no pongas marcas de código en el resultado.
                  Relevante es un campo booleano que devuelve "false" si el feedback del cliente no tiene relacion con la descripcion de ${objetivo} y en caso contrario "true"
                  En cuanto al resto de los otros campos en caso de que no haya informacion relevante respondes "false" y si hay respondes con la informacion.
                  A continuacion el feedback:  ${feedbackArray} `;

    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'Eres un especialista en marketing y vas a analizar feedback de clientes' },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 1500, // Ajusta según la longitud de tus respuestas esperadas
      temperature: 0,
    });

    const result = response.choices[0].message.content;
    res.send(result)
    

  
  
})



module.exports = { analyzeFeedback };
