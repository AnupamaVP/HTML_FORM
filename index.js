

function handleSubmit(){
    let arr = JSON.parse( localStorage.getItem('users' )) || [];
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let userId = document.getElementById("userId").value;
    let email = document.getElementById("email").value;
    let pswd = document.getElementById("pswd").value;
    let pswdRepeat = document.getElementById("pswdRepeat").value;
    let submit = document.getElementById("submit");
    let obj = {};
    obj = { fn : firstname, ln : lastname, mail : email, uid : userId, pwd : pswd  }
    arr.push(obj);
    localStorage.setItem('users', JSON.stringify(arr));

}
function display(){
    let arr = JSON.parse( localStorage.getItem('users' )) || [];
    let table_body = document.getElementById("table_body");
    let newUser;
    let item;
    let len = arr.length;
    let obj={};
    for (let i=0; i<len; i++)
    { 
        newUser = document.createElement("tr");
        table_body.appendChild(newUser); 
        obj=arr[i];
        for (let prop in obj )
        {
            item = document.createElement("td"); 
            item.innerHTML =  obj[prop];
            newUser.appendChild(item);
        }
    }
    
    
}
function flush(){
    localStorage.clear();
    location.reload();
}