const NoteController = require('../controllers/noteController');

const router = require('express').Router();

router.get('/', NoteController.getNotes);

module.exports = router;
