function Grid(t){this.content=RandomGenerator.generateContent(t),this.condition=RandomGenerator.generateCondition(this.content),this.displayCondition="Find Grids With Photo of : "+people[this.condition],this.totalNumber=this.GetResultArray().length,this.leftNumber=this.GetResultArray().length,selectedArray=new Array}function sameOneSelect(t){return selectedArray.contains(t)}var selectedArray;!function(t){var e=[];t.preLoadImages=function(){for(var t=arguments.length,n=t;n--;){var r=document.createElement("img");r.src=arguments[n],e.push(r)}}}(jQuery),Grid.prototype.handleClickEvent=function(t){$("#"+t).addClass("flip");for(var e=0;e<this.totalNumber;e++)if(valueIndex=this.GetResultArray()[e],valueIndex==t)return sameOneSelect(valueIndex)||(this.leftNumber--,selectedArray.push(t)),!0;return!1},Grid.prototype.GetResultArray=function(){return this.result(this.condition)},Grid.prototype.generateTable=function(){var t="";t+="<table>";for(var e=Math.sqrt(this.content.length),n=0,r=0;e>r;r++){t+="<tr>";for(var i=0;e>i;i++)content=this.content[n],title=people[content],t+="<td class= 'panel' id='"+n++ +"'><div class='front'><img src='images/"+content+".jpg' alt='"+content+"' title='"+title+"' /></div><div class='back'><img src='images/question.jpg' alt='"+content+"' /></div>"}return t+="</table>"},Grid.prototype.findIndexInArray=function(t){for(var e=new Array,n=0;n<this.content.length;n++)this.content[n]==t&&e.push(n);return e},Grid.prototype.result=function(t){return this.findIndexInArray(t)},Array.prototype.remove=function(t){for(var e=new Array,n=0;n<this.length;n++)n!=t&&e.push(this[n]);return e},Array.prototype.contains=function(t){for(var e=0;e<this.length;e++)if(this[e]==t)return!0;return!1};