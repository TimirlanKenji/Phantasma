(function () {

function setWasdButtons() {
  Input.keyMapper[87] = 'up';
  Input.keyMapper[65] = 'left';
  Input.keyMapper[83] = 'down';
  Input.keyMapper[68] = 'right';
}

if (window.Yanfly.BCE) {
  var Input_revertButton = Input._revertButton;
  Input._revertButton = function(button) {
    Input_revertButton.call(this, button);
    setWasdButtons();
  }

  var Input_switchButton = Input._switchButton;
  Input._switchButton = function (button) {
    Input_switchButton.call(this, button);
    setWasdButtons();
  }
}

setWasdButtons();

})();