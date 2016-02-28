var apiUrl = "https://garnet.wdidc.org/api/cohorts/4/memberships"

test("slips", function( assert ) {
  assert.equal(typeof slips, "object");
});

test("slips.login", function( assert ) {
  assert.equal(typeof slips.login, "function");
  var url = "http://garnet.wdidc.org/api/send_api_token"
  var done = assert.async();
  slips.login(url, function(token){
    assert.ok(token)
    assert.ok(slips.getToken())
    assert.ok(localStorage.getItem("slips.api_token"))
    done()
  })
});

test("slips.getStudents", function(assert){
  var url = apiUrl + "?api_token=" + slips.getToken();
  var done = assert.async();
  slips.getStudents(url, function(students){
    assert.equal(students.length > 0, true);
    var admins = students.filter(function(student){
      return student.is_admin
    })
    assert.equal(admins.length === 0, true)
    var inactives = students.filter(function(student){
      return student.status !== "active"
    })
    assert.equal(inactives.length === 0, true)
    done();
  })
})

test("slips.matchQuestionsWithStudents", function(assert){
  var done = assert.async();
  var url = apiUrl + "?api_token=" + slips.getToken();
  slips.getStudents(url, function(students){
    var pairings = slips.matchQuestionsWithStudents(students, "Week 01")
    assert.equal(pairings.constructor.name, "Array")
    assert.ok(Object.keys(pairings[0]).includes("slip"))
    assert.ok(Object.keys(pairings[0]).includes("student"))
    // Make sure every student has a slip
    assert.ok(pairings[pairings.length-1].slip)
    done()
  }, {
    tag: "jesse|joe|nick"
  })
})

test("slips.", function(assert){
  
})
