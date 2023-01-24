const formSubmit = document.querySelector('.formSubmit');

formSubmit.addEventListener('submit', addData)


//Validation form inputs before adding data
function validationForm() {
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('emails').value
    var password = document.getElementById('id_password').value
    // console.log(fname);

    if (fname == "") {
        alert("Name is Required")
        return false
    }
    if (lname == "") {
        alert("Last Name is required")
        return false
    }
    if (!email.includes("@")) {
        alert("Email is required")
        return false
    }
    if (password = "") {
        alert("password required")
        return false
    }

    var pattern = /^[A-Za-z._0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
    if (email.match(pattern)) {
        document.querySelector('.error').innerHTML = "Email is Valid"
        console.log("success");
    }
    else{
        document.querySelector('.error').innerHTML = "Email is Not Valid"
        return false
    }
    document.querySelector('.error').innerHTML = ''
    return true
}


//function for showData
function showData() {
    var peopleList;
    if (localStorage.getItem('peopleList') == null) {
        peopleList = []
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = ""

    peopleList.forEach((element, index) => {
        html += "<tr>"
        html += "<td>" + index + "</td>"
        html += "<td>" + element.fname + "</td>"
        html += "<td>" + element.lname + "</td>"
        html += "<td>" + element.email + "</td>"
        html +=
            '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button>'
        html += "</tr>"
    });

    document.querySelector('#crudTable tbody').innerHTML = html

}

// loads all data when documnet or page loaded
document.onload = showData()


//function to add Data
function addData(e) {
    e.preventDefault();
    if (validationForm() == true) {
        var fname = document.getElementById('fname').value
        var lname = document.getElementById('lname').value
        var email = document.getElementById('emails').value
        var password = document.getElementById('id_password').value

        var peopleList;
        if (localStorage.getItem('peopleList') == null) {
            peopleList = []
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"))
        }
        
        peopleList.push({
            fname,
            lname,
            email,
            password
        })

        localStorage.setItem("peopleList", JSON.stringify(peopleList))
        showData()

        document.getElementById('fname').value = ''
        document.getElementById('lname').value = ''
        document.getElementById('emails').value = ''
        document.getElementById('id_password').value = ''
    }
}

//function for Delete Data fro localStorage

function deleteData(index) {
    var peopleList;
    if (localStorage.getItem('peopleList') == null) {
        peopleList = []
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    peopleList.splice(index, 1)
    alert("Delete Data ID"+ index)
    localStorage.setItem("peopleList", JSON.stringify(peopleList))
    showData()
}

//function to update/Edit in local Storage
function updateData(index) {
    //submit button will hide and update button will show for updating of Data in LocalStorage 
    document.getElementById('submit').style.display = "none";
    document.getElementById('Update').style.display = "block";

    peopleList = JSON.parse(localStorage.getItem("peopleList"));

    document.getElementById('fname').value = peopleList[index].fname
    document.getElementById('lname').value = peopleList[index].lname
    document.getElementById('emails').value = peopleList[index].email
    document.getElementById('id_password').value = peopleList[index].password

    document.querySelector('#Update').onclick = function () {
        if (validationForm() == true) {
            peopleList[index].fname = document.getElementById("fname").value
            peopleList[index].lname = document.getElementById("lname").value
            peopleList[index].email = document.getElementById("emails").value
            peopleList[index].password = document.getElementById("id_password").value


            localStorage.setItem("peopleList", JSON.stringify(peopleList))
            showData()

            document.getElementById('fname').value = ''
            document.getElementById('lname').value = ''
            document.getElementById('emails').value = ''
            document.getElementById('id_password').value = ''

            //Update button will hide and submit button will show
            document.getElementById('submit').style.display = "block";
            document.getElementById('Update').style.display = "none";


        }
    }
}

//eyeIcon
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});