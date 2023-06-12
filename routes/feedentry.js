const express=require('express');
const {Enroll}=require('../controllers/feedentry');

const router=express.Router();
router
.route('/')
.post(Enroll);



module.exports= router;