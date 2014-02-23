module.exports = function(data){
  return '<html>\
            <head>\
              <title>' + data.title + '</title>\
            </head>\
            <body>' +
              data.body + 
            '</body>\
          </html>';
}
