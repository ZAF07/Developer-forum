


async function getThis() {
  const here = await axios.get({
    url:'http://localhost:5000/topic/CSS'
  })

  console.log(here);
}

getThis();
