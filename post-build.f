chmod u+w output/assets/js/bundle.js
minify --dir output/assets/js/ output/assets/js/bundle.js

chmod u+w output/assets/css/style.css
minify --dir output/assets/css/ output/assets/css/style.css

chmod u+w output/*.html
minify --dir output/ output/*.html