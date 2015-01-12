require.config({
    paths:{
        zepto: '../vendor/zepto',
        template: '../vendor/template',
        query: 'query'
    },
    shim:{
        zepto:{
            exports: '$'
        }
    }
});

require(['zepto', 'template', 'data'], function($, template, data){
    data.query("data.txt");
});