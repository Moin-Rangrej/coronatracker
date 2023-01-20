async function myFun() {
    const fetchdata = await fetch('https://api.covid19api.com/summary')
    // const fetchdata = await fetch('Dashboard.json')
    const response = await fetchdata.json()
    console.log(response);
    console.log(response.Countries[0].Country);
    let country = ''
    // response.map((values) => {
    //     tableData +=  `<h1>${values.Countries.Country}</h1>`
    // })
    // response.Countries.map((elem,index) => {
    //     //country += ``
    //     index += 1
    //     country += `<tr>
    //                     <th scope="row">${index}</th>
    //                     <td><h3>${elem.Country}</h3></td>
    //                     <td>${elem.TotalConfirmed}</td>
    //                     <td>${elem.TotalDeaths}</td>
    //                     <td>${elem.NewConfirmed}</td>
    //                 </tr>`
    // })

   var mycity = response.Countries
   console.log([...mycity]);

   mycity.forEach((elem,index) => {
        index += 1
            country += `<tr>
                            <th scope="row">
                            ${index}
                            </th>
                            <td><h3>${elem.Country}</h3></td>
                            <td>${elem.TotalConfirmed}</td>
                            <td>${elem.TotalDeaths}</td>
                            <td>${elem.NewConfirmed}</td>
                        </tr>`
   });

    document.getElementById('table_body').innerHTML = country
}

myFun()