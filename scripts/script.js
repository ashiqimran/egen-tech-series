(function(){

    var counter = 0,
        max= 0;

    document.getElementById('goNext').addEventListener('click', goNext, false);
    document.getElementById('goPrev').addEventListener('click', goPrev, false);

    function goNext() {
        if(counter < max)
        {
            counter++;
            window.location.hash = counter;
            localStorage.setItem('counter', counter);
        }
    }

    function goPrev() {
        if(counter > 1)
        {
            counter--;
            window.location.hash = counter;
            localStorage.setItem('counter', counter);
        }
    }

    function init(){
        var articles = document.getElementsByTagName('article'),
            i, oldCounter;

        for(i=0; i<articles.length; i++)
        {
            articles[i].setAttribute('id', (i+1));
        }

        max = i;

        oldCounter = new Number(localStorage.getItem('counter'));

        if(!isNaN(oldCounter))
        {
            counter = oldCounter-1;
        }
        goNext();
    }

    init();
})();