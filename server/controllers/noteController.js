const { Op } = require('sequelize');
const { Note } = require('../models/index');

class NoteController {
  static async getNotes(req, res, next) {
    try {
      const { id } = req.user;
      const notes = await Note.findAll({
        where: {
          archived: {
            [Op.eq]: false,
          },
          UserId: {
            [Op.eq]: id,
          },
        },
        order: [['createdAt', 'DESC']],
      });

      res.status(200).json({
        message: 'Todos retrieved',
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
        message: 'Todos created',
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
      const { id } = req.user;
      const notes = await Note.findAll({
        where: {
          archived: {
            [Op.eq]: true,
          },
          UserId: {
            [Op.eq]: id,
          },
        },
        order: [['createdAt', 'DESC']],
      });

      res.status(200).json({
        message: 'Todos retrieved',
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
        message: 'Todos retrieved',
        data: note,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteNotes(req, res, next) {
    try {
      const { note_id } = req.params;

      await Note.destroy({
        where: {
          id: {
            [Op.eq]: note_id,
          },
        },
      });

      res.status(200).json({
        message: 'Todos deleted',
      });
    } catch (error) {
      next(error);
    }
  }

  static async patchArchive(req, res, next) {
    try {
      const { note_id } = req.params;

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
        message: 'Todos Done',
      });
    } catch (error) {
      next(error);
    }
  }

  static async patchUnarchive(req, res, next) {
    try {
      const { note_id } = req.params;

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
        message: 'Todos unarchived',
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = NoteController;
