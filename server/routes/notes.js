const NoteController = require('../controllers/noteController');

const router = require('express').Router();

router.get('/', NoteController.getNotes);
router.post('/', NoteController.postNotes);

router.get('/archived', NoteController.getNotesArchived);

router.get('/:note_id', NoteController.getNotesDetail);
router.delete('/:note_id', NoteController.deleteNotes);

router.patch('/:note_id/archive', NoteController.patchArchive);
router.patch('/:note_id/unarchive', NoteController.patchUnarchive);

module.exports = router;
