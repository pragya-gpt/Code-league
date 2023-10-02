let url= "https://kontests.net/api/v1/all";

let p = fetch(url);
p.then((response)=>{
    return response.json();
}).then((contests)=>{
    console.log(contests);
    ihtml= "";
    for(item in contests)
    {
        console.log(contests[item]);
        ihtml += `<div class=card>
            <h4>Contest name:</h4> <h3>${contests[item].name}</h4>
            </br></br><h5 id="link">Visit :  </h5><a href="${contests[item].url}" target="_blank"><button>click</button></a>
            </br></br><h5>Start time : ${contests[item].start_time}</h5>
            </br><h5>End time : ${contests[item].end_time}</h5>
        </div>` 
    }
    cardbox.innerHTML = ihtml;
});