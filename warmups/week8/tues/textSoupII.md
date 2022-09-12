# Text Soup 2: The Widgeting

Using the solution for the original text soup, and the [dat.gui](https://davidwalsh.name/dat-gui) Javascript library, add GUI controller elements to the Text Soup page to allow real-time control of the following paramaters from within the browser:

- fade in time (i.e. a range from 1 to 5000 milliseconds)
- fade out time
- font size

To get started, look at the examples on the package page linked to above (but note the hint at the bottom of this file about the easier style of defining your controlled variables using an object).


### HINTS:
- To make sure you have the up-to-date Text Soup warmup solution in your fork of the homework repo, and to copy it to a new folder to work on, run these commands in iTerm:
```
cd ~/sei/homework

git pull

# copy the previous solution to where ever you keep your warmups
# make sure these paths are correct for you

cp -r ~/sei55-homework/warmups/week8/tues ~/sei/homework/your_name/textsoup2  (or whereever you do warmup exercises)

# Add dat.gui to the js folder within this warmup
curl https://raw.githubusercontent.com/dataarts/dat.gui/master/build/dat.gui.js >js/dat.gui.js

code .
```
Now you have a copy of the Text Soup warmup in a new folder in your projects folder. We're making this copy so you don't work directly on my warmup solution code in the homework repo, which would cause a merge conflict next time you commit. Remember to link to this new `js/dat.gui.js` file with a `<script>` tag in your `index.html`.

**IMPORTANT**: Don't use the constructor-style example in the dat.gui help page I linked to. It will be simpler to just use an object to store your controller variables, like so:
```js
const controls = {
  fadeInSpeed: 100,
  // etc..
};

const gui = new dat.GUI();
gui.add(controls, 'fadeInSpeed', 0, 5000) etc...
```


## BONUS:
- add a controller to change the add word interval (consider [.add](https://github.com/dataarts/dat.gui/blob/master/API.md#GUI+add) and [.onFinishChange](https://github.com/dataarts/dat.gui/blob/master/API.md#Controller+onFinishChange))
- add a controller to change the text colour using the colour controller ([.addColor](https://github.com/dataarts/dat.gui/blob/master/API.md#GUI+addColor))
- add a text field controller, and use the word(s) from the text field in between every other random word that is added
- add a button controller which clears all words off the screen when pressed