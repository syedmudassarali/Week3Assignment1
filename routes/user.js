const express=require('express');
const {Enroll,getUsers, getUser,updateUser,deleteUser}=require('../controllers/user');

const router=express.Router();
router
.route('/')
.post(Enroll);

router
.route('/')
.get(getUsers);

router
.route('/:id')
.get(getUser);

router
.route('/:id')
.put(updateUser);

router
.route('/:id')
.delete(deleteUser);

module.exports= router;