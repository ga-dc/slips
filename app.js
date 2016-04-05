"use strict";
(function(){
  var shuffle = function(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
  angular
  .module("slips", [])
  .controller("slipsController", function(){
    this.categories = Object.keys(slips)
    this.update = function(){
      this.slips = []
      for( var category in this.selected ){
	if(this.selected[category]){
	  this.slips.push(...slips[category]) 
	}
      }
      this.slips = shuffle(this.slips)
      this.currentSlip = this.slips[0]
      this.currentSlipIndex = 0
    }
    this.next = function(e){
      if(e.keyCode === 37){
	this.currentSlipIndex--
	if(this.currentSlipIndex == -1) this.currentSlipIndex = this.slips.length - 1;
	this.currentSlip = this.slips[this.currentSlipIndex]
      } else {
	this.currentSlipIndex++
	if(this.currentSlipIndex == this.slips.length) this.currentSlipIndex = 0;
	this.currentSlip = this.slips[this.currentSlipIndex]
      }
    }
  })
})()
