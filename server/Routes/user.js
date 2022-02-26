const user=require('../Controller/user');
const auth=require('../Controller/auth');
const express=require('express');
const router=express.Router()

router.get('/:id',user.showOne)
router.put('/:id',user.update)
router.delete('/:id',user.deleteOne)

router.post('/login',auth.login)
router.post('/register',auth.register)

module.exports=router;