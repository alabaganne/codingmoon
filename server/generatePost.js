const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-RPkDAfZwgBv5GEYzLAaMNhOV",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  const { message } = req.body;
  if (!message || message.trim().length === 0) {
    return res.send(422).send({
      message: "Invalid data",
    });
  }

  const chatGPTResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
  });

  res.send({
    data: chatGPTResponse,
  });
};
