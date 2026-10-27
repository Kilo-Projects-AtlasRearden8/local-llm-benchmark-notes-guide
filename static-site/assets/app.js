// Running Local LLMs on a Home PC — calculator logic
// Asdale Dynamics, LLC — © 2026

(function () {
  'use strict';

  var modelSizeInput = document.getElementById('modelSize');
  var quantizationSelect = document.getElementById('quantization');
  var availableMemInput = document.getElementById('availableMem');
  var calcBtn = document.getElementById('calcBtn');
  var calcResult = document.getElementById('calcResult');
  var calcBreakdown = document.getElementById('calcBreakdown');

  function bytesPerParameter(value) {
    return parseFloat(value) || 0.5;
  }

  function formatGB(value) {
    return value.toFixed(2) + ' GB';
  }

  function calculate() {
    var params = parseFloat(modelSizeInput.value) || 0;
    var bytesPer = bytesPerParameter(quantizationSelect.value);
    var available = parseFloat(availableMemInput.value) || 0;

    if (!params || !available) {
      calcResult.textContent = 'Please enter valid numbers.';
      calcResult.className = 'calc-result';
      calcBreakdown.textContent = '';
      return;
    }

    // params is already in billions; bytes x billions = GB directly
    var weightsGB = params * bytesPer;
    var overheadGB = 2.5; // cushion for KV cache, OS, other apps
    var totalGB = weightsGB + overheadGB;
    var fits = totalGB <= available;

    calcResult.textContent = fits ? 'Fits with room to spare.' : 'Probably too large for this machine.';
    calcResult.className = 'calc-result ' + (fits ? 'ok' : 'no');

    var label = quantizationSelect.options[quantizationSelect.selectedIndex].text.split(' ')[0];
    calcBreakdown.innerHTML =
      '<strong>Model weights:</strong> ' + params + ' billion &times; ' + bytesPer + ' byte = ' + formatGB(weightsGB) + '<br>' +
      '<strong>Overhead cushion:</strong> ~' + overheadGB.toFixed(1) + ' GB<br>' +
      '<strong>Total estimated:</strong> ' + formatGB(totalGB) + '<br>' +
      '<strong>Available:</strong> ' + formatGB(available) + '<br>' +
      '<strong>Quantization:</strong> ' + label;
  }

  calcBtn.addEventListener('click', calculate);

  // Also compute when inputs change, so the page feels responsive.
  [modelSizeInput, quantizationSelect, availableMemInput].forEach(function (el) {
    el.addEventListener('change', calculate);
    el.addEventListener('input', calculate);
  });

  // Run once on load.
  calculate();
})();
