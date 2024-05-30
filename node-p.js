// file system
// if you want to manipulate the files that are available on your server or your 
// local machine you could use file system
// fs

const fs = require('fs');

const data = fs.readFileSync('new-file.txt');

console.log("" + data);

fs.readFile('new-file.txt', (err, data) => {
    console.log("" + data);
});

const content = "Hello World!"

fs.writeFile('new-file.txt', content, 'utf-8', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("file modified");
})


fs.appendFileSync('new-file.txt', "class is going on");

// fs.rename('new-file.txt', 'f1.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File has been renamed');
// })

// fs.mkdir('my-directory', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('dir formed');
// })

// fs.rmdir('my-directory', { recursive: true }, (err) => {
//   if (err) {
//     console.error(`Error deleting directory: ${err}`);
//   } else {
//     console.log(`Directory deleted successfully.`);
//   }
// });

// in sync your further exec would be stopped untill the operation is complete
// in async if would move forward and a callback would be called once the operation is completed

// all the fs functions would be sync or async
// const p = '/Users/siddharthtaneja/node-practice/f1.txt';
// const path = require('path');

// const dirname = path.dirname(p);

// // console.log(dirname);

// // const extension = path.extname(p);
// // console.log(extension);


// // file organiser
// // organises all the files based on there extension and puts it into folders
// // for that extension

// // get the extension of the file 
// // mkdir for that type of extension 
// // write in the folder the file for particular extension 
// // const fs = require('fs');
// // const path = require('path');
// // const sourcePath = '/Users/siddharthtaneja/node-practice/f1.txt';
// // const destDir = '/Users/siddharthtaneja/node-practice/my-directory';
// // // destionation = // /Users/siddharthtaneja/node-practice/my-directory/f1.txt;
// // const basename = path.basename(sourcePath);
// // const destination = path.join(destDir, basename);
// // fs.copyFileSync(sourcePath, destination);
// // fs.unlinkSync('f1.txt');

// // all files of txt extension go in txt folder
// // all files of mp3 extension go in mp3 folder

// const http = require('http');
// const server = http.createServer((req, res) => {
//   // Set response header with Content-Type as text/html
//   res.setHeader('Content-Type', 'text/html');
  
//   // Write HTML response
//   res.write('<html><head><title>Node.js HTTP Server</title></head><body>');
//   res.write('<h1>Hello, World!</h1>');
//   res.write('</body></html>');
  
//   // End the response
//   res.end();
// });

// const port = 3000;
// const host = 'localhost';

// server.listen(port, host, () => {
//   console.log(`Server is listening on http://${host}:${port}`);
// });