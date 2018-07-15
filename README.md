# Pushbar.js
Pushbar.js is a tiny javascript plugin for creating sliding drawers in web apps
It is fully customizable and dependency free.You can use it as sidebar menus or option drawers.


[Demo](https://oncebot.github.io/pushbar.js/)


### Installation

1. Add the pushbar.css file to the head of your html.
2. Add the pushbar.js file to the head of your html or right before the closing body tag.
3. Add this code after the pushbar.js script tag to initialize the plugin.
```
<script type="text/javascript">
      new Pushbar({
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

### How to use 

* Your pushbar must have the class .pushbar and any of the directional classes: .from_left, .from_right, .from_top, .from_bottom to set the opening direction.
* Pushbar also must have an attribute : data-pushbar-id , which must have a unique value for that pushbar.
* Your pushbar open button must have an attribute : data-pushbar-target, with the name of the pushbar as value (same value as data-pushbar-id).
* data-pushbar-close attribute can be used on any element to make it a close button for all pushbars.
* Your main content must have the class .pushbar_main_content.

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

### Important CSS classes for modification 

* .from_left, .from_right: change the width for your sidebars.
* .from_top, .from_bottom: change the height for your top and bottom bars.
* .pushbar_overlay: change the background and opacity for the overlay.

[Oncebot](https://oncebot.com)
