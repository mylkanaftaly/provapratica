// 01
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'aplication/json');
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('okay');

//     const objeto = [
//         { id: 1, nome:'Sistema Operacional'},
//         { id: 2, nome: 'Memória disponível'},
//         { id: 3, nome: 'Diretório atual servidor'},
//     ]

//     const json = JSON.stringify(objeto)

//     console.log(json)
// });

// 03
// const myURL = new URL('https://nodejs.org/api/url.html#url_new_url_input_base');
// console.log(myURL.href);
// // Prints https://example.org/foo


// URL [
//      href: 'http://nodejs.org/api/url.html#url_new_url_input_base',
//     protocol: 'https:',
//     slashes:true,
//     auth: null,
//     host: 'nodejs.org',
//     port: null,
//     hostname: 'nodejs.org',
//     hash: '#url_new_url_inpur_base',
//     port: null,
//     query: [Object: null prototype] {},
//     pathname: '/api/url.html',
//     path: '/api/url.html',
//    ]

//     console.log(URL)

// // 04
// const require('./file.cjs');
// // { "name" : "some-library",
// //   "main" : "./lib/some-library.js" } 

// 05

// const os = require('os');
// [
//     {
//         model: 'Intel(R) Core(TM) i3-10110U CPU @ 2.10GHz',
//         speed: 2099,
//         times: {
//             user: 6590810,
//             nice: 80870,
//             sys: 1818490,
//             idle: 38671490,
//             irq: 0
//         }
//     }
// ]


// console.log(os.cpus());

