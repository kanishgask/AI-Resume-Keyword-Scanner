function analyzeResume(text){

let found = 0;
let missing = [];

jobKeywords.forEach(skill => {

if(text.includes(skill)){
found++;
}else{
missing.push(skill);
}

});

let score = Math.round((found / jobKeywords.length) * 100);

return {
score: score,
missing: missing
};

}
