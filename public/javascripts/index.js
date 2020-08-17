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
  const topic = await document.querySelector('.topic').innerHTML;
  const findData = axios({
    url:`http://localhost:5000/database/${topic}`,
    method: 'GET'
  });

  await findData.then(res => {
    console.log(res.data);

    // Get the Root DIV
    const div = document.querySelector('#root');

    // Collect Data
    const articlesArr = res.data
    
    articlesArr.forEach(article => {
      console.log('THIS IS THE ID ---> ', article._id);
    // Create Elements
    const h4 = document.createElement('h4');
    const small = document.createElement('small');
    const link = document.createElement('a');
  
    // Add Class to Elements
    // p.classList = 'jumbotron'
  
    // Populate Elements
    h4.innerHTML = article.title;
    h4.name = article._id;
    small.innerHTML = article.article.substring(1,100)+'...';
    link.href= `http://localhost:5000/topic/article/${topic}/` + article._id;
    link.innerHTML = '<small>Read this article</small>';
  
    // Add Elements to DOM
    div.appendChild(h4);
    div.appendChild(small);
    div.appendChild(link)
    });


  })
}

findArticle();




