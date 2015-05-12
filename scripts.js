function Controller(){

  function addOptions(element, nodes){
    for(var x = 0; x < nodes.length; x++){
      element.appendChild(nodes[x]);
    }
  }

  function getOptions(name, data){
    var list = document.createElement("UL");
    for(var itemName in data){
      var option = document.createElement("LI");

      var input = document.createElement("INPUT");
      input.value = itemName;
      input.type = "radio";
      input.id = itemName;
      input.name = name;

      var label = document.createElement("LABEL");
      label.for = itemName; 
      label.innerText = itemName;

      option.appendChild(input);
      option.appendChild(label);
      list.appendChild(option);
    }
    return list;
  }

  function shuffle(array){
    var currentIndex = array.length;
    var randomIndex;
    var temporaryValue;
    while(currentIndex > 0){
      randomIndex  = Math.floor(Math.random() * currentIndex);
      currentIndex = currentIndex - 1;

      temporaryValue       = array[currentIndex];
      array[currentIndex]  = array[randomIndex];
      array[randomIndex]   = temporaryValue;
    }
    return array;
  }

  function get(){
    students.names = document.getElementById("students").value.split("\n");
    slips = document.getElementById("slips").value.split("\n");
    if(document.getElementById("rand_students").checked){
      students.names = shuffle(students.names);
    }
    if(document.getElementById("rand_slips").checked){
      slips = shuffle(slips);
    }
  }

  function allocate(){
    for(var x = 0; x < students.names.length; x++){
      students.all.push({
        name: students.names[x],
        index: x,
        slip: slips[x]   
      });              
    }
  }

  function next(){
    if(students.currentIndex < students.all.length){
      place();
    }
  }

  function prev(){
    if(students.currentIndex > 1){
      students.currentIndex = students.currentIndex - 2;
      place();
    }
  }

  function place(){
    var student = students.all[students.currentIndex];
    currentName.innerText = student.name;
    currentSlip.innerText = student.slip;
    students.currentIndex++;
  }

  function reset(){
    used = [];
    get();
    allocate();
    next();
  }

  var students = {
    all: [],
    names: [],
    currentIndex: 0
  }
  var slips = [];

  var currentName = document.getElementById("currentName"); 
  var currentPrompt = document.getElementById("currentSlip");
  var studentsSelect = document.getElementById("students_select");
  var slipsSelect = document.getElementById("slips_select");

  document.getElementById("reset").addEventListener("click", reset);
  document.querySelector("main").addEventListener("click", next);
  document.getElementById("prev").addEventListener("click", prev);

  addOptions(studentsSelect, getOptions("classes_select", data_classes).childNodes);
  addOptions(slipsSelect, getOptions("slips_select", data_slips).childNodes);
  reset();

}

window.onload = function(){
  new Controller();
}
