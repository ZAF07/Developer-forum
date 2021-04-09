const form = document.getElementById('form-control');
form.addEventListener('submit', (e) => {
    e.preventDefault;
    const routeToSubmit = document.getElementsByName('topic')[0].value;
    console.log(routeToSubmit);
    const action = `/createarticle/${routeToSubmit}`;
    form.action = action;
    form.submit();
})