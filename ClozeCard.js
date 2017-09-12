var ClozeCard = function(question, cloze) {
  this.cloze = cloze;
  
  this.fullText = question;
  this.partial = function(){

  if((this.fullText).indexOf(this.cloze)>=0){
  return (this.fullText.replace(this.cloze,"...."));
  }
  else{
  return "error in text";
  }
}
  };
  module.exports = ClozeCard;