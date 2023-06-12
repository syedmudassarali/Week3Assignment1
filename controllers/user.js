const User=require('../models/User');

// @desc Register New User
// @route POST /api/v1/user/enroll
// @access Public
exports.Enroll= async(req,res,next) => {
    const user= await User.create(req.body);
    res.status(201).json({success:true, data: user, msg:"Created new User"});
}

// @desc List of all users
// @route GET /api/v1/user
// @access Public
exports.getUsers= async (req,res,next) => {
    try {
        const users=await User.find();
        res.status(200).json({success:true, data: users, msg:"Users Listed"});
    } catch (error) {
        res.status(400).json({success:false, msg:"User not found"});
    }
    
}

// @desc List single user
// @route GET /api/v1/user/:id
// @access Public
exports.getUser= async (req,res,next) => {
    try {
        const user=await User.findById(req.params.id);
        res.status(200).json({success:true, data: user, msg:"User Listed"});
    } catch (error) {
        res.status(400).json({success:false, msg:"User not found"});
    }
    
}


exports.updateUser= async (req,res,next) => {
    const user=await User.findByIdAndUpdate(req.params.id, req.body, {
        new :true,
        runValidators: true
    });
    if(!user){
        return res.status(400).json({success:false});
    }
    res.status(200).json({success:true, data:user});
}

exports.deleteUser= async (req,res,next) => {
    const user=await User.findByIdAndDelete(req.params.id, req.body, {
        new :true,
        runValidators: true
    });
    if(!user){
        return res.status(400).json({success:false});
    }
    res.status(200).json({success:true, data:user});
}