let mainDoc = document.getElementById('main');
let newSection = document.createElement('section');
newSection.id = 'additional-content';
newSection.setAttribute('aria-label', "Additional content");
newSection.innerHTML = "<h2> New section </h2><p> Content of the new section </p>"
newSection.style.color = 'red';
newSection.style.backgroundColor = "yellow";
mainDoc.appendChild(newSection);


function makeTaskTable(){





}


// Write your code here
function makeTaskTable(tasks){
    
    let html = `<table>
                <thead>
                <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Published</th>
                </tr>
                </thead>
                <tbody>`;
      for(let book of books){
          let rowHTML = `<tr>
                          <td>${book.title}</td>
                          <td>${book.author}</td>
                          <td>${book.published}</td>
                          </tr>`;
          html += rowHTML;
      }
      html += `</tbody>
              </table>`;
      
      return html;
      
  }
  
  let table = buildTable(books);
  document.getElementById('books-table').innerHTML = table;



