var http=require("http");
var url=require("url");
var fs=require("fs");
var server=http.createServer(function(req,resp)
{
    resp.setHeader("Content-Type","text/html");
    var fullurl=req.url;
    var purl=url.parse(fullurl,true);
    console.log(purl);
    if(purl.pathname==="/Signup")
    {
        fs.readFile(__dirname+"/public/signup.html",(err,data)=>
        {
            console.log(data.toString());
            if(!err)
            {
                resp.write(data);
            }
            else
            {
                resp.write(err.message);
            }
            resp.end();
        })
    }
    else
    if(purl.pathname==="/login")
    {
        resp.write("login here");
        resp.end();
    }
})
server.listen(3004,(err)=>
{
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        console.log("server started");
    }
})