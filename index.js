function handleClick () {
    window.alert('clicked');
}
/*browser --> window --> document --> object */

const containers = document.querySelectorAll('.container'); /* puts it all in a variable named containers*/

containers.forEach(container =>{
    container.addEventListener('click', handleClick)
})

/*other way to do this is below

function generalClick(event) {
    window.alert('clicked')
    console.log(event)
}
document.addEventListener('click', generalClick)
*/