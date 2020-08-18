const id = document.querySelector('.hiddenId').innerHTML;
const topic = document.querySelector('.hiddenTopic').innerHTML;

// const getOneArticle = axios({
//     method: 'GET',
//     url: "`http://localhost:5000/database/NodeJS/${id}`"
// })



const retrieveArticle = async () => {
    const getOneArticle = axios.get(`http://localhost:5000/database/${topic}/${id}`);
     await getOneArticle.then(res => {

        // const article = res.data[0];
        // console.log(article.title);
    
        // Get the root div
        const root = document.querySelector('.root');
    
        // Returned articles in array
        const articleArr = res.data;
        console.log('THIS IS FROM AXIOS --->', articleArr);
        articleArr.forEach(article => {
            console.log(article);
            const h4 = document.createElement('h4');
            const p = document.querySelector('p');
            h4.innerHTML = article.title;
            p.innerHTML = article.article;
    
            root.appendChild(h4);
            root.appendChild(p);
    
        });
    
    })
}

retrieveArticle();