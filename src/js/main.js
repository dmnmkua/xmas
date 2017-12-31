window.addEventListener('DOMContentLoaded', init);

function init() {
  let timeInterval = 5;
  let lampAnim = 0;
  let xmasTree = document.querySelector('.xmas-tree');
  let star = document.querySelector('.star');
  let lamps = document.querySelectorAll('.lamps');
  let balls = document.querySelectorAll('.ball');
  let numXmas = xmasTree.getAttribute('stroke-dasharray');
  let numStar = 205;
  let interval = setInterval( () => {
    xmasTree.setAttribute('stroke-dashoffset', numXmas--);
    if(numXmas === 0) {
      xmasTree.setAttribute('fill', '#66BB6A');
      balls.forEach(ball => {
        ball.setAttribute('fill-opacity', '1');
      })
      clearInterval(interval);
    }
  }, timeInterval);

  let onStar = setInterval( () => {
    star.setAttribute('stroke-dashoffset', numStar--);
    if(numStar === 0) {
      star.setAttribute('fill', '#FFEB3B');
      clearInterval(onStar)
    }
  }, timeInterval * xmasTree.getAttribute('stroke-dasharray') / 205);

  function onLamp() {
    lamps.forEach(item => {
      item.setAttribute('stroke-dashoffset', lampAnim--);
    })
  }

  setTimeout( () => {
    lamps.forEach(item => {
      item.setAttribute('stroke', 'yellow');
    })
    setInterval( () => {
      onLamp();
    }, 300)
  }, timeInterval * xmasTree.getAttribute('stroke-dasharray'));

  function fireworks() {

  }
}
