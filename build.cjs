const fs=require('node:fs');const ink=require('@shapeshift-labs/ink-studio');fs.mkdirSync('dist',{recursive:true});fs.copyFileSync('index.html','dist/index.html');fs.writeFileSync('dist/engine.js',ink.bundle()+'\nconst SCENES=[];\n'+ink.demos()+'\nwindow.INK={SCENES,makeBuilder,makeSculpt,KIT};');fs.copyFileSync(require.resolve('@shapeshift-labs/ink-studio/package.json').replace(/package\.json$/,'LICENSE'),'dist/LICENSE');
fs.copyFileSync('park.js','dist/park.js');

fs.copyFileSync('dog.html','dist/dog.html');

const crypto=require('node:crypto');
const chunks=fs.readdirSync('assets/dog-parts').filter(n=>n.endsWith('.bin')).sort();
if(chunks.length!==8)throw Error('Missing dog asset chunks');
const dog=Buffer.concat(chunks.map(n=>fs.readFileSync('assets/dog-parts/'+n)));
if(dog.length!==8984142||crypto.createHash('sha256').update(dog).digest('hex')!=='7f67bb353a8b886e8077dfa9ecfa7f3810cc6542919e3b04b3bbc4cb9cf8ae84')throw Error('Dog SOG integrity check failed');
fs.mkdirSync('dist/assets',{recursive:true});fs.writeFileSync('dist/assets/sleeping-dog.sog.zip',dog);
fs.copyFileSync('assets/DOG-LICENSE.txt','dist/assets/DOG-LICENSE.txt');
