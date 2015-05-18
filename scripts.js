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
    current: {
      index: 0,
      student: function(){
        return c.data.students[c.data.current.index];
      },
      slip: function(){
        var index = c.data.current.index - (c.data.slips.length * Math.floor(c.data.current.index / c.data.slips.length));
        return c.data.slips[index];
      }
    }
  }

  this.view = {
    current: {
      student: document.getElementById("currentName"),
      slip: document.getElementById("currentSlip")
    },
    input: {
      reset: document.getElementById("reset"),
      next: document.getElementById("next"),
      prev: document.getElementById("prev"),
      time: document.getElementById("time"),
      select: {
        students: document.getElementById("students_select"),
        slips: document.getElementById("slips_select")
      },
      random: {
        students: document.getElementById("rand_students"),
        slips: document.getElementById("rand_slips")
      }
    },
    gone: {
      el: document.getElementById("gone"),
      update: function(){
        c.view.gone.el.innerText = c.data.students.slice(0, c.data.current.index).join("\n");
      }
    },
    left: {
      el: document.getElementById("left"),
      update: function(){
        c.view.left.el.innerText = c.data.students.slice(c.data.current.index + 1).join("\n");
      }
    },
    place: function(){
      currentName.innerText = c.data.current.student(); 
      currentSlip.innerText = c.data.current.slip();
      c.view.gone.update();
      c.view.left.update();
      c.data.current.index++;
    },
    load: function(){
      var cohort = document.querySelector("#students_select input:checked");
      var topic = document.querySelector("#slips_select input:checked");
      c.data.students = data_students[cohort.value].sort();
      c.data.slips = data_slips[topic.value].sort();
      if(c.view.input.random.students.checked){
        c.data.students = shuffle(c.data.students);
      }
      if(c.view.input.random.slips.checked){
        c.data.slips = shuffle(c.data.slips);
      }
    }
  }

  this.events = {
    next: function(){
      clearTimeout(c.events.timer);
      c.view.current.slip.className = "";
      if(c.data.current.index < c.data.students.length){
        c.view.place();
      }
      if(c.view.input.time.value){
        setTimeout(c.events.timer, c.view.input.time.value * 1000);
      }
    },
    prev: function(){
      if(c.data.current.index > 1){
        c.data.current.index = c.data.current.index - 2;
        c.view.place();
      }
    },
    reset: function(){
      c.data.current.index = 0;
      c.view.load();
      c.events.next();
    },
    timer: function(){
      c.view.current.slip.className = "overtime";
    }
  }

  this.view.input.next.addEventListener("click", this.events.next);
  this.view.input.prev.addEventListener("click", this.events.prev);
  this.view.input.reset.addEventListener("click", this.events.reset);

  buildList("select_students", this.view.input.select.students, this.data.students);
  buildList("select_slips", this.view.input.select.slips, this.data.slips);
  this.view.load();
  this.view.place();
}

window.onload = Slips;
