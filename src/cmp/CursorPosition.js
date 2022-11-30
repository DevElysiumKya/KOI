document.addEventListener('mousemove', (e) => {
    document.getElementById('cursor').style.left = e.pageX + 'px';
    document.getElementById('cursor').style.top = e.pageY + 'px';
    let curp = window.scrollY;
    document.getElementById('cursor-wrapper').style.top = - (curp)  +'px';
});