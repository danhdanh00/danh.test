let arr= [];


const sumbitTask = () => {
    let textValue= document.getElementById("text").value.trim();
    let dateValue= document.getElementById("date").value;
    let optionValue= document.getElementById("option").value;

    if (!textValue) {
        alert ("Vui lòng nhập việc cần làm")
        return;
      } 
    console.log(textValue,dateValue,optionValue);

    let listTask ={
        textValue: textValue,
        dateValue: dateValue,
        optionValue: optionValue,
    }
    arr = [...arr, listTask];
    console.log("listTask",listTask);
   
    let tableTask = '';
    for (const task of arr) {
        listTable = `<p> ${task.textValue} </p>` + `<p> ${task.dateValue} </p>`+ `<p> ${task.optionValue} </p>`;
        tableTask = tableTask + listTable;
        document.querySelector("#table").innerHTML = tableTask;
    }

}
document.getElementById("submit").onclick = sumbitTask;