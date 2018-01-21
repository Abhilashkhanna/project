var movies=require('./moviedata');
var dbservice=require('../services/dbservice');

exports.getAllmovies=function(req,res){
var db=dbservice.database;
var moviescollection=db.collection("movies");
moviescollection.find().toArray().then(function(result){
var output={
  "isSuccess":true,
  "data":result
}
  return res.json(output);
});
}
exports.addNewMovie=function (req,res,next) {
  var db=dbservice.database,
   movie=req.body,
  moviescollection=db.collection("movies");
  moviescollection.insert(movie).then(function (save_data) {
    return res.json({
      "isSuccesss":true
    })

  });

}
