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

function buildList(name, el, data){
  isChecked = false;
  for(var itemName in data){
    var option = document.createElement("LI");

    var input = document.createElement("INPUT");
    input.value = itemName;
    input.type = "radio";
    input.id = itemName;
    input.name = name;
    if(!isChecked){
      input.checked = true;
      isChecked = true;
    }

    var label = document.createElement("LABEL");
    label.htmlFor = itemName; 
    label.innerText = itemName;

    option.appendChild(input);
    option.appendChild(label);
    el.appendChild(option);
  }
}

function Slips(){

  var c = this;

  this.data = {
    students: data_students,
    slips: data_slips,
    gone: [],
    current: {
      index: 0,
      student: function(){
        return c.data.students[c.data.current.index]
      },
      slip: function(){
        return c.data.slips[c.data.current.index]
      }
    }
  }

  this.view = {
    current: {
      student: document.getElementById("currentName"),
      slip: document.getElementById("currentSlip")
    },
    select: {
      students: document.getElementById("students_select"),
      slips: document.getElementById("slips_select")
    },
    butt: {
      reset: document.getElementById("reset"),
      next: document.querySelector("main"),
      prev: document.getElementById("prev")
    },
    random: {
      students: document.getElementById("rand_students"),
      slips: document.getElementById("rand_slips")
    },
    amount: {
      left: document.getElementById("amntLeft")
    },
    gone: {
      el: document.getElementById("gone"),
      mark: function(student){
        c.data.gone.push(student);
        c.view.gone.el.innerText = c.data.gone.join("\n");
      }
    },
    place: function(){
      currentName.innerText = c.data.current.student(); 
      currentSlip.innerText = c.data.current.slip();
      c.view.amount.left.innerText = c.data.students.length - c.data.current.index;
      c.view.gone.mark(c.data.current.student());
      c.data.current.index++;
    },
    load: function(){
      var cohort = document.querySelector("#students_select input:checked");
      var topic = document.querySelector("#slips_select input:checked");
      c.data.students = data_students[cohort.value].sort();
      c.data.slips = data_slips[topic.value].sort();
      if(c.view.random.students.checked){
        c.data.students = shuffle(c.data.students);
      }
      if(c.view.random.slips.checked){
        c.data.slips = shuffle(c.data.slips);
      }
    }
  }

  this.events = {
    next: function(){
      if(c.data.current.index < c.data.students.length){
        c.view.place();
      }
    },
    prev: function(){
      if(c.data.current.index > 1){
        c.data.current.index = c.data.current.index - 2;
        c.data.used = c.data.gone.splice(-2, 2);
        c.view.place();
      }
    },
    reset: function(){
      c.data.current.index = 0;
      c.view.load();
      c.view.place();
    }
  }

  this.view.butt.next.addEventListener("click", this.events.next);
  this.view.butt.prev.addEventListener("click", this.events.prev);
  this.view.butt.reset.addEventListener("click", this.events.reset);

  buildList("select_students", this.view.select.students, this.data.students);
  buildList("select_slips", this.view.select.slips, this.data.slips);
  this.view.load();
  this.view.place();
}

window.onload = Slips;
