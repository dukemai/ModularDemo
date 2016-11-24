requirejs.config({
    baseUrl: 'app',
    paths: {
  
    }
});

require(['app', 'require'], function(app, require){
    console.log(app);
});