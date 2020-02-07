process.env.NODE_ENV='development';
var project='';
if(process.env.PRO_ENV){
    project='public/'+process.env.PRO_ENV
}
const developBase=require('./development.base.js');
new developBase(project||'src');