// Links to specificArticle.ejs

const id = document.querySelector('.hiddenId').innerHTML;
const topic = document.querySelector('.hiddenTopic').innerHTML;


const retrieveArticle = async () => {
    const getOneArticle = axios.get(`http://localhost:5000/database/${topic}/${id}`);

     await getOneArticle.then(res => {

        // Got to figure this out -> (sSometimes article doesnt load) so i reload the page if article wasnt loaded
        if (!res.data) location.reload();
    
        // Get the root div
        const root = document.getElementById('root');
    
        // Returned articles in array
        const articleArr = res.data;
        console.log('THIS IS FROM AXIOS --->', articleArr);
        articleArr.forEach(article => {
            console.log(article);
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const br = document.createElement('br')
            h2.innerHTML = article.title;
            p.innerHTML = article.article;
    
            root.appendChild(h2);
            root.append(br)
            root.appendChild(p);
    
        });
    
    })
}

retrieveArticle();