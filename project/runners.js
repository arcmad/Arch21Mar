//variable declarations
var Name, Contact, Category, Email, Gender, save, reset, Nuser, Dashboard;

//ID for 2 tabs
Nuser = document.getElementById('Newuser');
Dashboard = document.getElementById('Dashboard');

//ID for different links for 2 tabs
var Nuserbtn = document.getElementById('Newuserbtn');
var Dashboardbtn = document.getElementById('Dashboardbtn');

//button IDs
var Savebtn = document.getElementById('save');
var Updatebtn = document.getElementById('update');
var Resetbtn = document.getElementById('reset');
Updatebtn.style.display = "none"; // default behaviour of update button should be hidden

//ID collection of all fields
Name = document.getElementById('username');
Contact = document.getElementById('contact');
Category = document.getElementById('category');
Email = document.getElementById('email');

//Gender related class and IDs
Gender = document.getElementsByClassName('gend');
var mal = document.getElementById('male');
var femal=document.getElementById('female');


//Click function for new runner registration
Nuserbtn.onclick = function(){
    Nuser.style.display="block";
    Dashboard.style.display ="none";
}

//Click function for Dashboard
Dashboardbtn.onclick = function(){
	Nuser.style.display = "none";
	Dashboard.style.display = "block";
}

var Runnersarr = [];
Savebtn.addEventListener('click',function(){
var NameVal = Name.value;
var ContactVal = Contact.value;
var CategoryVal = Category.value;
var EmailVal = Email.value;
for(var i=0; i < Gender.length;i++){
    if(Gender[i].checked == true)
    {
        var GenderVal = gender[i].value;
    }

    var tr = document.createElement('tr');
    var NameTd = document.createElement('td');
	var contactTd = document.createElement('td');
	var emailTd = document.createElement('td');
	var categoryTd = document.createElement('td');
	var genderTd = document.createElement('td');

	var actionsTd = document.createElement('td');
    var edit = document.createElement('button');
    
    edit.innerHTML = '<i class="fas fa-edit"></i>';

    edit.className = "edit";


    var del = document.createElement('button');
    del.innerHTML = '<i class="far fa-window-close"></i>';
    del.className = "del";

    actionsTd.appendChild(edit);
    actionsTd.appendChild(del);

	NameTd.innerText = NameVal;
	contactTd.innerText = ContactVal;
	categoryTd.innerText = CategoryVal;
	emailTd.innerText = EmailVal;
	genderTd.innerText = GenderVal;

	tr.appendChild(NameTd);
	tr.appendChild(contactTd);
	tr.appendChild(emailTd);
	tr.appendChild(categoryTd);
	tr.appendChild(genderTd);
	tr.appendChild(actionsTd);
	
	datatopopulate.appendChild(tr);

	alert('Information saved to Dashboard')

	Name.value = "";
	Contact.value = "";
	Category.value = "empty";
	Email.value = "";

	for (var i = 0; i < Gender.length; i++) {
		Gender[i].checked = false
	}
}
})



