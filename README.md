# Pushbar.js
Pushbar.js is a tiny javascript plugin for creating sliding drawers in web apps
It is fully customizable and dependency free.You can use it as sidebar menus or option drawers.


[Demo](https://oncebot.github.io/pushbar.js/)

![Pushbar. animated](https://oncebot.github.io/pushbar.js/animated.pushbar.js.gif)



### Installation

1. Add the pushbar.css file to the head of your html.
2. Add the pushbar.js file to the head of your html or right before the closing body tag.
3. Add this code after the pushbar.js script tag to initialize the plugin.
```
<script type="text/javascript">
  var pushbar = new Pushbar({
        blur:true,
        overlay:true,
      });
</script>
	
```

### Example HTML
```
  <div data-pushbar-id="mypushbar1" class="pushbar from_left">
      Push bar content 1

      <button data-pushbar-close>Close</button>
  </div>

  <div data-pushbar-id="mypushbar2" class="pushbar from_bottom">
      Push bar content 2

      <button data-pushbar-close>Close</button>
  </div>

  <div class="pushbar_main_content">
      Main content of the page

      <button data-pushbar-target="mypushbar1">
      Open my pushbar 1
      </button>

      <button data-pushbar-target="mypushbar2">
      Open my pushbar 2
      </button>
  </div>
 ```

### Options

1. blur : set it to true for blur effect on the main content (Default:false)
2. overlay : set it to true for dark overlay effect on the main content (Default:true)

### API

Open and close pushbar with api
```
<script type="text/javascript">
  var pushbar =   new Pushbar({
        blur:true,
        overlay:true,
      });

  //open a pushbar
  pushbar.open('mypushbar1');	
  //close all pushbars
  pushbar.close();	
</script>
```

### Emitted events 
* 'pushbar_opening': when a pushbar is opening, that pushbar element will emit this event.
* 'pushbar_closing': when a pushbar is closing, that pushbar element will emit this event.

### License

```
MIT License

Copyright (c) 2018 Biraj Ghosh <biraj@oncebot.com>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

[Oncebot](https://oncebot.com)
