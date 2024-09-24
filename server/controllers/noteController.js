class NoteController {
  static async getNotes(req, res, next) {
    res.json({
      message: "ini notes"
    })
  }
}

module.exports = NoteController;
