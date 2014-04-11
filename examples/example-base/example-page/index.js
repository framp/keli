var base = require('../base')
  
module.exports = function(data, callback){
  data.title = 'Hi, I\'m Framp';
  data.body = 'Framp on keli'
  callback(base(data));
}
