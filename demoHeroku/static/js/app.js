function calchours()
{
    let course_input = document.getElementById("course_input").value
    let start_month = document.getElementById("start_month").value
    let classes_taken = document.getElementById("classes_taken").value
    let expected_days = document.getElementById("expected_days").value
    
    console.log("course_input",course_input)
    console.log("start_month",start_month)
    console.log("classes_taken",classes_taken)
    console.log("expected_days",expected_days)

    json_obj = JSON.stringify({
        course_input_json: course_input,
        start_month_json: start_month,
        classes_taken_json: classes_taken,
        expected_days_json: expected_days
    })

    console.log(json_obj)

    fetch("/predict", {
        method: "POST", 
        body: json_obj,
        headers:
            {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            } 
    }).then(resp=>{
        return resp.json()
    }).then(resp=>{
        console.log(resp)
        document.getElementById("prediction").innerHTML=resp.Prediction
        console.log(resp.Prediction);
    })
}