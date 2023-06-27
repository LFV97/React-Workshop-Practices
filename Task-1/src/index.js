import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

// wrap your code inside a single element
// div/section/fragment(vacío)
// use ClassName instead of class
// close every element
// do not create a div soup (instead you could use fragment)



const books = [
  {
    id : '1',
    img : "https://images-na.ssl-images-amazon.com/images/I/81uAjftkMtL._AC_UL600_SR600,400_.jpg",
    title : "Why a Daughter Needs a Dad",
    author : "Gregory E.Lang",
    price : '$7.19',
  },
  {
    id : '2',
    img : "https://images-na.ssl-images-amazon.com/images/I/713toGwMnqL._AC_UL600_SR600,400_.jpg",
    title : "Dad Jokes",
    author : "Jimmy Niro",
    price : '$5.93',
  },
  {
    id : '3',
    img : "https://images-na.ssl-images-amazon.com/images/I/713UXYBviuL._AC_UL600_SR600,400_.jpg",
    title : "Icebreaker: A novel",
    author : "Hannah Grace",
    price : '$11.99',
  },
  {
    id : '4',
    img : "https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg",
    title : "Happy Place",
    author : "Emily Henry",
    price : '$15.49',
  }
  
]


function BookList() {
  return(
    <section className="bookList">
      {
        books.map((book)=>{
          return <Book {...book} key={book.id}/>
        })
      }
    </section>
  )
}


const Book = ({img, title, author, price}) => {

  const Price = (e) => {
    alert(`The price is ${price}`);
  }

  const showAuthor = (author) => {
    console.log(author);
  }

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <h4>{price}</h4>

      <button onClick={Price}>Tell me the price</button>
      <button onClick={() => showAuthor(author)}>Show Author</button>
    </article>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);