const { Note } = require('../models/index');
const authorization = async (req, res, next) => {
  try {
    const { note_id } = req.params;
    const note = await Note.findByPk(note_id);

    if (!note) throw { name: 'NotFound' };

    if (note.UserId !== req.user.id) throw { name: 'Forbidden' };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
