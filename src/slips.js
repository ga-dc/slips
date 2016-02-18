var slips = (function(){
  var token;

  return {
    login: login,
    getToken: getToken,
    getStudents: getStudents
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

  function getStudents(url, callback){
    $.getJSON(url, function(response){
      callback(response.filter(function(res){
        return !res.is_admin && res.status === "active"
      }))
    })
  }

})()
