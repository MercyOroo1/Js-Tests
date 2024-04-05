function fetchBooks() {
    // To pass the tests, don't forget to return your fetch!
   return fetch ('https://anapioficeandfire.com/api/books')
    .then (res => res.json())
    .then (data => renderBooks(data))
  }
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
      const btn = document.createElement("button")
      btn.textContent = ` Delete ${book.name}` // delete button
      h2.appendChild(btn)
      btn.addEventListener ("click",handleDelete)
      const btn2 = document.createElement("button")
      btn2.textContent = "change color"
      h2.appendChild(btn2)
      btn2.addEventListener("click",handleColor)
  
    });
  }
  function handleDelete (e) {
    e.target.parentNode.remove()
  }
  function handleColor (e) {
    if (e.target.parentNode.style.color === "purple") {
      e.target.parentNode.style.color = "black"
    }else {
      e.target.parentNode.style.color = "purple"
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
  });
  