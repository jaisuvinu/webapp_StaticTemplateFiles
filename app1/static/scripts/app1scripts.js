function  checkLoginFormData(){
    var userid = loginform.name1.value
    var pswd = loginform.name2.value
    if(userid ==""){
        //alert ('Please enter userid')
        document.getElementById('s1').innerHTML='* Please enter userid'
    return false
    }
    if(pswd ==""){
       // alert ('Please enter Password')
       document.getElementById('s2').innerHTML='* Please enter password'
    return false
    }
    else{
        alert('Valid Data')
        return true
    }
}

function  clearLoginFormData() {
    var v=confirm('Are you sure to delete ?')
    if (v==true){
        return true
    }
    else{
        return false
    }
}

function clearRegFormData() {
    var v=confirm('Are you sure to delete ?')
    if (v==true){
        return true
    }
    else{
        return false
    }
}
function clickRegFormData() {
    var userid = regform.name1.value
    var pswd = regform.name2.value
    var city = regform.name3.value
    var webServer =regform.name4.value
    if(userid ==""){
        //alert ('Please enter userid')
        document.getElementById('s1').innerHTML='*Please enter userid'
    return false
    }
    if(pswd ==""){
       // alert ('Please enter Password')
       document.getElementById('s2').innerHTML='*Please enter password'
    return false
    }
    if (city ==""){
        //alert('Please enter city')
        document.getElementById('s3').innerHTML='*Please enter City of Employment'
    }
    if (webServer =""){
        alert('Please choose a webserver')
    }
    else{
        alert('Valid Data')
        return true
    }
}