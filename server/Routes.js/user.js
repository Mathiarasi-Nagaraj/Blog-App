const userController=require('../Controller/userController');
const authController=require('../Controller/authController');
const express=require('express');
const router=express.Router()

router.get('/showAll',userController.showAll)
router.get('/showOne/:id',userController.showOne)
router.put('/update/:id',userController.update)
router.delete('/deleteOne/:id',userController.deleteOne)
router.put('/follow/:id',userController.follow)
router.put('/unfollow/:id',userController.unfollow)
router.post('/login',authController.login)
router.post('/register',authController.register)

module.exports=router;