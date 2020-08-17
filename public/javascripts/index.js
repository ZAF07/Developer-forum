// async function getThis() {
//   const here = await axios({
//     url:'http://localhost:5000/topic/HTML',
//     method: 'GET'
//   })
//   console.log(here.data);
//   const allData =
//
//   const div = document.body.createElement('div');
//   div.innerHTML =
//   document.body.appendChild(div)
// }
//
// getThis();

async function getTopic() {
  const topic = await document.querySelector('.topic').innerHTML;

  console.log('This is the topic', topic);  
}
getTopic();

async function findArticle() {
  const findData = axios({
    url:'http://localhost:5000/topic/HTML',
    method: 'GET'
  });

  await findData.then(res => {
    console.log(res.data);

    // Collect Data
    const articlesArr = res.data
    articlesArr.forEach(article => {
          // Create Elements
    const h4 = document.createElement('h4');
    const small = document.createElement('small');
  
    // Add Class to Elements
    // p.classList = 'jumbotron'
  
    // Populate Elements
    h4.innerHTML = article.title;
    small.innerHTML = article.article;
  
    // Add Elements to DOM
    document.body.appendChild(h4);
    document.body.appendChild(small);
    });


  })
}

findArticle();




