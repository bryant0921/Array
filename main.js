name_of_student_array=[];

function Submit()
{
    var name_1= document.getElementById("Name_Of_Student_1").value;
    var name_2= document.getElementById("Name_Of_Student_2").value;
    var name_3= document.getElementById("Name_Of_Student_3").value;
    var name_4= document.getElementById("Name_Of_Student_4").value;
    name_of_student_array.push(name_1);
    name_of_student_array.push(name_2);
    name_of_student_array.push(name_3);
    name_of_student_array.push(name_4);
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML= name_of_student_array;
    document.getElementById("Submit").style.display="none";
    document.getElementById("Sort").style.display="inline-block";
}
function Sort()
{
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML= name_of_student_array;
}