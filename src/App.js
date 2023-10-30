import logo from './logo.svg';
import './App.css';
import Card from './component/Card'
let books = [
  {
    title: "The Secret Garden",
img : "https://source.unsplash.com/1600x900/?secretgarden",
rating: 3.7,
author: "Frances Eliza Hodgson Burnett",

desc: "A timeless classic that tells the story of Mary Lennox, a lonely and spoiled girl who discovers a hidden, magical garden on her uncle's estate. This enchanting tale of growth, healing, and the power of nature has captured the hearts of readers for generations."
  },
  {
    title: "To Kill a Mockingbird",
    img : "https://source.unsplash.com/1600x900/?Mockingbird",
    rating: 4.5,
    author: "Nelle Harper Lee",
    desc: "Harper Lee's masterpiece explores themes of racial injustice and moral growth in the American South during the 1930s. Follow the journey of Scout Finch and her father, Atticus, as they navigate the complexities of their community."
    
  },
{
  title: "The Great Gatsby",
  img : "https://source.unsplash.com/1600x900/?clock",
  rating: 4.2,
  author: "Francis Scott Key Fitzgerald",
  desc: "F. Scott Fitzgerald's classic novel paints a vivid picture of the decadence and disillusionment of the 1920s. Jay Gatsby's extravagant parties, unrequited love, and the American Dream take center stage in this timeless work."
  
},

{
  title: "Pride and Prejudice",
  img :  "https://source.unsplash.com/1600x900/?Prejudice",
  rating: 3.8,
  author: "Jane Austen",
  desc: "Jane Austen's beloved novel follows the lively Elizabeth Bennet as she navigates societal expectations, family dynamics, and the enigmatic Mr. Darcy. A tale of love, wit, and social commentary that continues to captivate readers."
  
},
{
  title: "Pride and Prejudice",
  img :  "https://source.unsplash.com/1600x900/?Prejudice",
  rating: 3.8,
  author: "Jane Austen",
  desc: "Jane Austen's beloved novel follows the lively Elizabeth Bennet as she navigates societal expectations, family dynamics, and the enigmatic Mr. Darcy. A tale of love, wit, and social commentary that continues to captivate readers."
  
}


  
]
function App() {
  return (
    <div className='flex'>
      {
        books.map((book)=>{
          return <Card title={book.title} img={book.img} rating={book.rating} author={book.author} desc={book.desc} />
        })
      }
      

    </div>
  );
}

export default App;
