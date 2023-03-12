var btnresearch = document.querySelector('#details-btn');
var btndesign = document.querySelector('#design-btn');
var expand_design = document.querySelector('.expand_design');
var expand_research = document.querySelector('.expand_research');
var button = document.getElementById('details-btn');
var buttondesign = document.getElementById('design-btn');

btnresearch.addEventListener('click', function() {    

    if(expand_research.style.display === 'flex') {
        expand_research.style.display = 'none'; 
        button.innerHTML = '+ Detalhes';
    } else {
        expand_research.style.display = 'flex';
        button.innerHTML = '- Detalhes';
    }

});

btndesign.addEventListener('click', function() {

    if(expand_design.style.display === 'flex') {
        expand_design.style.display = 'none'; 
        buttondesign.innerHTML = '+ Detalhes';
    } else {
        expand_design.style.display = 'flex';
        buttondesign.innerHTML = '- Detalhes';
    }


});
