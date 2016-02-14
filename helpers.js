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
