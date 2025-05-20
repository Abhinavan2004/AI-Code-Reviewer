const generateContent = require('../services/ai.services');

module.exports.getResponse = async (req , res) =>{
    const prompt = req.query.prompt ;
    if(!prompt){
        return res.status(400).send("No Prompt Provided!! Please provide prompt.")
    }
    const response = await generateContent(prompt);

    res.send(response);
}