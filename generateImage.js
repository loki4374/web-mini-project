import fetch from 'node-fetch';

export default async function handler(req, res) {

    const { prompt } = req.body;

    const response = await fetch("https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev", {

        headers: {

            Authorization: `Bearer ${process.env.HUGGING_FACE_API_TOKEN}`,  // Securely use the token

            "Content-Type": "application/json",

        },

        method: "POST",

        body: JSON.stringify({ inputs: prompt }),

    });

    const imageBlob = await response.blob();

    const arrayBuffer = await imageBlob.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);

    // Send image back as base64

    res.status(200).json({

        image: buffer.toString('base64')

    });

}