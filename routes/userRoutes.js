
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/userController");
const uploads = require('../libraries/uploads');

// Setting up a GET request for the "/" endpoint
router.get('/', (req, res) => {
    Controllers.getUsers(req, res);
})

// Setting up a GET request for the "/:id" endpoint
router.get('/:id', (req, res) => {
    Controllers.getUsersByID(req, res);
})

// Setting up a POST request for the "/create" endpoint
router.post('/create', (req, res) => {
    //Calling the validatePasswordOfUser function from the userController module, passing in the request body and response objects
    Controllers.validatePasswordOfUser(req, res);
});

// Setting up a POST request for the "/login" endpoint
router.post('/login', (req, res) => {// works
    // Calling the loginUser function from the userController module, passing in the request and response objects
    Controllers.loginUser(req, res);
});

// Setting up a POST request for the "/upload" endpoint
router.post('/upload', (req, res, next) => {
    console.log(next)
    // Calling the uploadTheFile function from the userController module, passing in the request and response objects
    uploads.uploadFile(req, res, next);
});

// Setting up a POST request for the "/upload" endpoint
router.post('/uploadmultiple', (req, res, next) => {
    console.log(next)
    // Calling the uploadTheFile function from the userController module, passing in the request and response objects
    uploads.uploadFiles(req, res, next);
});

// app.post('/profile', upload.single('avatar'), function (req, res, next) {}

// Setting up a PUT request for the "/:id" endpoint
router.put('/:id', (req, res) => {
    Controllers.validatePasswordOfUser(req, res)
})

// Setting up a DELETE request for the "/deleteall" endpoint
router.delete('/deleteall', (req, res) => {
    Controllers.deleteUsers(req, res)
})

// Setting up a DELETE request for the "/:id" endpoint
router.delete('/:id', (req, res) => {
    Controllers.deleteUserById(req, res)
})


module.exports = router;