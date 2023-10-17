//Q.4 Flirting and captilizing:Books Punlished After 2010 with Author Names


const books=[
{
     title:"The Namesake",
     author:"Jhumpa Lehri",
     year:2010,

},

{
     title:"The God Of Small things",
     author:"Arundhati roy",
     year:1970,
},
{
     title:"A Suitable Boy",
     author:"Vikram Seth",
     year:1993,
},

{
     title: "The White Tiger",
     author: "Aravind Adiga",
     year: 2018,
},

{
     title: "Midnight's Children",
     author: "Salman Rushdie",
     year: 1981,
}

];

const filteredBooks=books.filter((book)=>{
      return book.year>=2000 ;

})


const result=filteredBooks.map((book)=>{
     return {author:book.author.toUpperCase()} ;
})

console.log(result);


//OUTPUT: [{author:'JHUmpa Lehri}, {author: 'ARVIND ADIGA}]

