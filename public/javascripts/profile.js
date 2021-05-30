// Links to topic.ejs

// async function getTopic() {
//   const topic = await document.querySelector('.topic').innerHTML;

//   console.log('This is the topic', topic);
// }
// getTopic();
async function findArticle() {
  const user = document.getElementById('user').innerHTML;
  console.log(`THIS IS USER --> ${user}`);
  const findData = axios({
    url: `http://localhost:5000/database/user/${user}`,
    method: 'GET',
  });

  await findData.then((res) => {
    console.log(res.data[0]);


    // Got to figure this out -> (sSometimes article doesnt load) so i reload the page if article wasnt loaded
    if (!res.data) location.reload();

    // Get the Root DIV
    const div = document.querySelector('#root');

    // Collect Data
    const articlesArr = res.data[0].python_articles[0];
    console.log(`whuttt --> ${articlesArr.title}`);

    articlesArr.forEach((article) => {
      console.log('THIS IS THE ID ---> ', article._id);
      console.log('THIS IS THE article ---> ', article.python_articles);
      const userArticles = article.python_articles;
      console.log(`whutt --> ${userArticles.article}`);
      // Create Elements
      const container = document.createElement('div');
      const innerContainer = document.createElement('div');
      const h4 = document.createElement('h4');
      const small = document.createElement('small');
      const link = document.createElement('a');

      // Add Class to Elements
      // p.classList = 'jumbotron'
      container.className = 'card p-3  shadow-lg p-3 mb-5 bg-white rounded';
      innerContainer.className = 'container';

      // Populate Elements
      h4.innerHTML = userArticles.title;
      h4.name = userArticles._id;
      small.innerHTML = userArticles.article.substring(0, 100) + '...';
      link.href =
        `http://localhost:5000/topic/${topic}/article/` + userArticles._id;
      link.innerHTML = '<small>Read this article</small>';

      // Populate the container
      // container.appendChild(h4)
      container.appendChild(h4);
      container.appendChild(small);
      container.appendChild(link);

      // Add Elements to DOM
      // div.appendChild(h4);
      // div.appendChild(small);
      // div.appendChild(link)
      // div.appendChild(br)
      div.appendChild(container);
    });
  });
}

findArticle();
