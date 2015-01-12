define(['zepto'], function($){
var template = require('template');
template.helper('dateToDay', function(date){
    return new Date(date).toLocaleDateString() || new Date(date).toLocaleDateString();
});
function draw(data){
    var json = JSON.parse(data);
    if(json){
        var html = template('news-item', {list: json});
        $('body').append(html);
        $(document).on('click', '.list-item', function(){
            window.location.href = ($(this).attr('data-lnk'));
       });
    }
}
function query(url){
    return $.get(url, draw);
};

return {
    query: query
};
});