const express=require('express');
const router=express.Router();
const postController=require('../Controller/postController')
router.put('/update/:id',postController.update);
router.delete('/delete/:id',postController.deleteone);
router.get('/:id',postController.get);