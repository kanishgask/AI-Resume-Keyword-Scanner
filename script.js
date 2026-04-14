function scanResume(){

const resumeText = document
.getElementById("resume")
.value
.toLowerCase();

const result = analyzeResume(resumeText);

document.getElementById("score")
.innerText = result.score + "%";

document.getElementById("missing")
.innerText = "Missing Skills: " + result.missing.join(", ");

}
