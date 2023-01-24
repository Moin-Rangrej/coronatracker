function sendMail() {
    var  tempParams={
        from_name : document.getElementById('Name').value,
        to_name : document.getElementById('toname').value,
        message : document.getElementById('message').value,
    }

    emailjs.send('service_swk1uec','template_0wkpnej',tempParams)
    .then(function(res){
        console.log('Success', res.status);
    })

}