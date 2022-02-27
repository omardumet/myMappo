



mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmR1bWV0bzciLCJhIjoiY2t6N253NG9yMTdsNDJvbzB6aWV6OWQ0dSJ9.6vZue9DQDXUsVG5odDqjUw';


//gets user location and pin points it in the map as soon as it loads/

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true});

function successLocation(position){
    console.log(position);
    createMap([position.coords.longitude,position.coords.latitude],10);

}
function errorLocation(){
    console.log("couldnt get location :(");
    window.alert("couldnt get location :(");
}



//function that when its called  creates a map
 function createMap(center, zoom, array) {


     //map object
     var map = new mapboxgl.Map({
         container: 'map',
         style: 'mapbox://styles/omardumeto7/ckz7xmxq2000l14o2vva5i1uu',
         center: center, // starting position
         zoom: zoom,// starting zoom
         animate: true,
         attributionControl: false
     });
     //map controls
     map.addControl(new mapboxgl.NavigationControl());
     // Create a default Marker and add it to the map.
     let marker1 = new mapboxgl.Marker({color: '#21e065', draggable: true})
         .setLngLat(center)
         .addTo(map);






     console.log('this is from createMap function')
     console.log(array)
     for(let i in array){  //this loops through the array fetched and creates pins for each one...
            //array has 4 values[latitude,longitude,url,job-title]
            let job_url = array[i][2];
            let distance = [array[i][0],array[i][1]];
            let title = array[i][3];
            let city = array[i][4];

            let marker = new mapboxgl.Marker({color: 'rgb(255,0,47)'})
             .setLngLat(distance)
             .setPopup(new mapboxgl.Popup({ offset: 15 }).setHTML('<a href= "'+job_url+'" target="_blank" style="color: #1a0dd7;font-weight: bold">'+title+'</a><p style="color: #090909">'+city+'</p>'))
             .addTo(map)
     }

 }



   function newLocation(zoom){
    let state_name,average,colNum;
    let state = document.getElementById('inputField2').value;
    state.toLowerCase();


    switch (state) {

        case 'alaska':
            state = [-153.369141, 66.160507];
            state_name = "Alaska";
            average = 1200;
            colNum = 125.8
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));//fetch function gets called and passes state name value
            /*sleep(1000).then(() => {
                console.log("this is coordinatelist:\n")
                console.log(array)
            })*/

            break;
        case 'alabama':
            state = [-86.902298, 32.318230];
            state_name = "Alabama";
            average = 1200;
            colNum = 82.3;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'arizona':
            state = [-111.093735, 34.048927];
            state_name = "Arizona";
            average = 1250;
            colNum = 102.2;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'arkansas':
            state = [-92.199997, 34.799999];
            state_name = "Arkansas";
            average = 1350;
            colNum = 79.5
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'california':
            state = [-119.417931, 36.778259];
            state_name = "California";
            average = 2800;
            colNum = 149.9;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'colorado':
            state = [-105.358887, 39.113014];
            state_name = "Colorado";
            average = 2400;
            colNum = 166.1;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;

        default:alert("Please, enter valid state name.");//if user does not enter state name correctly
    }

    //CALLS FETCH WITH THE INFO..THEN GFETCH CALLS CREATE MAP

    //createMap(state,zoom);//creates a new map with assigned location

    createChart(state_name,average);//creates new chart by destroying previous with new state
    if(average!=0) {
        document.getElementById('html_rentTotalTitle').innerText = 'Avg 2bd apartment rent: $'+average;

    }else{
        document.getElementById('html_rentTotal').innerText = '';
    }


    myfetchFunc2(state_name,colNum);

}


let average_salary;
async function myfetchFunc2(state_name,colNum){//gets average job salary with api
    document.getElementById('avgsalarayHTML').innerText = '';
    let jobNameTemp =document.getElementById('inputField').value;

    document.getElementById('jobName').innerText= jobNameTemp +' avg salary in\n\n'+ state_name;

    let fieldValue = document.getElementById('inputField').value

    let innerText = '\nOur cost of living indices are based on a US average of 100. ' +
        'An amount below 100 means '+state_name+' is cheaper than the US average. ' +
        'A cost of living index above 100 means '+state_name+', is more expensive.';
    document.getElementById('costofLivingTitle').innerText= 'Cost of Living in '+state_name;
    document.getElementById('costofLivingBody').innerText= innerText;
    document.getElementById('costofLivingBody2').innerText= state_name+' cost of living is: '+colNum;
    document.getElementById('table').innerHTML = '<table style="width:100%;text-align: center;border: 1px solid white;">' +
        '<tr>' +
        '<th style="width:30%">Cost of Living</th>' +
        '<th style="width:30%; color: #1ED760">'+state_name+'</th>' +
        '<th style="width:30%">USA</th>' +
        '</tr>' +
        '<tr>' +
        '<td><a href="" style="color: #1ED760">Overall</a></td>' +
        '<td style="color: #1ED760">'+colNum+'</td>' +
        '<td>100</td>' +
        '</tr>' +
        '</table>';
    $(document).ready(function(){
        $('td a').hover(function() {
            $('#pop').toggle();
        });
    });

    let response = await fetch('https://infosalary.p.rapidapi.com/?job_title='+fieldValue+'', {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "infosalary.p.rapidapi.com",
            "x-rapidapi-key": "8f659a7208msh9a4f254921a1fd3p17ad36jsn36a7ab4083cb"
        }
    })
        .then(response => response.json())
        .then(data=>  average_salary = data.info[0].average)
        .catch(err => {
            console.error(err);
        });
    if(average_salary != null){
    document.getElementById('avgsalarayHTML').innerText = numberWithCommas(average_salary);
    }else{
        document.getElementById('avgsalarayHTML').innerText = 'N/A';
    }
}





//fucntion turns number into number with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//creates a custom chart when it's called/
    function createChart(stateName,average){
        let xValues = [stateName,"USA"];
        let yValues = [average,1977];
        let barColors = ["rgb(9,36,103)", "rgba(255,255,255,0.62)"];
        let type = "bar";
        let data = {labels: [stateName,"USA"],
            datasets: [{backgroundColor: barColors,
                data: yValues}]
        };


        let options = {options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "2bed Apartment Rent"
                }

            }};

        //if there's a chart in place.Destroy it before creating new one.
       if(window.myNewChart1 != null){
            window.myNewChart1.destroy();
        }
        window.myNewChart1 =  new Chart("myChart",{type,data,options});
    }







let array=[];

//data.map(function(item){return console.log(item.longitude
/*data.results[0].longitude,data.results[0].latitude*/

//function that fetches data from API/
 async function myfetchFunc(myLocation){

    let fieldValue = document.getElementById('inputField').value
    let url = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=0d876f88&app_key=d23de8fae37daf48942bffeb8d17c6f2&results_per_page=25&what='+fieldValue+'&location0=us&location1='+myLocation+'&sort_by=date\n'
    let response =  await fetch(url, {
        "method": "GET",
        "headers": {
        }
    })
        .then(response => response.json())
        .then(data=> console.log(data.results.forEach(function (i){array.push([i.longitude,i.latitude,i.redirect_url,i.title,i.location.display_name])})))



        .catch(err => {
            console.error(err);
        })


     console.log("this is the array that is locally :\n")
     console.log(array)
}



//darkmode function
function goDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


