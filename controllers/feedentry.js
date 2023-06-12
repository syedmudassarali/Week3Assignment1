const FeedEntry=require('../models/FeedEntry');

// @desc Register New FeedEntry
// @route POST /api/v1/FeedEntry
// @access Public
exports.Enroll= async(req,res,next) => {
    const feedentry= await FeedEntry.create(req.body);
    res.status(201).json({success:true, data: feedentry, msg:"Created new FeedEntry"});
}
