const myForm = document.getElementById("myForm");

let num = 0;

var imageEl = document.createElement("img");
imageEl.id = "previewImage";
const uploadedImage = document.getElementById("image");
var uploadedImageSrc = "";
num++;
var key = "source" + num;
num--;

uploadedImage.addEventListener("change", event => {
    uploadedImageSrc = URL.createObjectURL(event.target.files[0]);
    localStorage.setItem(key, uploadedImageSrc);
});



myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    num++;
    alert("Enrollment successful!");
    var studentResult = document.getElementById("studentResult");

    var resultRow = document.getElementById("resultRow");
    resultRow.style.display = "inline-flex";

    var dataRow = document.createElement("div");
    dataRow.classList.add("enroll", "row");
    dataRow.id = "dataRow";
    studentResult.appendChild(dataRow);
    var studentRow = document.getElementById("dataRow");

    //Data of Enrolled Student
    var enrolledDataContainer = document.createElement("div");
    enrolledDataContainer.classList.add("e_data", "coloumn");
    enrolledDataContainer.id = "enrolledStudentData";
    studentRow.appendChild(enrolledDataContainer);

    var enrolledStudentData = document.getElementById("enrolledStudentData");

    //Enrolled Student Name
    const enrolledName = document.createElement("p");
    enrolledName.id = "enrolledNameEl";
    enrolledName.innerText = document.getElementById("name").value;
    enrolledName.classList.add("name-el")
    enrolledStudentData.appendChild(enrolledName);

    //Enrolled Student Gender
    const enrolledGender = document.createElement("p");
    enrolledGender.id = "enrolledGenderEl";

    var e_radio = document.getElementsByName("gender");

    for (let i = 0; i < e_radio.length; i++) {
        if (e_radio[i].checked) {
            enrolledGender.innerHTML = e_radio[i].value;
        }
    }
    enrolledStudentData.appendChild(enrolledGender);

    //Enrolled Student Email
    const enrolledEmail = document.createElement("p");
    enrolledEmail.id = "enrolledEmailEl";
    enrolledEmail.innerText = document.getElementById("email").value;
    enrolledStudentData.appendChild(enrolledEmail);

    //Enrolled Student Website
    const enrolledWebsite = document.createElement("p");
    enrolledWebsite.id = "enrolledWebsiteEl";
    enrolledStudentData.appendChild(enrolledWebsite);

    const enrolledLink = document.createElement("a");
    enrolledLink.href = document.getElementById("website").value;
    enrolledLink.innerText = document.getElementById("website").value;
    enrolledWebsite.appendChild(enrolledLink);

    //Enrolled Student Skills
    const studentSkills = document.createElement("p");
    studentSkills.id = "enrolledSkillsEl";
    

    let resultCheckbox = document.getElementsByName("skills");

    for (let i = 0; i < resultCheckbox.length; i++) {
        if (resultCheckbox[i].checked) {
            
                studentSkills.Text += resultCheckbox[i].value 
                studentSkills.innerText += " " + resultCheckbox[i].value;
        }
    }
    enrolledStudentData.appendChild(studentSkills);


    const break1=document.createElement("br");
    break1.id="line";
    enrolledStudentData.appendChild(break1);

    //Image of Student
    let resultImage = document.createElement("div");
    resultImage.classList.add("e_image", "coloumn");
    resultImage.id = "studentImage" + num;
    studentRow.appendChild(resultImage);
    let studentImage = document.getElementById("studentImage" + num);

    imageEl.src = localStorage.getItem(key);
    studentImage.appendChild(imageEl);


});