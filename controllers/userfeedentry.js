const UserFeedEntry=require('../models/FeedEntry');

// @desc Register New FeedEntry
// @route POST /api/v1/FeedEntry
// @access Public
exports.Enroll= async(req,res,next) => {
    const userfeedentry= await UserFeedEntry.create(req.body);
    res.status(201).json({success:true, data: userfeedentry, msg:"Created new UserFeedEntry"});
}

exports.Enroll= async(req,res,next) => {
    const userfeedentry= await UserFeedEntry.create(req.body);
    res.status(201).json({success:true, data: userfeedentry, msg:"Retreiving UserFeedEntry"});
}
exports.getUsers= async (req,res,next) => {
    try {
        const users=await UserFeedEntry.find();
        res.status(200).json({success:true, data: users, msg:"Users Listed"});
    } catch (error) {
        res.status(400).json({success:false, msg:"User not found"});
    }
    
}