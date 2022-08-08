console.log(`books`)


const books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      // new key-value pair for storing image URL should go here!
      alreadyRead: false
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      // new key-value pair for storing image URL should go here!
      alreadyRead: true
    }
  ];


// const list = document.createElement('ul');
// const listBooks = document.createElement('li');

  for (let i = 0; i < books.length; i++) {

    const currentBook = books[i]
    const pTag = document.createElement('p');
    pTag.innerText = `${currentBook.title}, by ${currentBook.author}`;
    document.body.appendChild(pTag)

    // console.log(books[i])
    // console.log(books[i].author)
  }


// list.appendChild(listBooks)
// document.body.appendChild(list);

