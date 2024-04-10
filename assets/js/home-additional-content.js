let mainDoc = document.getElementById('main');
let newSection = document.createElement('section');
newSection.id = 'additional-content';
newSection.setAttribute('aria-label', "Additional content");
newSection.innerHTML = "<h2> New section </h2><p> Content of the new section </p>"
newSection.style.color = 'red';
newSection.style.backgroundColor = "yellow";
mainDoc.appendChild(newSection);






