const question = require('../../models/questions/questions');

exports.getquestions= async (req, res)=>{

    try{
        const getQuestion = await question.find();

        if (!getQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }

        return res.status(201).json(getQuestion);

    }catch (err) {
        res.status(500).json({ error: 'Error fetching Question', error:err.message });

      }
}


exports.getAQuestion= async (req, res)=>{

    try{
        const { id } = req.params;

        const getQuestion = await question.findById(id);

        if (!getQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }

        return res.status(201).json(getQuestion);

    }catch (err) {
       
        res.status(500).json({ error: 'Question delete failed', error:err.message });

      }
}