var http=require('http');
port=8000;
host="127.0.0.1";
var server=http.createserver(function(req,res){
  res.writehead(200,("content-type":"text/plain"));
  res.write("hello");
  res.end();
});
server.listen(port,host,function)(){
console.log("listening.......");
};
