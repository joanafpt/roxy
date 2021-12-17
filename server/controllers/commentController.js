const commentsDb = require("../database/database").get("comments");

exports.comment = function (req, res) {
  const comm = req.body;
  commentsDb.find({}, (err) => {
    if (err) res.json({ err: err });

    commentsDb.insert(comm).then((result) => {
      res.json({ success: comm });
    });
  });
};

exports.commentsList = function (req, res) {
  commentsDb
    .find({}, (error) => {
      if (error) res.json({ error: error });
    })
    .then((data) => {
      res.send(data);
    });
};
