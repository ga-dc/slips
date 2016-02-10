

function slips(data_students){

  var data = {
    students: data_students,
    slips: data_slips,
    current: {
      index: 0,
      student: function(){
        return data.students[this.index];
      },
      slip: function(){
        var index = this.index - (data.slips.length * Math.floor(data.current.index / data.slips.length));
        return data.slips[index];
      }
    }
  }
  var view = {
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
        this.el.innerText = data.students.slice(0, data.current.index).join("\n");
      }
    },
    left: {
      el: document.getElementById("left"),
      update: function(){
        this.el.innerText = data.students.slice(data.current.index + 1).join("\n");
      }
    },
    place: function(){
      currentName.innerText = data.current.student();
      currentSlip.innerText = data.current.slip();
      view.gone.update();
      view.left.update();
      data.current.index++;
    },
    load: function(){
      var cohort = document.querySelector("#students_select input:checked");
      var topic = document.querySelector("#slips_select input:checked");
        data.students = data_students.sort();
        data.slips = data_slips[topic.value].sort();
        if(view.input.random.students.checked){
          data.students = shuffle(data.students);
        }
        if(view.input.random.slips.checked){
          data.slips = shuffle(data.slips);
        }
    }
  }
  var events = {
    next: function(){
      view.current.slip.className = "";
      if(data.current.index < data.students.length){
        view.place();
      }
    },
    prev: function(){
      if(data.current.index > 1){
        data.current.index = data.current.index - 2;
        view.place();
      }
    },
    reset: function(){
      data.current.index = 0;
      view.load();
      events.next();
    }
  }
  view.input.next.addEventListener("click", events.next);
  view.input.prev.addEventListener("click", events.prev);
  view.input.reset.addEventListener("click", events.reset);
  buildList("select_students", view.input.select.students, data.students);
  buildList("select_slips", view.input.select.slips, data.slips);
  view.load();
  view.place();
}
window.onload = function(){
  var getToken = document.querySelector(".js-get-token");
  console.log(getToken)
  getToken.addEventListener("click", function(evt){
    evt.preventDefault()
    window.open(this.href)
  })
  window.addEventListener("message", function(evt){
    var token = evt.data;
    if(token){
    var url = "http://garnet.wdidc.org/api/cohorts/4/memberships?api_token=" + token + "&callback=?";
    $.getJSON(url, function(users){
      if(!users.error){
        slips(users);
      }
    })
    }
  })

};
