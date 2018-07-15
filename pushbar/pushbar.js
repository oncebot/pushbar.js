class Pushbar{
	constructor(config = {overlay:true,blur:false}){
		this.current = null;
		this.overlay = false;
		if('overlay' in config){
			if(config.overlay){
				this.overlay = document.createElement('div');
				this.overlay.classList.add('pushbar_overlay');
				this.select('body').appendChild(this.overlay);
			}
		}
		if('blur' in config){
			if(config.blur){
				var main_content = document.querySelector('.pushbar_main_content');
				if(main_content){
					main_content.classList.add('pushbar_blur');
				}
			}
		}
		this.bindEvents();
	}
	bindEvents(){
		var triggers = document.querySelectorAll('[data-pushbar-target]');
		var closers = document.querySelectorAll('[data-pushbar-close]');
		var self = this;
		if(triggers){
			for (var i = 0; i < triggers.length; i++) {
			    triggers[i].addEventListener('click', function(e){
			   		e.preventDefault();
					var pushbar_id = this.getAttribute('data-pushbar-target');
					if(pushbar_id){
						self.open(pushbar_id);
					}
			    }, false);
			}
		}
		if(closers){
			for (var i = 0; i < closers.length; i++) {
			    closers[i].addEventListener('click', function(e){
			   		e.preventDefault();
					self.close();
			    }, false);
			}
		}
		if(this.overlay){
		    this.overlay.addEventListener('click', function(e){
		   		e.preventDefault();
				self.close();
		    }, false);			
		}
		document.addEventListener('keyup', function(e){
			if(self.current && e.keyCode == 27){
				self.close();
			}
		});

	}
	select(selector){
		return document.querySelector(selector);
	}
	opening(pushbar){
		if(pushbar){
			var event = new CustomEvent("pushbar_opening",{bubbles:true,detail:{pushbar:pushbar}});
			pushbar.dispatchEvent(event);
		}
	}
	closing(pushbar){
		if(pushbar){
			var event = new CustomEvent("pushbar_closing",{bubbles:true,detail:{pushbar:pushbar}});
			pushbar.dispatchEvent(event);
		}
	}
	add(pushbar){
		var pushbar_id = this.getId(pushbar);
		this.current = pushbar_id;
	}
	remove(pushbar){
		this.current = null;
	}
	current(){
		return this.current;
	}
	find(pushbar_id){
		var pushbar = this.select('[data-pushbar-id="'+pushbar_id+'"]');
		return pushbar;
	}
	getPushbar(pushbar){
		if(pushbar instanceof HTMLElement){
			return pushbar;
		}else{
			return this.find(pushbar);
		}
	}
	getId(pushbar){
		if(pushbar instanceof HTMLElement){
			return pushbar.getAttribute('data-pushbar-id');
		}else{
			return pushbar;
		}
	}
	open(pushbar){
		var pushbar_id = this.getId(pushbar);
		var pushbar = this.getPushbar(pushbar);
		if(pushbar){
			this.close();
			this.opening(pushbar);
			pushbar.classList.add('opened');
			this.select('html').classList.add('pushbar_locked');	
			this.select('html').setAttribute('pushbar',pushbar_id);	
			this.add(pushbar_id);
		}
	}
	close(){
		var pushbar  = this.select('[data-pushbar-id].opened');
		if(pushbar){
			this.closing(pushbar);
			pushbar.classList.remove('opened');
			this.select('html').classList.remove('pushbar_locked');	
			this.select('html').removeAttribute('pushbar');	
		}
		this.remove();
	}
}