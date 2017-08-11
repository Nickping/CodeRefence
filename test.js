
var https = require('https');

function printMessage(username, badgeCount, point) {
    const Message = `${username} username ${badgeCount} bageCount ${point} point`;
    console.log(Message);
}

printMessage('name',100,1000);

const username ="";

function getProfile(username) {

const request = https.get('https://teamtreehouse.com/chalkers.json', (response) =>{

    var body ="";
    console.log(response.statusCode);
    response.on('data', (d)=>{

        body+=d.toString();
       // process.stdout.write(d);
    });

    response.on('end',()=>{

        console.log('////////////////////end///////////////////');
        var profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);
        console.log(typeof body);
    });
});
}
//console.log(process.argv.slice(2));

//
 const users = process.argv.slice(2);
//
 users.forEach(getProfile);

