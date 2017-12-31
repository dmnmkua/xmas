(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('DOMContentLoaded', init);

function init() {
  var timeInterval = 5;
  var lampAnim = 0;
  var xmasTree = document.querySelector('.xmas-tree');
  var star = document.querySelector('.star');
  var lamps = document.querySelectorAll('.lamps');
  var balls = document.querySelectorAll('.ball');
  var numXmas = xmasTree.getAttribute('stroke-dasharray');
  var numStar = 205;
  var interval = setInterval(function () {
    xmasTree.setAttribute('stroke-dashoffset', numXmas--);
    if (numXmas === 0) {
      xmasTree.setAttribute('fill', '#66BB6A');
      balls.forEach(function (ball) {
        ball.setAttribute('fill-opacity', '1');
      });
    }
  }, timeInterval);

  var onStar = setInterval(function () {
    star.setAttribute('stroke-dashoffset', numStar--);
    if (numStar === 0) {
      star.setAttribute('fill', '#FFEB3B');
      clearInterval(onStar);
    }
  }, timeInterval * xmasTree.getAttribute('stroke-dasharray') / 205);

  function onLamp() {
    lamps.forEach(function (item) {
      item.setAttribute('stroke-dashoffset', lampAnim--);
    });
  }

  setTimeout(function () {
    lamps.forEach(function (item) {
      item.setAttribute('stroke', 'yellow');
    });
    setInterval(function () {
      onLamp();
    }, 300);
  }, timeInterval * xmasTree.getAttribute('stroke-dasharray'));

  function fireworks() {}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjM5YzFiOTguanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJ0aW1lSW50ZXJ2YWwiLCJsYW1wQW5pbSIsInhtYXNUcmVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RhciIsImxhbXBzIiwicXVlcnlTZWxlY3RvckFsbCIsImJhbGxzIiwibnVtWG1hcyIsImdldEF0dHJpYnV0ZSIsIm51bVN0YXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsImJhbGwiLCJvblN0YXIiLCJjbGVhckludGVydmFsIiwib25MYW1wIiwiaXRlbSIsInNldFRpbWVvdXQiLCJmaXJld29ya3MiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0Q0MsSUFBNUM7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLE1BQUlDLGVBQWUsQ0FBbkI7QUFDQSxNQUFJQyxXQUFXLENBQWY7QUFDQSxNQUFJQyxXQUFXQyxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQSxNQUFJQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVg7QUFDQSxNQUFJRSxRQUFRSCxTQUFTSSxnQkFBVCxDQUEwQixRQUExQixDQUFaO0FBQ0EsTUFBSUMsUUFBUUwsU0FBU0ksZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBWjtBQUNBLE1BQUlFLFVBQVVQLFNBQVNRLFlBQVQsQ0FBc0Isa0JBQXRCLENBQWQ7QUFDQSxNQUFJQyxVQUFVLEdBQWQ7QUFDQSxNQUFJQyxXQUFXQyxZQUFhLFlBQU07QUFDaENYLGFBQVNZLFlBQVQsQ0FBc0IsbUJBQXRCLEVBQTJDTCxTQUEzQztBQUNBLFFBQUdBLFlBQVksQ0FBZixFQUFrQjtBQUNoQlAsZUFBU1ksWUFBVCxDQUFzQixNQUF0QixFQUE4QixTQUE5QjtBQUNBTixZQUFNTyxPQUFOLENBQWMsZ0JBQVE7QUFDcEJDLGFBQUtGLFlBQUwsQ0FBa0IsY0FBbEIsRUFBa0MsR0FBbEM7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQVJjLEVBUVpkLFlBUlksQ0FBZjs7QUFVQSxNQUFJaUIsU0FBU0osWUFBYSxZQUFNO0FBQzlCUixTQUFLUyxZQUFMLENBQWtCLG1CQUFsQixFQUF1Q0gsU0FBdkM7QUFDQSxRQUFHQSxZQUFZLENBQWYsRUFBa0I7QUFDaEJOLFdBQUtTLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEIsU0FBMUI7QUFDQUksb0JBQWNELE1BQWQ7QUFDRDtBQUNGLEdBTlksRUFNVmpCLGVBQWVFLFNBQVNRLFlBQVQsQ0FBc0Isa0JBQXRCLENBQWYsR0FBMkQsR0FOakQsQ0FBYjs7QUFRQSxXQUFTUyxNQUFULEdBQWtCO0FBQ2hCYixVQUFNUyxPQUFOLENBQWMsZ0JBQVE7QUFDcEJLLFdBQUtOLFlBQUwsQ0FBa0IsbUJBQWxCLEVBQXVDYixVQUF2QztBQUNELEtBRkQ7QUFHRDs7QUFFRG9CLGFBQVksWUFBTTtBQUNoQmYsVUFBTVMsT0FBTixDQUFjLGdCQUFRO0FBQ3BCSyxXQUFLTixZQUFMLENBQWtCLFFBQWxCLEVBQTRCLFFBQTVCO0FBQ0QsS0FGRDtBQUdBRCxnQkFBYSxZQUFNO0FBQ2pCTTtBQUNELEtBRkQsRUFFRyxHQUZIO0FBR0QsR0FQRCxFQU9HbkIsZUFBZUUsU0FBU1EsWUFBVCxDQUFzQixrQkFBdEIsQ0FQbEI7O0FBU0EsV0FBU1ksU0FBVCxHQUFxQixDQUVwQjtBQUNGIiwiZmlsZSI6ImZha2VfZjM5YzFiOTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBsZXQgdGltZUludGVydmFsID0gNTtcbiAgbGV0IGxhbXBBbmltID0gMDtcbiAgbGV0IHhtYXNUcmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnhtYXMtdHJlZScpO1xuICBsZXQgc3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFyJyk7XG4gIGxldCBsYW1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW1wcycpO1xuICBsZXQgYmFsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFsbCcpO1xuICBsZXQgbnVtWG1hcyA9IHhtYXNUcmVlLmdldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScpO1xuICBsZXQgbnVtU3RhciA9IDIwNTtcbiAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcbiAgICB4bWFzVHJlZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgbnVtWG1hcy0tKTtcbiAgICBpZihudW1YbWFzID09PSAwKSB7XG4gICAgICB4bWFzVHJlZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzY2QkI2QScpO1xuICAgICAgYmFsbHMuZm9yRWFjaChiYWxsID0+IHtcbiAgICAgICAgYmFsbC5zZXRBdHRyaWJ1dGUoJ2ZpbGwtb3BhY2l0eScsICcxJyk7XG4gICAgICB9KVxuICAgIH1cbiAgfSwgdGltZUludGVydmFsKTtcblxuICBsZXQgb25TdGFyID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcbiAgICBzdGFyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnLCBudW1TdGFyLS0pO1xuICAgIGlmKG51bVN0YXIgPT09IDApIHtcbiAgICAgIHN0YXIuc2V0QXR0cmlidXRlKCdmaWxsJywgJyNGRkVCM0InKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwob25TdGFyKVxuICAgIH1cbiAgfSwgdGltZUludGVydmFsICogeG1hc1RyZWUuZ2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JykgLyAyMDUpO1xuXG4gIGZ1bmN0aW9uIG9uTGFtcCgpIHtcbiAgICBsYW1wcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgbGFtcEFuaW0tLSk7XG4gICAgfSlcbiAgfVxuXG4gIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICBsYW1wcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICd5ZWxsb3cnKTtcbiAgICB9KVxuICAgIHNldEludGVydmFsKCAoKSA9PiB7XG4gICAgICBvbkxhbXAoKTtcbiAgICB9LCAzMDApXG4gIH0sIHRpbWVJbnRlcnZhbCAqIHhtYXNUcmVlLmdldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScpKTtcblxuICBmdW5jdGlvbiBmaXJld29ya3MoKSB7XG4gICAgXG4gIH1cbn1cbiJdfQ==
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rtbi9Ecm9wYm94L2dpdGh1Yi5jb20veG1hcy9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvZG1uL0Ryb3Bib3gvZ2l0aHViLmNvbS94bWFzL3NyYy9qcy9mYWtlX2YzOWMxYjk4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICB2YXIgdGltZUludGVydmFsID0gNTtcbiAgdmFyIGxhbXBBbmltID0gMDtcbiAgdmFyIHhtYXNUcmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnhtYXMtdHJlZScpO1xuICB2YXIgc3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFyJyk7XG4gIHZhciBsYW1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW1wcycpO1xuICB2YXIgYmFsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFsbCcpO1xuICB2YXIgbnVtWG1hcyA9IHhtYXNUcmVlLmdldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScpO1xuICB2YXIgbnVtU3RhciA9IDIwNTtcbiAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIHhtYXNUcmVlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnLCBudW1YbWFzLS0pO1xuICAgIGlmIChudW1YbWFzID09PSAwKSB7XG4gICAgICB4bWFzVHJlZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzY2QkI2QScpO1xuICAgICAgYmFsbHMuZm9yRWFjaChmdW5jdGlvbiAoYmFsbCkge1xuICAgICAgICBiYWxsLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgJzEnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgdGltZUludGVydmFsKTtcblxuICB2YXIgb25TdGFyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIHN0YXIuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIG51bVN0YXItLSk7XG4gICAgaWYgKG51bVN0YXIgPT09IDApIHtcbiAgICAgIHN0YXIuc2V0QXR0cmlidXRlKCdmaWxsJywgJyNGRkVCM0InKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwob25TdGFyKTtcbiAgICB9XG4gIH0sIHRpbWVJbnRlcnZhbCAqIHhtYXNUcmVlLmdldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScpIC8gMjA1KTtcblxuICBmdW5jdGlvbiBvbkxhbXAoKSB7XG4gICAgbGFtcHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgbGFtcEFuaW0tLSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBsYW1wcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3llbGxvdycpO1xuICAgIH0pO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uTGFtcCgpO1xuICAgIH0sIDMwMCk7XG4gIH0sIHRpbWVJbnRlcnZhbCAqIHhtYXNUcmVlLmdldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScpKTtcblxuICBmdW5jdGlvbiBmaXJld29ya3MoKSB7fVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1aaGEyVmZaak01WXpGaU9UZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWQybHVaRzkzSWl3aVlXUmtSWFpsYm5STWFYTjBaVzVsY2lJc0ltbHVhWFFpTENKMGFXMWxTVzUwWlhKMllXd2lMQ0pzWVcxd1FXNXBiU0lzSW5odFlYTlVjbVZsSWl3aVpHOWpkVzFsYm5RaUxDSnhkV1Z5ZVZObGJHVmpkRzl5SWl3aWMzUmhjaUlzSW14aGJYQnpJaXdpY1hWbGNubFRaV3hsWTNSdmNrRnNiQ0lzSW1KaGJHeHpJaXdpYm5WdFdHMWhjeUlzSW1kbGRFRjBkSEpwWW5WMFpTSXNJbTUxYlZOMFlYSWlMQ0pwYm5SbGNuWmhiQ0lzSW5ObGRFbHVkR1Z5ZG1Gc0lpd2ljMlYwUVhSMGNtbGlkWFJsSWl3aVptOXlSV0ZqYUNJc0ltSmhiR3dpTENKdmJsTjBZWElpTENKamJHVmhja2x1ZEdWeWRtRnNJaXdpYjI1TVlXMXdJaXdpYVhSbGJTSXNJbk5sZEZScGJXVnZkWFFpTENKbWFYSmxkMjl5YTNNaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRkJMRTlCUVU5RExHZENRVUZRTEVOQlFYZENMR3RDUVVGNFFpeEZRVUUwUTBNc1NVRkJOVU03TzBGQlJVRXNVMEZCVTBFc1NVRkJWQ3hIUVVGblFqdEJRVU5rTEUxQlFVbERMR1ZCUVdVc1EwRkJia0k3UVVGRFFTeE5RVUZKUXl4WFFVRlhMRU5CUVdZN1FVRkRRU3hOUVVGSlF5eFhRVUZYUXl4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEZsQlFYWkNMRU5CUVdZN1FVRkRRU3hOUVVGSlF5eFBRVUZQUml4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEU5QlFYWkNMRU5CUVZnN1FVRkRRU3hOUVVGSlJTeFJRVUZSU0N4VFFVRlRTU3huUWtGQlZDeERRVUV3UWl4UlFVRXhRaXhEUVVGYU8wRkJRMEVzVFVGQlNVTXNVVUZCVVV3c1UwRkJVMGtzWjBKQlFWUXNRMEZCTUVJc1QwRkJNVUlzUTBGQldqdEJRVU5CTEUxQlFVbEZMRlZCUVZWUUxGTkJRVk5STEZsQlFWUXNRMEZCYzBJc2EwSkJRWFJDTEVOQlFXUTdRVUZEUVN4TlFVRkpReXhWUVVGVkxFZEJRV1E3UVVGRFFTeE5RVUZKUXl4WFFVRlhReXhaUVVGaExGbEJRVTA3UVVGRGFFTllMR0ZCUVZOWkxGbEJRVlFzUTBGQmMwSXNiVUpCUVhSQ0xFVkJRVEpEVEN4VFFVRXpRenRCUVVOQkxGRkJRVWRCTEZsQlFWa3NRMEZCWml4RlFVRnJRanRCUVVOb1FsQXNaVUZCVTFrc1dVRkJWQ3hEUVVGelFpeE5RVUYwUWl4RlFVRTRRaXhUUVVFNVFqdEJRVU5CVGl4WlFVRk5UeXhQUVVGT0xFTkJRV01zWjBKQlFWRTdRVUZEY0VKRExHRkJRVXRHTEZsQlFVd3NRMEZCYTBJc1kwRkJiRUlzUlVGQmEwTXNSMEZCYkVNN1FVRkRSQ3hQUVVaRU8wRkJSMFE3UVVGRFJpeEhRVkpqTEVWQlVWcGtMRmxCVWxrc1EwRkJaanM3UVVGVlFTeE5RVUZKYVVJc1UwRkJVMG9zV1VGQllTeFpRVUZOTzBGQlF6bENVaXhUUVVGTFV5eFpRVUZNTEVOQlFXdENMRzFDUVVGc1FpeEZRVUYxUTBnc1UwRkJka003UVVGRFFTeFJRVUZIUVN4WlFVRlpMRU5CUVdZc1JVRkJhMEk3UVVGRGFFSk9MRmRCUVV0VExGbEJRVXdzUTBGQmEwSXNUVUZCYkVJc1JVRkJNRUlzVTBGQk1VSTdRVUZEUVVrc2IwSkJRV05FTEUxQlFXUTdRVUZEUkR0QlFVTkdMRWRCVGxrc1JVRk5WbXBDTEdWQlFXVkZMRk5CUVZOUkxGbEJRVlFzUTBGQmMwSXNhMEpCUVhSQ0xFTkJRV1lzUjBGQk1rUXNSMEZPYWtRc1EwRkJZanM3UVVGUlFTeFhRVUZUVXl4TlFVRlVMRWRCUVd0Q08wRkJRMmhDWWl4VlFVRk5VeXhQUVVGT0xFTkJRV01zWjBKQlFWRTdRVUZEY0VKTExGZEJRVXRPTEZsQlFVd3NRMEZCYTBJc2JVSkJRV3hDTEVWQlFYVkRZaXhWUVVGMlF6dEJRVU5FTEV0QlJrUTdRVUZIUkRzN1FVRkZSRzlDTEdGQlFWa3NXVUZCVFR0QlFVTm9RbVlzVlVGQlRWTXNUMEZCVGl4RFFVRmpMR2RDUVVGUk8wRkJRM0JDU3l4WFFVRkxUaXhaUVVGTUxFTkJRV3RDTEZGQlFXeENMRVZCUVRSQ0xGRkJRVFZDTzBGQlEwUXNTMEZHUkR0QlFVZEJSQ3huUWtGQllTeFpRVUZOTzBGQlEycENUVHRCUVVORUxFdEJSa1FzUlVGRlJ5eEhRVVpJTzBGQlIwUXNSMEZRUkN4RlFVOUhia0lzWlVGQlpVVXNVMEZCVTFFc1dVRkJWQ3hEUVVGelFpeHJRa0ZCZEVJc1EwRlFiRUk3TzBGQlUwRXNWMEZCVTFrc1UwRkJWQ3hIUVVGeFFpeERRVVZ3UWp0QlFVTkdJaXdpWm1sc1pTSTZJbVpoYTJWZlpqTTVZekZpT1RndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUozYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25SRTlOUTI5dWRHVnVkRXh2WVdSbFpDY3NJR2x1YVhRcE8xeHVYRzVtZFc1amRHbHZiaUJwYm1sMEtDa2dlMXh1SUNCc1pYUWdkR2x0WlVsdWRHVnlkbUZzSUQwZ05UdGNiaUFnYkdWMElHeGhiWEJCYm1sdElEMGdNRHRjYmlBZ2JHVjBJSGh0WVhOVWNtVmxJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25Mbmh0WVhNdGRISmxaU2NwTzF4dUlDQnNaWFFnYzNSaGNpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXpkR0Z5SnlrN1hHNGdJR3hsZENCc1lXMXdjeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1c1lXMXdjeWNwTzF4dUlDQnNaWFFnWW1Gc2JITWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1WW1Gc2JDY3BPMXh1SUNCc1pYUWdiblZ0V0cxaGN5QTlJSGh0WVhOVWNtVmxMbWRsZEVGMGRISnBZblYwWlNnbmMzUnliMnRsTFdSaGMyaGhjbkpoZVNjcE8xeHVJQ0JzWlhRZ2JuVnRVM1JoY2lBOUlESXdOVHRjYmlBZ2JHVjBJR2x1ZEdWeWRtRnNJRDBnYzJWMFNXNTBaWEoyWVd3b0lDZ3BJRDArSUh0Y2JpQWdJQ0I0YldGelZISmxaUzV6WlhSQmRIUnlhV0oxZEdVb0ozTjBjbTlyWlMxa1lYTm9iMlptYzJWMEp5d2diblZ0V0cxaGN5MHRLVHRjYmlBZ0lDQnBaaWh1ZFcxWWJXRnpJRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQjRiV0Z6VkhKbFpTNXpaWFJCZEhSeWFXSjFkR1VvSjJacGJHd25MQ0FuSXpZMlFrSTJRU2NwTzF4dUlDQWdJQ0FnWW1Gc2JITXVabTl5UldGamFDaGlZV3hzSUQwK0lIdGNiaUFnSUNBZ0lDQWdZbUZzYkM1elpYUkJkSFJ5YVdKMWRHVW9KMlpwYkd3dGIzQmhZMmwwZVNjc0lDY3hKeWs3WEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJSDFjYmlBZ2ZTd2dkR2x0WlVsdWRHVnlkbUZzS1R0Y2JseHVJQ0JzWlhRZ2IyNVRkR0Z5SUQwZ2MyVjBTVzUwWlhKMllXd29JQ2dwSUQwK0lIdGNiaUFnSUNCemRHRnlMbk5sZEVGMGRISnBZblYwWlNnbmMzUnliMnRsTFdSaGMyaHZabVp6WlhRbkxDQnVkVzFUZEdGeUxTMHBPMXh1SUNBZ0lHbG1LRzUxYlZOMFlYSWdQVDA5SURBcElIdGNiaUFnSUNBZ0lITjBZWEl1YzJWMFFYUjBjbWxpZFhSbEtDZG1hV3hzSnl3Z0p5TkdSa1ZDTTBJbktUdGNiaUFnSUNBZ0lHTnNaV0Z5U1c1MFpYSjJZV3dvYjI1VGRHRnlLVnh1SUNBZ0lIMWNiaUFnZlN3Z2RHbHRaVWx1ZEdWeWRtRnNJQ29nZUcxaGMxUnlaV1V1WjJWMFFYUjBjbWxpZFhSbEtDZHpkSEp2YTJVdFpHRnphR0Z5Y21GNUp5a2dMeUF5TURVcE8xeHVYRzRnSUdaMWJtTjBhVzl1SUc5dVRHRnRjQ2dwSUh0Y2JpQWdJQ0JzWVcxd2N5NW1iM0pGWVdOb0tHbDBaVzBnUFQ0Z2UxeHVJQ0FnSUNBZ2FYUmxiUzV6WlhSQmRIUnlhV0oxZEdVb0ozTjBjbTlyWlMxa1lYTm9iMlptYzJWMEp5d2diR0Z0Y0VGdWFXMHRMU2s3WEc0Z0lDQWdmU2xjYmlBZ2ZWeHVYRzRnSUhObGRGUnBiV1Z2ZFhRb0lDZ3BJRDArSUh0Y2JpQWdJQ0JzWVcxd2N5NW1iM0pGWVdOb0tHbDBaVzBnUFQ0Z2UxeHVJQ0FnSUNBZ2FYUmxiUzV6WlhSQmRIUnlhV0oxZEdVb0ozTjBjbTlyWlNjc0lDZDVaV3hzYjNjbktUdGNiaUFnSUNCOUtWeHVJQ0FnSUhObGRFbHVkR1Z5ZG1Gc0tDQW9LU0E5UGlCN1hHNGdJQ0FnSUNCdmJreGhiWEFvS1R0Y2JpQWdJQ0I5TENBek1EQXBYRzRnSUgwc0lIUnBiV1ZKYm5SbGNuWmhiQ0FxSUhodFlYTlVjbVZsTG1kbGRFRjBkSEpwWW5WMFpTZ25jM1J5YjJ0bExXUmhjMmhoY25KaGVTY3BLVHRjYmx4dUlDQm1kVzVqZEdsdmJpQm1hWEpsZDI5eWEzTW9LU0I3WEc0Z0lDQWdYRzRnSUgxY2JuMWNiaUpkZlE9PSJdfQ==