var base = require('../base')
  
module.exports = function(data){
  data.title = 'Hi, I\'m Framp';
  data.body = 'Framp on keli'
  return base(data);
}