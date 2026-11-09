import {readFileSync,existsSync} from 'node:fs';
const html=readFileSync('site/index.html','utf8');
for(const text of ['Jeremiah Animaku','Work Out!','learning Azure deployment'])if(!html.includes(text))throw new Error('Missing content: '+text);
for(const [,path] of html.matchAll(/(?:href|src)="(\/[^"#?]+)"/g))if(!existsSync('site'+path))throw new Error('Missing asset: '+path);
for(const [,id] of html.matchAll(/href="#([^"]+)"/g))if(!html.includes('id="'+id+'"'))throw new Error('Broken anchor: '+id);
console.log('Content, local assets, and navigation checks passed.');
