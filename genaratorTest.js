function delay(time, callback){
    setTimeout(function(){
        callback("Slept for "+time);
    },time);
}   
function run(generatorFunction) { 
    var generatorItr = generatorFunction(resume) 
    function resume(callbackValue) { 
        generatorItr.next(callbackValue) //callbackValue:"slept for setTimeout"
    } 
    generatorItr.next() // 开始执行第一组yield
}
run(function* myDelayedMessages(resume) {
    console.log(yield delay(1000, resume)) // resume为callback,延时后执行callback，generator.next()
    console.log(yield delay(1200, resume)) // yield 本身没有返回值 ，如果next()中有参数，那么参数就是返回值，
                                           //console将其打印了出来
})
