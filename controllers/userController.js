const Feedback = require('../models/feedbackModel');

exports.postFeedback = async (req, res) => {
    try {
        const { fullName, email, message } = req.body;
        if(!fullName || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const feedback = new Feedback({ fullName, email, message });
        await feedback.save();
        res.status(201).json({ message: "Feedback submitted successfully" });   
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
exports.getFeedback = async (req, res) => {
    try {
           const feedbacks = await Feedback.find().sort({ createdAt: -1 });
           res.status(200).json(feedbacks);  
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}