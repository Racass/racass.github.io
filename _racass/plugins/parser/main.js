function sendParser()
{
    var parse = require('https://npmcdn.com/parse@2.2.1/dist/parse.js');
    parse.initialize("wW32hrtDDmN6bogYHa4H7vP86PZYRCg3f3pOWUh0", "d8nM5tpWKNctok38YWZnisyl7N1qXRH0difBOKWv");
    parse.serverURL = 'https://parseapi.back4app.com/';

    var AccessLog = parse.Object.extend("Accesslog");
    var accLog = new AccessLog();

    accLog.set("IP", "127.0.0.1");
    accLog.set("post", "Tutorial");
    accLog.save()
        .then((accLog) => {
            alert('Object saved with id: '+ accLog.id);
        }, (error) => {
            alert('Erro: ' + accLog.message);
        });
}