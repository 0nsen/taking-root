export function readMore() {
    if (document.querySelector('#more').style.display === 'none') {
        document.querySelector('#more').style.display = 'inline';
        document.querySelector('#read-more').innerHTML = 'Read Less';
      
    }
    else if (document.querySelector('#more').style.display === 'inline') {
        document.querySelector('#more').style.display = 'none';
        document.querySelector('#read-more').innerHTML = 'Read More';
    }
}