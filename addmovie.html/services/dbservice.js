var MongoClient=require('mongodb').MongoClient;
exports.createConnection=function () {
  MongoClient.connect("mongodb://Abhilashkhanna:krishabhi29@ds111478.mlab.com:11478/projector10").then(function (client){
    console.log("connected to MONGODB!!");
    exports.database=client.db("projector10");
    //console.log("connected to mongodb");


  });

}
