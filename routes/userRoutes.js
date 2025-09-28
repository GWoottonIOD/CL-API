
import express from 'express';
export const router = express.Router();
import {userController} from '../controllers/index.js';
import {uploadFile, uploadFiles} from '../libraries/uploads.js';
// import response from '../libraries/chatgpt';
import {response} from '../libraries/chatgpt.js';

// Setting up a GET request for the "/" endpoint
router.get('/', (req, res) => {
    userController.getUsers(req, res);
})

// Setting up a GET request for the "/:id" endpoint
router.get('/:id', (req, res) => {
    userController.getUsersByID(req, res);
})

// Setting up a GET request for the "/upload" endpoint
router.get('/test/ask', (req, res) => {
    // Calling the uploadTheFile function from the userController module, passing in the request and response objects
    response.then(response => res.status(200).json({ result: 200, data: response }));
});

// Setting up a POST request for the "/create" endpoint
router.post('/create', (req, res) => {
    //Calling the validatePasswordOfUser function from the userController module, passing in the request body and response objects
    userController.validatePasswordOfUser(req, res);
});

// Setting up a POST request for the "/login" endpoint
router.post('/login', (req, res) => {// works
    // Calling the loginUser function from the userController module, passing in the request and response objects
    userController.loginUser(req, res);
});

// Setting up a POST request for the "/upload" endpoint
router.post('/upload', (req, res, next) => {
    // Calling the uploadTheFile function from the userController module, passing in the request and response objects
    try { uploads.uploadFile(req, res, next), res.send({ result: 200, data: 'success' }) }
    catch (err) { res.send(err) }
});

// Setting up a POST request for the "/upload" endpoint
router.post('/uploadmultiple', (req, res, next) => {
    console.log(next)
    // Calling the uploadTheFile function from the userController module, passing in the request and response objects
    uploads.uploadFiles(req, res, next);
});

// Setting up a PUT request for the "/:id" endpoint
router.put('/:id', (req, res) => {
    userController.validatePasswordOfUser(req, res)
})

// Setting up a DELETE request for the "/deleteall" endpoint
router.delete('/deleteall', (req, res) => {
    userController.deleteUsers(req, res)
})

// Setting up a DELETE request for the "/:id" endpoint
router.delete('/:id', (req, res) => {
    userController.deleteUserById(req, res)
})


export default router;