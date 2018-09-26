function popSearch(){
    const searchYear = document.querySelector("#year").value;
    const searchCountry = document.querySelector("#country").value;
    const searchAge = document.querySelector("#age").value;
    

    $.ajax({
        url: `http://api.population.io:80/1.0/population/${searchYear}/${searchCountry}/${searchAge}/`,
        success : function(data){
            console.log(data);
            let ctx = document.getElementById("myChart");
            let myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Population", "Males", "Females",],
                    datasets: [{
                        label: 'Total Population By Year, ' + data[0].year,
                        data: [data[0].total, data[0].males, data[0].females,],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        },
        error: function (err) {
            console.log(err);
            alert("Please make sure the first letter of country name only is capitalized");
        }
    
    })
    return false;

//     x = document.getElementById("searchAge").value
//     z= document.getElementById("searchCountry").value
  
//    if (isNaN(x)) {
//       alert("Please put in a number")
//         return;
//     }
//     if ((z) === (z).toLowerCase() || (z) === (z).toUpperCase()) {
//       alert("Please make sure the first letter  only is capitalized")
//         return;
//     }
  }
