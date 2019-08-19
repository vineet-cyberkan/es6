# es6
webpack, es6

es6 with webpack config

for variables let, const

for functions we can use default parameters & aero functions

ES6 also contains classes, template strings and new ways to dealing with arrays and objects 


- Because all of the browsers do not support all ES6 features, all of our ES6 code should be transpiled. Transpiling is the process of taking ES6 code that we've written and converting it into ES5, so it can be read by browsers. We also use transpiling for languages like CoffeeScript and TypeScript. There are many different transpiling tools available. The most popular is Babel, but we also have Traceur, Closure, and many others. If we go back to our compatibility chart, you'll see a list of the compiler and polyfill tools at the beginning. Notice that Babel is the one that supports most of these features. It's the column that's the most green. Another thing you can do if you're just practicing or doing some testing is you can try running your ES6 code in Chrome Canary. If you haven't downloaded Chrome Canary before, this is the version of the Chrome browser that's in development and contains the newest features. It's not considered stable and it doesn't support all of ES6 but several of the ES6 features are supported by Chrome Canary.


Introduction to Babel
- Babel is becoming one of the most popular tools for trasnpiling ES6 code. With Babel we but ES6 code in and get ES5 code out. Babel was created by Sebastian McKenzie an Australian developer who now works at Facebook. If you've worked with ReactJS, the UI library created at Facebook, you'll notice that Babel is the preferred tool for transpiling the ES6 features back into JavaScript. This chapter is devoted to a few different methods of working with Babel, so let's go ahead and explore the first one.