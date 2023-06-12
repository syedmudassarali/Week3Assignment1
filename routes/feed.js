const express=require('express');
const {Enroll}=require('../controllers/feed');

const router=express.Router();
router
.route('/')
.post(Enroll);

module.exports= router;