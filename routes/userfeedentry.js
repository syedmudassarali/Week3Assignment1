const express=require('express');
const {Enroll,getUsers}=require('../controllers/userfeedentry');

const router=express.Router();
router
.route('/')
.post(Enroll);

router
.route('/')
.get(getUsers);


module.exports= router;