const Category=require('../Controller/category')
const express=require('express');
const router=express.Router();
router.get('./',Category.get);
router.post('./',Category.post)

