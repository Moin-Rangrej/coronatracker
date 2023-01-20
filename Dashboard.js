var mybtn = document.querySelector('.mybtn')

async function myFun() {
    const fetchdata = await fetch('https://api.covid19api.com/summary')
    // const fetchdata = await fetch('Dashboard.json')
    const response = await fetchdata.json()
    console.log(response);
    var country = response.Countries.map(function (elem) {
        return elem.Country
    })
    var confirmD = response.Countries.map(function (newd) {
        return newd.TotalConfirmed
    })
    var TotalD = response.Countries.map(function (totd){
        return totd.TotalDeaths
    })
    countryCount =  country.length


    //Total Countries
    let con = document.querySelector('.total-country').innerHTML = countryCount
    console.log(con);

    //Total Confirm Death

    let total_confirm = response.Global.TotalConfirmed
    document.querySelector('.death').innerHTML = total_confirm
    // console.log(c);


    let new_confirm = response.Global.NewDeaths
    document.querySelector('.new-confirm').innerHTML = new_confirm

    let total_deaths = response.Global.TotalDeaths
    document.querySelector('.total-deaths').textContent = total_deaths

    var myvalues = document.querySelectorAll(".btn")
    myvalues.forEach((elem) => {
        console.log(elem);
        elem.addEventListener('click', refresh_data)
    })

    function refresh_data() {
        this.parentElement.children[2].innerHTML  = "<span class='spinner-border'></span>"
        setTimeout(() => {
            myFun()
        },1000)
    }
}

myFun()
