const Feed=require('../models/Feed');

// @desc Register New Feed
// @route POST /api/v1/feed
// @access Public
exports.Enroll= async(req,res,next) => {
    const feed= await Feed.create(req.body);
    res.status(201).json({success:true, data: feed, msg:"Created new Feed"});
}
