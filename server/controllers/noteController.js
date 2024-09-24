const { Op } = require('sequelize');
const { Note } = require('../models/index');

class NoteController {
  static async getNotes(req, res, next) {
    try {
      const notes = await Note.findAll({
        where: {
          archived: {
            [Op.eq]: false,
          },
        },
      });

      res.status(200).json({
        message: 'Notes retrieved',
        data: notes,
      });
    } catch (error) {
      next(error);
    }
  }

  static async postNotes(req, res, next) {
    try {
      const { id } = req.user;
      const { title, body } = req.body;

      const note = await Note.create({
        title,
        body,
        UserId: id,
      });

      res.status(201).json({
        message: 'Note created',
        data: {
          id: note.id,
          title: note.title,
          body: note.body,
          UserId: note.UserId,
          archieved: note.archieved,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async getNotesArchived(req, res, next) {
    try {
      const notes = await Note.findAll({
        where: {
          archived: {
            [Op.eq]: true,
          },
        },
      });

      res.status(200).json({
        message: 'Notes retrieved',
        data: notes,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getNotesDetail(req, res, next) {
    try {
      const { note_id } = req.params;

      const note = await Note.findByPk(note_id);
      if (!note) throw { name: 'NotFound' };

      res.status(200).json({
        message: 'Note retrieved',
        data: note,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteNotes(req, res, next) {
    try {
      const { note_id } = req.params;
      const note = await Note.findByPk(note_id);

      if (!note) throw { name: 'NotFound' };

      await Note.destroy({
        where: {
          id: {
            [Op.eq]: note_id,
          },
        },
      });

      res.status(200).json({
        message: 'Note deleted',
      });
    } catch (error) {
      next(error);
    }
  }

  static async patchArchive(req, res, next) {
    try {
      const { note_id } = req.params;
      const note = await Note.findByPk(note_id);

      if (!note) throw { name: 'NotFound' };

      await Note.update(
        { archived: true },
        {
          where: {
            id: {
              [Op.eq]: note_id,
            },
          },
        }
      );

      res.status(200).json({
        message: 'Note archived',
      });
    } catch (error) {
      next(error);
    }
  }

  static async patchUnarchive(req, res, next) {
    try {
      const { note_id } = req.params;
      const note = await Note.findByPk(note_id);

      if (!note) throw { name: 'NotFound' };

      await Note.update(
        { archived: false },
        {
          where: {
            id: {
              [Op.eq]: note_id,
            },
          },
        }
      );

      res.status(200).json({
        message: 'Note unarchived',
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = NoteController;
