import express from 'express';

const router = express.Router();

//@route  GET api/auth
//@desc   Test route
//@access Publick
router.get('/auth', (req, res) => res.send('Auth route'));

export default router;
