var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var countries = JSON.parse(data)
//FLAGS
    for(var obj of countries){
        console.log(obj.name.common,obj.flags);
    }
//countries ,region ,sub region and populations 

    for(var obj of countries){
        console.log(obj.name.common , obj.region,obj.subregion, obj.population);
    }
    }