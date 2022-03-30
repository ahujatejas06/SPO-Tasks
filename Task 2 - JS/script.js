const api="https://swapi.dev/api/planets/1/";
function sendtohtml(data)
{
    console.log("HTML Sender Called");
    let element=document.getElementById("data-display");
    let string="";
    for (let key in data)
    {
        console.log(key+" : "+data[key]);
        string+=("<tr>"+"<td>"+key+"</td>"+"<td>"+data[key]+ "</td>"+ "</tr>");
    }
    element.innerHTML=string;
}
async function connect(api)
{
    console.log("API function called");
    const connection=await fetch(api,{method:"GET"});
    if (connection) console.log("Connection Successful");
    let data = await connection.json();
    console.log(data);
    document.getElementById("loader").style.display="none";
    sendtohtml(data);
}
function call()
{
    console.log("Onload Function Called");
    let x = prompt("Press 1 to fetch data... 0 to Cancel fetch");
    if (x==1) connect(api);
    else if (x==0) 
    {
        console.log("Fetch Operation Cancelled");
        document.getElementById("loader").innerHTML="Operation Cancelled";
    }
    else
    { 
        console.log("Please reload and enter a valid value");
        document.getElementById("loader").innerHTML="Please reload and enter a valid value";
    }
}