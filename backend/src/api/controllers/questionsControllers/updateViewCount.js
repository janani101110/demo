const questions = require('../../models/questions/questions')

exports.incrementViewCount = async (req, res)=>{
    try {
        const { postId } = req.params;
        let { viewCount } = req.body;

        viewCount = parseInt(viewCount);
        viewCount++;
        
        const update = await questions.findByIdAndUpdate(postId, {viewCount});

        res.status(200).json("successfully incremented")
        
    } catch (error) {
        res.status(500).send({status:"error with update", error:error.message})
    }
}