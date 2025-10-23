document.addEventListener('DOMContentLoaded', ()=>{
    let form = document.getElementById('myform');
    let showDiv = document.querySelector('.showremark');

    // hiding the div
    showDiv.style.display = 'none';

    // add submit event to the form
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let inputName = document.getElementById('name').value;
        let studentNames = ["Charles", "Ibeh", "Goodness"];
        if (studentNames.includes(inputName) || inputName === ""){
            
        }
        else{
            let message = document.createElement('p')
            message.textContent = "You are not a student. Kindly check to verify that the name you put in is correctly spelled"
            showDiv.style.display = 'block';
            showDiv.innerHTML = "";
            showDiv.append(message)
            return;
        };
    

        let maths = document.getElementById('maths').value;
        let english = document.getElementById('english').value;
        let chemistry = document.getElementById('chemistry').value;
        let physics = document.getElementById('physics').value;

        if( maths === "" || english === "" || chemistry === "" || physics === "") {
            alert('Please fill the empty field(s).');
            return;
        };

        console.log(typeof maths);
        let mathsScore = parseInt(maths);
        let englishScore = parseInt(english);
        let chemistryScore = parseInt(chemistry);
        let physicsScore = parseInt(physics);

        let average = (mathsScore + englishScore + chemistryScore + physicsScore) / 4;
        let remark;
        let cutoff = 50.5;
        if (average >= 50.5){
            remark = `Congratulations you passed with average of ${average}. YOU ARE WELCOME TO THE AFTERLIFE!!!`
        }
        else(
            remark = `You are a failure with average of ${average}. GO TO HELL FOR ALL I CARE!!!`
        )
        let result = document.createElement('p');
        result.textContent = remark;
        showDiv.style.display = 'block';
        showDiv.innerHTML = "";
        showDiv.append(result);
        

    })
});