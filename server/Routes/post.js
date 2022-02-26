const express=require('express');
const router=express.Router();
const postController=require('../Controller/post')
router.put('/:id',postController.update);
router.delete('/:id',postController.deleteone);
router.get('/:id',postController.getone);
router.get('/',postController.get)

router.post('/',postController.post);

module.exports=router