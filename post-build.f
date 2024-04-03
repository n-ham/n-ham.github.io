chmod u+w output/assets/js/bundle.js
mantis-minify --dir output/assets/js/ --js output/assets/js/bundle.js

chmod u+w output/assets/css/style.css
mantis-minify --dir output/assets/css/ --css output/assets/css/style.css

chmod u+w output/*.html
mantis-minify --dir output/ --html output/*.html