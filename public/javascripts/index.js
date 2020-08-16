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

const findData = axios({
  url:'http://localhost:5000/topic/HTML',
  method: 'GET'
});


findData.then(res => {
  console.log(res.data);
  const div = document.createElement('p');
  div.innerHTML = res.data[5].article;
  document.body.appendChild(div);
})
