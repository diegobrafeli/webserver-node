
const http = require('http');

http.createServer((req, res)=>{
    console.log(req)
    //res.writeHead(200 ,{'Content-Type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200 ,{'Content-Type': 'application/csv'});
    res.write('ID, Name\n');
    res.write('1, Joao\n');
    res.write('2, Douglas\n');
    res.write('3, Piter\n');


    //res.write('404 | Page not found')
    res.end();
}).listen(8080);

console.log('listening to the door',8080);