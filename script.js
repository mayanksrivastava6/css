const form = document.getElementById('myForm');
const modal = document.getElementById('popupModal');
const proceedBtn = document.getElementById('proceedBtn');
const cancelBtn = document.getElementById('cancelBtn');

form.onsubmit = function(event) {
    event.preventDefault(); 
    modal.style.display = 'flex'; 
};

proceedBtn.onclick = function() {
    modal.style.display = 'none'; 
    form.submit(); 
};

cancelBtn.onclick = function() {
    modal.style.display = 'none'; 
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } 