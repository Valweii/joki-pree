	window.onload = function(){
		var getNavi = document.getElementById('navigation');

		var mobile = document.createElement("span");
		mobile.setAttribute("id","mobile-navigation");
		getNavi.parentNode.insertBefore(mobile,getNavi);

		document.getElementById('mobile-navigation').onclick = function(){
			var a = getNavi.getAttribute('style');
			if(a){
				getNavi.removeAttribute('style');
				document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-menu.png)';
			} else {
				getNavi.style.display='block';
				document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-close.png)';
			}
		};
		var getElm = getNavi.getElementsByTagName("LI");
		for(var i=0;i<getElm.length;i++){
			if(getElm[i].children.length>1){
				var smenu = document.createElement("span");
				smenu.setAttribute("class","mobile-submenu");
				smenu.setAttribute("OnClick","submenu("+i+")");
				getElm[i].appendChild(smenu);
			};
		};
		submenu = function (i){
			var sub = getElm[i].children[1];
			var b = sub.getAttribute('style');
			if(b){
				sub.removeAttribute('style');
				getElm[i].lastChild.style.backgroundImage='url(images/mobile-expand.png)';
				getElm[i].lastChild.style.backgroundColor='rgba(11, 163, 156, 0.7)';
			} else {
				sub.style.display='block';
				getElm[i].lastChild.style.backgroundImage='url(images/mobile-collapse.png)';
				getElm[i].lastChild.style.backgroundColor='rgba(0,0,0,0.8)';
			}
		};
	};

	function validateForm(){
		let name = document.getElementById("name-data").value
		let email = document.getElementById("email-data").value
		let img = document.getElementById("file-data").value

		if (name.length < 6){
			document.getElementById("error-name").innerHTML = "Name must be more than 6 characters"
		}else{
			document.getElementById("error-name").innerHTML = ""
		}

		if (!email.endsWith("@gmail.com")){
			document.getElementById("error-email").innerHTML = "Email must end with @gmail.com"
		}else{
			document.getElementById("error-email").innerHTML = ""
		}

		const validImageTypes = ['jpeg', 'png', 'jpg'];
		if (!isImage(img)) {
			document.getElementById("error-file").innerHTML = "File type must be jpg/jpeg/png"
		}else{
			document.getElementById("error-file").innerHTML = ""
		}
	}

	function getExtension(filename) {
		var parts = filename.split('.');
		return parts[parts.length - 1];
	}

	function isImage(filename){
		var ext = getExtension(filename);

		switch (ext.toLowerCase()) {
			case 'jpg':
			case 'jpeg':
			case 'png':
			return true;
		}
		return false;
	}
