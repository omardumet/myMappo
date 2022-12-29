
const secondPanelHTML = '<div class="dataContainer">\n' +
    '    <div id="html_rentTotalTitle" style="margin-top: 15px"></div>\n' +
    '    <div id = div1>\n' +
    '\n' +
    '        <canvas id="myChart"></canvas>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="dataContainer">\n' +
    '    <div><p id="jobName"></p></div><!-- This is job name plus state\'s name-->\n' +
    '    <div id="avgsalarayHTML"></div><!-- This is salary number -->\n' +
    '\n' +
    '\n' +
    '\n' +
    '</div>\n' +
    '<div class="dataContainer">\n' +
    '    <div id="costofLivingTitle" style="margin-top: 15px"></div>\n' +
    '    <div id="pop">\n' +
    '        <p>The total of all the cost of living categories weighted subjectively as follows:\n' +
    '            housing (30%), food and groceries (15%), transportation (10%), utilities (6%),\n' +
    '            health care (7%), and miscellaneous expenses such as clothing, services,\n' +
    '            and entertainment (32%). State and local taxes are not included in any category.</p>\n' +
    '    </div>\n' +
    '    <div id="costofLivingBody" style="font-size: 12px; font-weight: lighter;padding: 0 10px"></div>\n' +
    '    <div id="costofLivingBody2" style="margin-top: 18px;"></div>\n' +
    '    <div id="table" style="margin-top: 25px"></div>\n' +
    '\n' +
    '    <div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>';


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

       console.log(state + "test test");

    switch (state) {

        case 'Alaska':
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
        case 'Alabama':
            state = [-86.902298, 32.318230];
            state_name = "Alabama";
            average = 1200;
            colNum = 82.3;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Arizona':
            state = [-111.093735, 34.048927];
            state_name = "Arizona";
            average = 1250;
            colNum = 102.2;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Arkansas':
            state = [-92.199997, 34.799999];
            state_name = "Arkansas";
            average = 1350;
            colNum = 79.5
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'California':
            state = [-119.417931, 36.778259];
            state_name = "California";
            average = 2800;
            colNum = 149.9;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Colorado':
            state = [-105.358887, 39.113014];
            state_name = "Colorado";
            average = 2400;
            colNum = 166.1;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Connecticut':
            state = [-72.699997, 41.599998];
            state_name = "Connecticut";
            average = 1733;
            colNum = 111.8;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Delaware':
            state = [-75.500000, 39.000000];
            state_name = "Delaware";
            average = 1607;
            colNum = 102.5;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Florida':
            state = [ -81.760254, 27.994402];
            state_name = "Florida";
            average = 1099;
            colNum = 103.1;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Georgia':
            state = [ -83.441162, 33.247875];
            state_name = "Georgia";
            average = 1661;
            colNum = 94.5;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Hawaii':
            state = [ -155.844437, 19.741755];
            state_name = "Hawaii";
            average = 2042;
            colNum = 168.9;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Idaho':
            state = [ -114.742043, 44.068203];
            state_name = "Idaho";
            average = 665;
            colNum = 105.5;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Illinois':
            state = [ -89.000000, 40.000000];
            state_name = "Illinois";
            average = 837;
            colNum = 93.7;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Indiana':
            state = [ -86.126976, 40.273502];
            state_name = "Indiana";
            average = 1108;
            colNum = 166.1;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Iowa':
            state = [ -93.581543, 42.032974];
            state_name = "Iowa";
            average = 982;
            colNum = 69.5;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Kansas':
            state = [ -98.000000, 38.500000];
            state_name = "Kansas";
            average = 977;
            colNum = 83.1;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Kentucky':
            state = [ -84.270020, 37.839333];
            state_name = "Kentucky";
            average = 1158;
            colNum = 82.3;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Louisiana':
            state = [ -92.329102, 30.391830];
            state_name = "Louisiana";
            average = 1201;
            colNum = 89.9;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Maine':
            state = [ -68.972168, 45.367584];
            state_name = "Maine";
            average = 850;
            colNum = 159.1;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Maryland':
            state = [ -76.641273, 39.045753];
            state_name = "Maryland";
            average = 838;
            colNum = 113.0;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Massachusetts':
            state = [ -71.382439, 42.407211];
            state_name = "Massachusetts";
            average = 3100;
            colNum = 131.1;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Michigan':
            state = [ -84.506836, 44.182205];
            state_name = "Michigan";
            average = 1023;
            colNum = 87.8;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Minnesota':
            state = [ -94.636230, 46.392410];
            state_name = "Minnesota";
            average = 1658;
            colNum = 97.2;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Mississippi':
            state = [ -90.000000, 33.000000];
            state_name = "Mississippi";
            average = 968;
            colNum = 83.3;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Missouri':
            state = [ -92.603760, 38.573936];
            state_name = "Missouri";
            average = 746;
            colNum = 66.1;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Montana':
            state = [ -109.533691, 46.965260];
            state_name = "Montana";
            average = 1780;
            colNum = 100.0;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Nebraska':
            state = [ -100.000000, 41.500000];
            state_name = "Nebraska";
            average = 1009;
            colNum = 11.5;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Nevada':
            state = [ -117.224121, 39.876019];
            state_name = "Nevada";
            average = 1506;
            colNum = 109.7;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'New Hampshire':
            state = [ -71.500000, 44.000000];
            state_name = "New Hampshire";
            average = 1077;
            colNum = 105.8;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'New Jersey':
            state = [ -74.871826, 39.833851];
            state_name = "New Jersey";
            average = 1407;
            colNum = 119.8;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'New Mexico':
            state = [ -106.018066, 34.307144];
            state_name = "New Mexico";
            average = 1235;
            colNum = 88.4;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'New York':
            state = [ -73.935242, 40.730610];
            state_name = "New York";
            average = 2006;
            colNum = 168.6;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'North Carolina':
            state = [ -80.793457, 35.782169];
            state_name = "North Carolina";
            average = 1306;
            colNum = 91.0;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'North Dakota':
            state = [ -100.437012, 47.650589];
            state_name = "North DakotaN";
            average = 748;
            colNum = 88.6;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Ohio':
            state = [ -82.996216, 40.367474];
            state_name = "Ohio";
            average = 1164;
            colNum = 82.6;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Oklahoma':
            state = [ -96.921387, 36.084621];
            state_name = "Oklahoma";
            average = 950;
            colNum = 82.2;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Oregon':
            state = [ -120.500000, 44.000000];
            state_name = "Oregon";
            average = 1060;
            colNum = 114.3;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Pennsylvania':
            state = [ -77.194527, 41.203323];
            state_name = "Pennsylvania";
            average = 1117;
            colNum = 94.6;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Rhode Island':
            state = [ -71.742332, 41.742325];
            state_name = "Rhode Island";
            average = 2318;
            colNum = 112.5;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'South Carolina':
            state = [ -81.163727, 33.836082];
            state_name = "South Carolina";
            average = 941;
            colNum = 89.3;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'South Dakota':
            state = [ -100.000000, 44.500000];
            state_name = 'South Dakota';
            average = 995;
            colNum = 192.9;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Tennessee':
            state = [ -86.660156, 35.860119];
            state_name = 'Tennessee';
            average = 1819;
            colNum = 89.9;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Texas':
            state = [ -100.000000, 31.000000];
            state_name = 'Texas';
            average = 1474;
            colNum = 94.2;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Utah':
            state = [ -111.950684, 39.419220];
            state_name = 'Utah';
            average = 1771;
            colNum = 114.2;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Vermont':
            state = [ -72.699997, 44.000000];
            state_name = 'Vermont';
            average = 1875;
            colNum = 100.8;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Virginia':
            state = [ -78.024902, 37.926868];
            state_name = 'Virginia';
            average = 1950;
            colNum = 104.2;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Washington':
            state = [ -120.740135, 47.751076];
            state_name = 'Washington';
            average = 2335;
            colNum = 121.9;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'West Virginia':
            state = [ -80.500000, 39.000000];
            state_name = 'West Virginia';
            average = 589;
            colNum = 78.1;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Wisconsin':
            state = [ -89.500000, 44.500000];
            state_name = 'Wisconsin';
            average = 1069;
            colNum = 93.9;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;
        case 'Wyoming':
            state = [ -107.290283, 43.075970];
            state_name = 'Wyoming';
            average = 1213;
            colNum = 91.66;
            myfetchFunc(state_name)
                .then(r => createMap(state, zoom, array));
            break;

        default:alert("Please, enter valid state name.")
            return;//if user does not enter state name correctly it stops flow of execution
    }
       document.getElementById('dcm').innerHTML =secondPanelHTML;//adds 2nd panel with info

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
    let state = document.getElementById('inputField2').value;

    let response = await fetch('https://job-salary-data.p.rapidapi.com/job-salary?job_title='+fieldValue+'&location='+state+'%2C%20usa&radius=200', {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': 'd3e79ff2c3msh4c778478623b817p183fcajsn482b1b5f8b42',
            'X-RapidAPI-Host': 'job-salary-data.p.rapidapi.com'
        }
    })
        .then(response => response.json())
        .then(data=>  average_salary = data.data[0].median_salary)
        .catch(err => {
            console.error(err);
        });
    if(average_salary != null){
        let n = new String(average_salary);
        if(n[0] == '1'){
        n = n.substring(0,3)+"k";
        }else{
            n = n.substring(0,2)+"k";
        }
    document.getElementById('avgsalarayHTML').innerText = n;
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


