// Candle Label Widget JavaScript
const candleLabelInput = document.getElementById('candle-label-input');
const candleImage = document.getElementById('candle-image');

candleLabelInput.addEventListener('input', () => {
  const labelText = candleLabelInput.value.trim();
  const imageSrc = labelText ? `candle-with-label?label=${encodeURIComponent(labelText)}` : 'candle.jpg';
  candleImage.src = imageSrc;
});
