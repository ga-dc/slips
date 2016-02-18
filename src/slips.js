var slips = (function(){
  var token;

  return {
    login: login,
    getToken: getToken,
    getStudents: getStudents,
    matchQuestionsWithStudents: matchQuestionsWithStudents
  }

  function login(url, callback){
    window.addEventListener("message", function(event){
      if(/garnet/.test(event.origin)){
        token = event.data;
        localStorage.setItem("slips.api_token",token)
        callback(event.data);
      }
    })
    window.open(url)
  }

  function getToken(){
    return localStorage.getItem("slips.api_token") || login();
  }

  function getStudents(url, callback, options){
    for(var opt in options){
      url += "&" + opt + "=" + options[opt]
    }
    $.getJSON(url + "&callback=?", function(response){
      callback(response.filter(function(res){
        return !res.is_admin && res.status === "active"
      }))
    })
  }

  function matchQuestionsWithStudents(students, week){
    return students.map(function(student, i){
      return {
        student: student,
        slip: data_slips[week][i]
      }
    })
  }

})()
