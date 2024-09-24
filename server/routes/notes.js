const NoteController = require('../controllers/noteController');
const authorization = require('../middlewares/authorization');

const router = require('express').Router();

router.get('/', NoteController.getNotes);
router.post('/', NoteController.postNotes);

router.get('/archived', NoteController.getNotesArchived);

router.get('/:note_id', authorization, NoteController.getNotesDetail);
router.delete('/:note_id', authorization, NoteController.deleteNotes);

router.patch('/:note_id/archive', authorization, NoteController.patchArchive);
router.patch('/:note_id/unarchive', authorization, NoteController.patchUnarchive);

module.exports = router;
