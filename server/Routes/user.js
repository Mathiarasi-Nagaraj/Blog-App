const user=require('../Controller/user');
const auth=require('../Controller/auth');
const express=require('express');
const router=express.Router()

router.get('/showAll',user.showAll)
router.get('/showOne/:id',user.showOne)
router.put('/update/:id',user.update)
router.delete('/deleteOne/:id',user.deleteOne)
router.put('/follow/:id',user.follow)
router.put('/unfollow/:id',user.unfollow)
router.post('/login',auth.login)
router.post('/register',auth.register)

module.exports=router;