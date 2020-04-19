// ==UserScript==
// @name lib.ru Enhancer
// @version 1.0
// @author taviskaron
// @description Provides the scarce interface of lib.ru with simple text formatting options
// @grant none
// @include *://lib.ru/*
// @include *://*.lib.ru/*
// @exclude *://lib.ru/
// @exclude *://*.lib.ru/
// @run-at document-end
// ==/UserScript==
		


(function() {
  
  
  

  	// ================ ADD YOUR FONTS ================ //

  	// enter your favourite serif font here (inside the quotation marks). The font must be already installed.
  
		var yourFontSerif = 'Source Serif Pro';
  
  	// enter your favourite sans-serif font here (inside the quotation marks). The font must be already installed.
  
  	var yourFontSansSerif = 'Source Sans Pro';
  
  // ================================================= //
  
  
  
  

		// getting the location with the current page stripped off
		// var loc = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") );

    var upperSelects = document.createElement('div');
		upperSelects.innerHTML = '<div style = "height:10px; background:gray;">';


   	// predefined container styling
    document.body.style.margin = '0 auto';
    document.body.style.width = '608px';
	

    // creating extra controls
		// font selector
    var fontSelect = document.createElement('div');
    fontSelect.innerHTML = '<select style="margin-right:5px;" id="fontss"><option disabled selected="selected" value="">Шрифт: антиква</option><option value="PT Serif">PT Serif</option><option value="Lingua Franca">Lingua Franca</option><option value="' +yourFontSerif+'">' +yourFontSerif+ '</option><option disabled>Шрифт:гротеск</option><option value="PT Sans">PT Sans</option><option value="'+yourFontSansSerif+'">'+yourFontSansSerif+'</option><option value="Tahoma">Tahoma</option><option value="Open Sans">Open Sans</option></select>';

		// line height selector
    var lineHeightSelect = document.createElement('div');
    lineHeightSelect.innerHTML = '<select style="margin-right:5px;" id="lineheights"><option disabled selected="selected" value="">Интерлиньяж</option><option value="inherit">По умолчанию</option><option value="1.38rem">Увеличенный</option><option value="1.5rem">Увеличенный + </option></select>';

    // background selector
		var backgroundSelect = document.createElement('div');
    backgroundSelect.innerHTML = '<select style="margin-right:5px;" id="backgrounds"><option disabled selected="selected" value="">Фон</option><option value="white">Белый</option><option value="#fafafa">Снежнодымный</option><option value="aliceblue">Синяя Элис</option><option value="floralwhite">Старина</option></select>';

		// apply button
    var applyBtn = document.createElement('div');
    applyBtn.innerHTML = '<a style="cursor:pointer; font-family:Tahoma, Verdana, sans-serif; font-size: 14px; background:#fafafa; border:1px gray solid; padding:0 3px; margin: 0 5px;" id="app">Применить</a>';

		// level up link
		//var levelUp = document.createElement('div');
		//levelUp.innerHTML = '<a style="cursor:pointer; font-family:Tahoma, Verdana, sans-serif; font-size: 14px; padding:0 3px; margin: 0 5px;" id="app" href="' + loc +'">Страница автора</a>';



    // placing the controls
		document.documentElement.prepend(upperSelects);

    while (fontSelect.firstChild) {
    upperSelects.appendChild(fontSelect.firstChild);
    upperSelects.appendChild(backgroundSelect.firstChild);
    upperSelects.appendChild(lineHeightSelect.firstChild);
    upperSelects.appendChild(applyBtn.firstChild);
    //upperSelects.appendChild(levelUp.firstChild);
    }


    // the function recalculates the overall style
    function recalc() {
        document.body.style.backgroundColor = document.getElementById('backgrounds').value;
        document.body.style.fontFamily = document.getElementById('fontss').value;
        document.body.style.lineHeight = document.getElementById('lineheights').value;

        var pres = document.getElementsByTagName('pre');
            for (i=0; i<pres.length-1; i++) {
                pres[i].style.fontFamily = document.getElementById('fontss').value;
                pres[i].style.lineHeight = document.getElementById('lineheights').value;
            }
    }



    // event handlers for both functions
    document.getElementById('app').addEventListener("click", recalc, false);
    document.getElementById('app').addEventListener("click", realign, false);
  
  
  
})();