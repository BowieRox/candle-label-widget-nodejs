const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);
  const label = reqUrl.query.label || '';
  const candleImagePath = path.join(__dirname, '../candle.jpg');
  const fontPath = path.join(__dirname, '../Poppins-Medium.ttf');
  const canvas = createCanvas(800, 800);
  const ctx = canvas.getContext('2d');

  // Load the candle image
  const candleImage = await loadImage(candleImagePath);
  ctx.drawImage(candleImage, 0, 0);

  // Set up the font and label text color
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '40px Poppins-Medium';

  // Add the label text to the image
  ctx.fillText(label, 200, 300);

  // Output the image to the browser
  const imageData = canvas.toBuffer();
  res.writeHead(200, {
    'Content-Type': 'image/jpeg',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.end(imageData);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
