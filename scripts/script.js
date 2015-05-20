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
        }
    }

    function goPrev() {
        if(counter > 1)
        {
            counter--;
            window.location.hash = counter;
        }
    }

    function init(){
        var articles = document.getElementsByTagName('article'),
            i;

        for(i=0; i<articles.length; i++)
        {
            articles[i].setAttribute('id', (i+1));
        }

        max = i;
        goNext();
    }

    init();
})();