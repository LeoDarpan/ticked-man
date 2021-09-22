const express = require('express');
const router = express.Router();


const User = require('../model/user');
const auth = require('../middleware/auth');
const { response } = require('express');



router.post('/user', async (req, res) => {
    let query = req.query && req.query.params;
    // console.log('//////////////////query',query);
    // console.log('///////body',req.body && req.body.params);
    console.log(req.body || query);
    try {
    let user = new User(req.body);

    
        await user.save();
        //   sendWelcomeEmail(user.email,user.name);
        let token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (e) {
        console.log(e.message)
        res.status(400).send(e.message);
    }
});

router.post('/user/users', async (req, res) => {
    const loggedUsers = '';
    res.send(loggedUsers);
});

router.post('/user/login', async (req, res) => {
    try {
        let user = await User.findUserByCredentials(req.body.email, req.body.password);

        if (!user) {
            return res.status(404)
        }
        let token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/user/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save();

        res.send()
    } catch (e) {
        res.status(500).send();
    }

});

module.exports = router