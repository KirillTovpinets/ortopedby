function increment(value){
    return value++;
}
function scrollingWindow(e){
    const scroll = $(this).scrollTop();
    console.log(scroll);
    if(scroll > 200){
        $('.main-services .service').addClass('fadeInRight')
    }
    if(scroll > 1000){
        let numbers = [];
        const initVal = [];
        let element = $('#first-number');
        let dataValue = element.data('count');
        initVal.push(dataValue);
        numbers.push(element);
    
        element = $('#second-number');
        dataValue = element.data('count');
        initVal.push(dataValue);
        numbers.push(element);
    
        element = $('#third-number');
        dataValue = element.data('count');
        initVal.push(dataValue);
        numbers.push(element);
    
        element = $('#fourth-number');
        dataValue = element.data('count');
        initVal.push(dataValue);
        numbers.push(element);
    
        numbers.forEach((element, index) => {
            const timer = setInterval(function(){ 
                let cur = +element.text();
                if(cur === initVal[index]){
                    clearInterval(timer);
                    return;
                }
                element.text(++cur); 
                if(element.text() == initVal[index]){
                    clearInterval(timer);
                }
            }, 50);
        })
    }
    if(scroll > 2700){
        $('.conferences .conference').addClass('fadeInUp');
    }
}