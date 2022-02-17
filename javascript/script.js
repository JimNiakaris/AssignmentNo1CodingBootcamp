const students = [];
students.length = 4;
const trainers = [];
trainers.length = 4;
const assignments = [];
assignments.length = 4;
const courses = [];
courses.length = 4;
const enroll = [];
enroll.length = 4;

let mypass = document.getElementById("pass");
mypass.onfocus = function () {
    document.getElementById("requirements").style.display = "block";
}
mypass.onblur = function () {
    document.getElementById("requirements").style.display = "none";
}

//Password requirements check
mypass.onkeyup = function passcheck() {
    let code = document.getElementById("pass").value;
    let leT = document.getElementById("leT");
    let spE = document.getElementById("spE");
    let nuM = document.getElementById("nuM");
    let chR = document.getElementById("chR");
    let upperCase = /[a-z/A-Z]/g;
    let syMbol = /[!@#$%^&*/()-/+/=/_]/g;
    let nuMber = /[0-9]/g;

    if (code.match(upperCase)) {
        leT.classList.remove("invalid")
        leT.classList.add("valid")
    }
    else {
        leT.classList.add("invalid")
        leT.classList.remove("valid")
    }
    if (code.match(syMbol)) {
        spE.classList.remove("invalid")
        spE.classList.add("valid")
    }
    else {
        spE.classList.add("invalid")
        spE.classList.remove("valid")
    }
    if (code.match(nuMber)) {
        nuM.classList.remove("invalid")
        nuM.classList.add("valid")
    }
    else {
        nuM.classList.add("invalid")
        nuM.classList.remove("valid")
    }
    if (code.length >= 8 && code.length <= 14) {
        chR.classList.remove("invalid")
        chR.classList.add("valid")
    }
    else {
        chR.classList.add("invalid")
        chR.classList.remove("valid")
    }
}

function addTrainer() {
    let tName = document.getElementById("tName");
    let tSurName = document.getElementById("tSurname");
    let subject = document.getElementById("tSubject");
    let trainerId = [tName.value, tSurName.value, subject.value];
    let i = 0;
    if (trainers[3] != undefined) {
        document.getElementById("tError").style.display = "block"
        document.getElementById("tError").innerHTML = "No more positions left"
    }
    if (tName.value == null || tName.value == "" || tSurName.value == null || tSurName.value == ""
        || subject.value == null || subject.value == "") {
        tName.classList.add("inputsRed")
        tName.classList.remove("inputs")
        tSurName.classList.add("inputsRed")
        tSurName.classList.remove("inputs")
        subject.classList.add("inputsRed")
        subject.classList.remove("inputs")
        document.getElementById("tError").style.display = "block"
    }
    else {
        while (i < trainers.length) {
            if (trainers[i] == undefined) {
                trainers[i] = trainerId;
                let textDisp = ["Name: " + trainerId[0], "Surname: " + trainerId[1], "Subject: " + trainerId[2]];
                createNewTrainer(textDisp, i);
                i = trainers.length;
                tName.classList.remove("inputsRed")
                tName.classList.add("inputs")
                tSurName.classList.remove("inputsRed")
                tSurName.classList.add("inputs")
                subject.classList.remove("inputsRed")
                subject.classList.add("inputs")
                document.getElementById("tError").style.display = "none"
            }
            else
                i++;
        }
    }

}
function editTrainer() {
    let tName = document.getElementById("tName");
    let tSurName = document.getElementById("tSurname");
    let tSubject = document.getElementById("tSubject");
    let trainerId = [tName.value, tSurName.value, tSubject.value];
    let index = document.getElementById("dumy").value;
    trainers[index] = trainerId;
    if (tName.value == null || tName.value == "" || tSurName.value == null || tSurName.value == ""
        || tSubject.value == null || tSubject.value == "") {
        tName.classList.add("inputsRed")
        tName.classList.remove("inputs")
        tSurName.classList.add("inputsRed")
        tSurName.classList.remove("inputs")
        tSubject.classList.add("inputsRed")
        tSubject.classList.remove("inputs")
        document.getElementById("tError").style.display = "block"
    }
    else {
        let textDisp = ["Name: " + trainerId[0], "Surname: " + trainerId[1], "Subject: " + trainerId[2]];
        document.getElementById("li" + index).innerText = textDisp;
        tName.classList.remove("inputsRed")
        tName.classList.add("inputs")
        tSurName.classList.remove("inputsRed")
        tSurName.classList.add("inputs")
        tSubject.classList.remove("inputsRed")
        tSubject.classList.add("inputs")
        document.getElementById("tError").style.display = "none"
    }

}


//function gia eisagwgh neas epiloghs sta select option me analoges class
function createNewTrainer(newList, index) {
    let newItem = document.createElement("li");
    let textNode = document.createTextNode(newList);
    newItem.appendChild(textNode);
    document.getElementById("trainers").appendChild(newItem);
    newItem.id = "li" + index
    newItem.value = index + 1
    newItem.onclick = function () {
        var newArr = Array.from(trainers[index]);
        document.getElementById("dumy").value = index
        document.getElementById("tName").value = newArr[0];
        document.getElementById("tSurname").value = newArr[1];
        document.getElementById("tSubject").value = newArr[2];
    };
}
function addCourse() {
    let cName = document.getElementById("cName");
    let cStream = document.getElementById("cStream");
    let cType = document.getElementById("cType");
    let courseId = [cName.value, cStream.value, cType.value];
    let i = 0;
    if (courses[3] != undefined) {
        document.getElementById("cError").style.display = "block"
        document.getElementById("cError").innerHTML = "No more positions left"
    }
    if (cName.value == null || cName.value == "" || cStream.value == null || cStream.value == ""
        || cType.value == null || cType.value == "") {
        cName.classList.add("inputsRed")
        cName.classList.remove("inputs")
        cStream.classList.add("inputsRed")
        cStream.classList.remove("inputs")
        cType.classList.add("inputsRed")
        cType.classList.remove("inputs")
        document.getElementById("cError").style.display = "block"
    }
    else {
        while (i < courses.length) {
            if (courses[i] == undefined) {
                courses[i] = courseId;
                let textDisp = ["Name: " + courseId[0], "Stream: " + courseId[1], "Type: " + courseId[2]];
                createNewCourse(textDisp, i);
                i = courses.length;
                cName.classList.remove("inputsRed")
                cName.classList.add("inputs")
                cStream.classList.remove("inputsRed")
                cStream.classList.add("inputs")
                cType.classList.remove("inputsRed")
                cType.classList.add("inputs")
                document.getElementById("cError").style.display = "none"
            }
            else
                i++;
        }
    }
}

function editCourse() {
    let cName = document.getElementById("cName");
    let cStream = document.getElementById("cStream");
    let cType = document.getElementById("cType");
    let courseId = [cName.value, cStream.value, cType.value];
    let index = document.getElementById("dumy3").value;
    courses[index] = courseId;
    if (cName.value == null || cName.value == " " || cStream.value == null || cStream.value == ""
        || cType.value == null || cType.value == " ") {
        cName.classList.add("inputsRed")
        cName.classList.remove("inputs")
        cStream.classList.add("inputsRed")
        cStream.classList.remove("inputs")
        cType.classList.add("inputsRed")
        cType.classList.remove("inputs")
        document.getElementById("cError").style.display = "block"
    }
    else {
        let textDisp = ["Name: " + courseId[0], "Stream: " + courseId[1], "Type: " + courseId[2]];
        document.getElementById("li" + index).innerText = textDisp;
        cName.classList.remove("inputsRed")
        cName.classList.add("inputs")
        cStream.classList.remove("inputsRed")
        cStream.classList.add("inputs")
        cType.classList.remove("inputsRed")
        cType.classList.add("inputs")
        document.getElementById("cError").style.display = "none"
    }

}

function createNewCourse(newList, index) {
    let newItem = document.createElement("li");
    let textNode = document.createTextNode(newList);
    newItem.appendChild(textNode);
    document.getElementById("courses").appendChild(newItem);
    newItem.id = "li" + index
    newItem.value = index + 1
    newItem.onclick = function () {
        var newArr2 = Array.from(courses[index]);
        document.getElementById("dumy3").value = index
        document.getElementById("cName").value = newArr2[0];
        document.getElementById("cStream").value = newArr2[1];
        document.getElementById("cType").value = newArr2[2];
    };
}


function addAssign() {
    let asTitle = document.getElementById("asTitle");
    let asDescr = document.getElementById("asDescr");
    let asTotalMark = document.getElementById("asTotalMark");
    let assignmentId = [asTitle.value, asDescr.value, asTotalMark.value];
    let i = 0;
    if (assignments[3] != undefined) {
        document.getElementById("aError").style.display = "block"
        document.getElementById("aError").innerHTML = "No more positions left"
    }
    if (asTitle.value == null || asTitle.value == " " || asDescr.value == null || asDescr.value == ""
        || asTotalMark.value == null || asTotalMark.value == " ") {
        asTitle.classList.add("inputsRed")
        asTitle.classList.remove("inputs")
        asDescr.classList.add("inputsRed")
        asDescr.classList.remove("inputs")
        asTotalMark.classList.add("inputsRed")
        asTotalMark.classList.remove("inputs")
        document.getElementById("aError").style.display = "block"
    }
    else {
        while (i < assignments.length) {
            if (assignments[i] == undefined) {
                assignments[i] = assignmentId;
                let textDisp = ["Name: " + assignmentId[0], "Stream: " + assignmentId[1], "Type: " + assignmentId[2]];
                createNewAssign(textDisp, i);
                i = assignments.length;
                asTitle.classList.remove("inputsRed")
                asTitle.classList.add("inputs")
                asDescr.classList.remove("inputsRed")
                asDescr.classList.add("inputs")
                asTotalMark.classList.remove("inputsRed")
                asTotalMark.classList.add("inputs")
                document.getElementById("aError").style.display = "none"
            }
            else
                i++;
        }
    }

}

function editAssign() {
    let asTitle = document.getElementById("asTitle");
    let asDescr = document.getElementById("asDescr");
    let asTotalMark = document.getElementById("asTotalMark");
    let assignmentId = [asTitle.value, asDescr.value, asTotalMark.value];
    let index = document.getElementById("dumy2").value;
    assignments[index] = assignmentId;
    if (asTitle.value == null || asTitle.value == " " || asDescr.value == null || asDescr.value == " "
        || asTotalMark.value == null || asTotalMark.value == " ") {
        asTitle.classList.add("inputsRed")
        asTitle.classList.remove("inputs")
        asDescr.classList.add("inputsRed")
        asDescr.classList.remove("inputs")
        asTotalMark.classList.add("inputsRed")
        asTotalMark.classList.remove("inputs")
        document.getElementById("aError").style.display = "block"
    }
    else {
        let textDisp = ["Name: " + assignmentId[0], "Stream: " + assignmentId[1], "Type: " + assignmentId[2]];
        document.getElementById("li" + index).innerText = textDisp;
        asTitle.classList.remove("inputsRed")
        asTitle.classList.add("inputs")
        asDescr.classList.remove("inputsRed")
        asDescr.classList.add("inputs")
        asTotalMark.classList.remove("inputsRed")
        asTotalMark.classList.add("inputs")
        document.getElementById("aError").style.display = "none"
    }

}

function createNewAssign(newList, index) {
    let newItem = document.createElement("li");
    let textNode = document.createTextNode(newList);
    newItem.appendChild(textNode);
    document.getElementById("assigns").appendChild(newItem);
    newItem.id = "li" + index
    newItem.value = index + 1
    newItem.onclick = function () {
        var newArr2 = Array.from(assignments[index]);
        document.getElementById("dumy2").value = index
        document.getElementById("asTitle").value = newArr2[0];
        document.getElementById("asDescr").value = newArr2[1];
        document.getElementById("asTotalMark").value = newArr2[2];
    };
}


function addStudent() {
    let sName = document.getElementById("sName");
    let sSurName = document.getElementById("sSurname");
    let subject = document.getElementById("sSubject");
    let studentId = [sName.value, sSurName.value, subject.value];
    let i = 0;
    if (students[3] != undefined) {
        document.getElementById("sError").style.display = "block"
        document.getElementById("sError").innerHTML = "No more positions left"
    }
    if (sName.value == null || sName.value == "" || sSurName.value == null || sSurName.value == ""
        || subject.value == null || subject.value == "") {
        sName.classList.add("inputsRed")
        sName.classList.remove("inputs")
        sSurName.classList.add("inputsRed")
        sSurName.classList.remove("inputs")
        subject.classList.add("inputsRed")
        subject.classList.remove("inputs")
        document.getElementById("sError").style.display = "block"
    }
    else {
        while (i < students.length) {
            if (students[i] == undefined) {
                students[i] = studentId;
                let textDisp = ["Name: " + studentId[0], "Surname: " + studentId[1], "Subject: " + studentId[2]];
                createNewStudent(textDisp, i);
                i = students.length;
                sName.classList.remove("inputsRed")
                sName.classList.add("inputs")
                sSurName.classList.remove("inputsRed")
                sSurName.classList.add("inputs")
                subject.classList.remove("inputsRed")
                subject.classList.add("inputs")
                document.getElementById("sError").style.display = "none"
            }
            else
                i++;
        }
    }

}

function editStudent() {
    let sName = document.getElementById("sName");
    let sSurName = document.getElementById("sSurname");
    let subject = document.getElementById("sSubject");
    let studentId = [sName.value, sSurName.value, subject.value];
    let index = document.getElementById("dumy").value;
    students[index] = studentId;
    if (sName.value == null || sName.value == "" || sSurName.value == null || sSurName.value == ""
        || subject.value == null || subject.value == "") {
        sName.classList.add("inputsRed")
        sName.classList.remove("inputs")
        sSurName.classList.add("inputsRed")
        sSurName.classList.remove("inputs")
        subject.classList.add("inputsRed")
        subject.classList.remove("inputs")
        document.getElementById("sError").style.display = "block"
    }
    else {
        let textDisp = ["Name: " + studentId[0], "Surname: " + studentId[1], "Subject: " + studentId[2]];
        document.getElementById("li" + index).innerText = textDisp;
        sName.classList.remove("inputsRed")
        sName.classList.add("inputs")
        sSurName.classList.remove("inputsRed")
        sSurName.classList.add("inputs")
        subject.classList.remove("inputsRed")
        subject.classList.add("inputs")
        document.getElementById("sError").style.display = "none"
    }

}

//function gia eisagwgh neas epiloghs sta select option me analoges class
function createNewStudent(newList, index) {
    let newItem = document.createElement("li");
    let textNode = document.createTextNode(newList);
    newItem.appendChild(textNode);
    document.getElementById("students").appendChild(newItem);
    newItem.id = "li" + index
    newItem.value = index + 1
    newItem.onclick = function () {
        var newArr = Array.from(students[index]);
        document.getElementById("dumy").value = index
        document.getElementById("sName").value = newArr[0];
        document.getElementById("sSurname").value = newArr[1];
        document.getElementById("sSubject").value = newArr[2];
    };
}

function addEnrollment() {
    let stName = document.getElementById("stName");
    let stSurName = document.getElementById("stSurname");
    let crName = document.getElementById("crName");
    let crStream = document.getElementById("crStream");
    let crType = document.getElementById("crType");
    let asgTitle = document.getElementById("asgTitle");
    let asgDescr = document.getElementById("asgDescr");
    let asgTotalMark = document.getElementById("asgTotalMark");
    let enrollId = [stName.value, stSurName.value, crName.value, crStream.value, crType.value, asgTitle.value,
    asgDescr.value, asgTotalMark.value];
    let i = 0;
    if (enroll[3] != undefined) {
        document.getElementById("eError").style.display = "block"
        document.getElementById("eError").innerHTML = "No more positions left"
    }
    if (stName.value == null || stName.value == "" || stSurName.value == null || stSurName.value == ""
        || crName.value == null || crName.value == "" || crStream.value == null || crStream.value == ""
        || crType.value == null || crType.value == "" || asgTitle.value == null || asgTitle.value == ""
        || asgDescr.value == null || asgDescr.value == " " || asgTotalMark.value == null || asgTotalMark.value == "") {
        stName.classList.add("inputsRed")
        stName.classList.remove("inputs")
        stSurName.classList.add("inputsRed")
        stSurName.classList.remove("inputs")
        crName.classList.add("inputsRed")
        crName.classList.remove("inputs")
        crStream.classList.add("inputsRed")
        crStream.classList.remove("inputs")
        crType.classList.add("inputsRed")
        crType.classList.remove("inputs")
        asgTitle.classList.add("inputsRed")
        asgTitle.classList.remove("inputs")
        asgDescr.classList.add("inputsRed")
        asgDescr.classList.remove("inputs")
        asgTotalMark.classList.add("inputsRed")
        asgTotalMark.classList.remove("inputs")
        document.getElementById("eError").style.display = "block"
    }
    else {
        while (i < enroll.length) {
            if (enroll[i] == undefined) {
                enroll[i] = enrollId;
                let textDisp = ["Name: " + enrollId[0], "Surname: " + enrollId[1], "Course: " + enrollId[2]
                    + "Course type: " + enrollId[3] + "Course stream: " + enrollId[4]
                    + "Assignment title: " + enrollId[5] + "Assignment descript: " + enrollId[6] + "Assignment mark: " + enrollId[7]];
                createEnrollment(textDisp, i);
                i = enroll.length;
                stName.classList.remove("inputsRed")
                stName.classList.add("inputs")
                stSurName.classList.remove("inputsRed")
                stSurName.classList.add("inputs")
                crName.classList.remove("inputsRed")
                crName.classList.add("inputs")
                crStream.classList.remove("inputsRed")
                crStream.classList.add("inputs")
                crType.classList.remove("inputsRed")
                crType.classList.add("inputs")
                asgTitle.classList.remove("inputsRed")
                asgTitle.classList.add("inputs")
                asgDescr.classList.remove("inputsRed")
                asgDescr.classList.add("inputs")
                asgTotalMark.classList.remove("inputsRed")
                asgTotalMark.classList.add("inputs")
                document.getElementById("eError").style.display = "none"
            }
            else
                i++;
        }
    }

}

function editEnrollment() {
    let stName = document.getElementById("stName");
    let stSurName = document.getElementById("stSurname");
    let crName = document.getElementById("crName");
    let crStream = document.getElementById("crStream");
    let crType = document.getElementById("crType");
    let asgTitle = document.getElementById("asgTitle");
    let asgDescr = document.getElementById("asgDescr");
    let asgTotalMark = document.getElementById("asgTotalMark");
    let index = document.getElementById("dumy1").value;
    let enrollId = [stName, stSurName, crName, crStream, crType, asgTitle, asgDescr, asgTotalMark];
    enrollId[index] = enrollId;

    if (stName.value == null || stName.value == "" || stSurName.value == null || stSurName.value == ""
        || crName.value == null || crName.value == "" || crStream.value == null || crStream.value == ""
        || crType.value == null || crType.value == "" || asgTitle.value == null || asgTitle.value == ""
        || asgDescr.value == null || asgDescr.value == "" || asgTotalMark.value == null || asgTotalMark.value == "") {
        stName.classList.add("inputsRed")
        stName.classList.remove("inputs")
        stSurName.classList.add("inputsRed")
        stSurName.classList.remove("inputs")
        crName.classList.add("inputsRed")
        crName.classList.remove("inputs")
        crStream.classList.add("inputsRed")
        crStream.classList.remove("inputs")
        crType.classList.add("inputsRed")
        crType.classList.remove("inputs")
        asgTitle.classList.add("inputsRed")
        asgTitle.classList.remove("inputs")
        asgDescr.classList.add("inputsRed")
        asgDescr.classList.remove("inputs")
        asgTotalMark.classList.add("inputsRed")
        asgTotalMark.classList.remove("inputs")
        document.getElementById("eError").style.display = "block"
    }
    else {
        let textDisp = ["Name: " + enrollId[0], "Surname: " + enrollId[1], "Course: " + enrollId[2]
            + "Course type: " + enrollId[3] + "Course stream: " + enrollId[4]
            + "Assignment title: " + enrollId[5] + "Assignment descript: " + enrollId[6] + "Assignment mark: " + enrollId[7]];
        document.getElementById("li" + index).innerText = textDisp;
        stName.classList.remove("inputsRed")
        stName.classList.add("inputs")
        stSurName.classList.remove("inputsRed")
        stSurName.classList.add("inputs")
        crName.classList.remove("inputsRed")
        crName.classList.add("inputs")
        crStream.classList.remove("inputsRed")
        crStream.classList.add("inputs")
        crType.classList.remove("inputsRed")
        crType.classList.add("inputs")
        asgTitle.classList.remove("inputsRed")
        asgTitle.classList.add("inputs")
        asgDescr.classList.remove("inputsRed")
        asgDescr.classList.add("inputs")
        asgTotalMark.classList.remove("inputsRed")
        asgTotalMark.classList.add("inputs")
        document.getElementById("eError").style.display = "none"
    }


}

//function gia eisagwgh neas epiloghs sta select option me analoges class
function createEnrollment(newList, index) {
    let newItem = document.createElement("li");
    let textNode = document.createTextNode(newList);
    newItem.appendChild(textNode);
    document.getElementById("enrollments").appendChild(newItem);
    newItem.id = "li" + index
    newItem.value = index + 1
    newItem.onclick = function () {
        var newArr = Array.from(enroll[index]);
        document.getElementById("dumy1").value = index
        document.getElementById("stName").value = newArr[0];
        document.getElementById("stSurname").value = newArr[1];
        document.getElementById("crName").value = newArr[2];
        document.getElementById("crStream").value = newArr[3];
        document.getElementById("crType").value = newArr[4];
        document.getElementById("asgTitle").value = newArr[5];
        document.getElementById("asgDescr").value = newArr[6];
        document.getElementById("asgTotalMark").value = newArr[7];
    }
}

