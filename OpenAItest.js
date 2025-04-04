// require('dotenv').config();
// const openai = require('openai');

// openai.apiKey = process.env.OPENAI_API_KEY;

// (async () => {
//     const completion = await openai.createChatCompletion({
//         model: "gpt-4",
//         messages: [
//             { role: "system", content: "You are a helpful assistant." },
//             {
//                 role: "user",
//                 content: "Write a haiku about recursion in programming.",
//             },
//         ],
//     });

//     console.log(completion.data.choices[0].message.content);
// })();