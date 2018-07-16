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


[Oncebot](https://oncebot.com)
