/**
 * @file
 * CKEditor Accordion functionality.
 */

(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.ckeditorAccordion = {
    attach: function (context, settings) {

      // Create accordion functionality if the required elements exist is available.
      var $ckeditorAccordion = $('.ckeditor-accordion');
      if ($ckeditorAccordion.length > 0) {
        // Create simple accordion mechanism for each tab.
        $ckeditorAccordion.each(function () {
          var $accordion = $(this);
          if ($accordion.hasClass('styled')) {
            return;
          }

          // The first one is the correct one.
          if (!drupalSettings.ckeditorAccordion.accordionStyle.collapseAll) {
            $accordion.children('dt:first').addClass('active');
            $accordion.children('dd:first').addClass('active');
            $accordion.children('dd:first').css('display', 'block');
          }

          // Turn the accordion tabs to links so that the content is accessible & can be traversed using keyboard.
          $accordion.children('dt').each(function () {
            var $tab = $(this);
            var tabText = $tab.text().trim();
            var toggleClass = $tab.hasClass('active') ? ' active' : '';
            $tab.html('<a class="ckeditor-accordion-toggler" href="#"><span class="ckeditor-accordion-toggle' + toggleClass + '"></span>' + tabText + '</a>');
          });

          // Wrap the accordion in a div element so that quick edit function shows the source correctly.
          $accordion.addClass('styled').removeClass('ckeditor-accordion').wrap('<div class="ckeditor-accordion-container"></div>');

          // Trigger an ckeditorAccordionAttached event to let other frameworks know that the accordion has been attached.
          $accordion.trigger('ckeditorAccordionAttached');
        });

        // Add click event to body once because quick edits & ajax calls might reset the HTML.
        $('body').once('ckeditorAccordionToggleEvent').on('click', '.ckeditor-accordion-toggler', function (e) {
          var $t = $(this).parent();
          var $parent = $t.parent();

          // Clicking on open element, close it.
          if ($t.hasClass('active')) {
            $t.removeClass('active');
            $t.next().slideUp();
          }
          else {
            if(!drupalSettings.ckeditorAccordion.accordionStyle.keepRowsOpen) {
              // Remove active classes.
              $parent.children('dt.active').removeClass('active').children('a').removeClass('active');
              $parent.children('dd.active').slideUp(function () {
                $(this).removeClass('active');
              });
            }

            // Show the selected tab.
            $t.addClass('active');
            $t.next().slideDown(300).addClass('active');
          }

          // Don't add hash to url.
          e.preventDefault();
        });
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
;
var d = new Date(),
	ctTimeMs = new Date().getTime(),
	ctMouseEventTimerFlag = true, //Reading interval flag
	ctMouseData = "[",
	ctMouseDataCounter = 0,
  ctScrollCollected = false;

function ctSetCookie(cookies) {
  let useAltCookies = ct_use_alt_cookies;

  if(useAltCookies === 1) {
    let xhr = new XMLHttpRequest();

    let json = JSON.stringify(cookies);

    xhr.open("POST", '/admin/config/cleantalk/set_alt_cookies')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(json);
  } else {
    cookies.forEach(function (e) {
      document.cookie = e.name + "=" + encodeURIComponent(e.value) + "; path=/";
    })
  }
}

ctSetCookie(
  [
    {
      'name' : 'ct_check_js',
      'value' : ct_check_js_val
    },
    {
      'name' : 'ct_ps_timestamp',
      'value' : Math.floor(new Date().getTime()/1000)
    },
    {
      'name' : 'ct_fkp_timestamp',
      'value' : '0'
    },
    {
      'name' : 'ct_pointer_data',
      'value' : '0'
    },
    {
      'name' : 'ct_timezone',
      'value' : d.getTimezoneOffset()/60*(-1)
    },
    {
      'name' : 'apbct_antibot',
      'value' : drupal_ac_antibot_cookie_value
    },
    {
      'name' : 'ct_has_scrolled',
      'value' : false
    }
  ]
);

//Reading interval

var ctMouseReadInterval = setInterval(function() {
		ctMouseEventTimerFlag = true;
	}, 150);

//Writting interval

var ctMouseWriteDataInterval = setInterval(function() {
  if(typeof ct_use_alt_cookies !== "undefined" && ct_use_alt_cookies === 1) {
    return;
  }
		var ctMouseDataToSend = ctMouseData.slice(0,-1).concat("]");
		ctSetCookie([
      {
        'name' : 'ct_pointer_data',
        'value' : ctMouseDataToSend
      }
    ]);
	}, 1200);

//Stop observing function

function ctMouseStopData() {
	if(typeof window.addEventListener == "function")
		window.removeEventListener("mousemove", ctFunctionMouseMove);
	else
		window.detachEvent("onmousemove", ctFunctionMouseMove);
	clearInterval(ctMouseReadInterval);
	clearInterval(ctMouseWriteDataInterval);
}

//Logging mouse position each 300 ms

var ctFunctionMouseMove = function output(event) {
	if (ctMouseEventTimerFlag == true) {
		var mouseDate = new Date();
		ctMouseData += "[" + Math.round(event.pageY) + "," + Math.round(event.pageX) + "," + Math.round(mouseDate.getTime() - ctTimeMs) + "],";
		ctMouseDataCounter++;
		ctMouseEventTimerFlag = false;
		if(ctMouseDataCounter >= 100)
			ctMouseStopData();
	}
};

/**
 * Set scrolling cookie
 */
function ctSetHasScrolled() {
  if( ! ctScrollCollected ) {
    ctSetCookie([
      {
        'name' : 'ct_has_scrolled',
        'value' : true
      }
    ]);
    ctScrollCollected = true;
  }
}

//Stop key listening function

function ctKeyStopStopListening() {
	if (typeof window.addEventListener == "function") {
		window.removeEventListener("mousedown", ctFunctionFirstKey);
		window.removeEventListener("keydown", ctFunctionFirstKey);
	}
	else {
		window.detachEvent("mousedown", ctFunctionFirstKey);
		window.detachEvent("keydown", ctFunctionFirstKey);
	}
}

//Writing first key press timestamp

var ctFunctionFirstKey = function output(event) {
	var KeyTimestamp = Math.floor(new Date().getTime()/1000);
  ctSetCookie([
    {
      'name' : 'ct_fkp_timestamp',
      'value' : KeyTimestamp
    }
  ]);
	ctKeyStopStopListening();
};

if (typeof window.addEventListener == "function") {
	window.addEventListener("mousemove", ctFunctionMouseMove);
	window.addEventListener("mousedown", ctFunctionFirstKey);
	window.addEventListener("keydown", ctFunctionFirstKey);
  window.addEventListener("scroll", ctSetHasScrolled);
}
else {
	window.attachEvent("onmousemove", ctFunctionMouseMove);
	window.attachEvent("mousedown", ctFunctionFirstKey);
	window.attachEvent("keydown", ctFunctionFirstKey);
  window.attachEvent("scroll", ctSetHasScrolled);
}

function apbct_collect_visible_fields( form ) {

    // Get only fields
    var inputs = [],
        inputs_visible = '',
        inputs_visible_count = 0,
        inputs_invisible = '',
        inputs_invisible_count = 0,
        inputs_with_duplicate_names = [];

    for(var key in form.elements){
        if(!isNaN(+key))
            inputs[key] = form.elements[key];
    }

    // Filter fields
    inputs = inputs.filter(function(elem){

        // Filter already added fields
        if( inputs_with_duplicate_names.indexOf( elem.getAttribute('name') ) !== -1 ){
            return false;
        }
        // Filter inputs with same names for type == radio
        if( -1 !== ['radio', 'checkbox'].indexOf( elem.getAttribute("type") )){
            inputs_with_duplicate_names.push( elem.getAttribute('name') );
            return false;
        }
        return true;
    });

    // Visible fields
    inputs.forEach(function(elem, i, elements){
        // Unnecessary fields
        if(
            elem.getAttribute("type")         === "submit" || // type == submit
            elem.getAttribute('name')         === null     ||
            elem.getAttribute('name')         === 'ct_checkjs'
        ) {
            return;
        }
        // Invisible fields
        if(
            getComputedStyle(elem).display    === "none" ||   // hidden
            getComputedStyle(elem).visibility === "hidden" || // hidden
            getComputedStyle(elem).opacity    === "0" ||      // hidden
            elem.getAttribute("type")         === "hidden" // type == hidden
        ) {
            if( elem.classList.contains("wp-editor-area") ) {
                inputs_visible += " " + elem.getAttribute("name");
                inputs_visible_count++;
            } else {
                inputs_invisible += " " + elem.getAttribute("name");
                inputs_invisible_count++;
            }
        }
        // Visible fields
        else {
            inputs_visible += " " + elem.getAttribute("name");
            inputs_visible_count++;
        }

    });

    inputs_invisible = inputs_invisible.trim();
    inputs_visible = inputs_visible.trim();

    return {
        visible_fields : inputs_visible,
        visible_fields_count : inputs_visible_count,
        invisible_fields : inputs_invisible,
        invisible_fields_count : inputs_invisible_count,
    }

}

function apbct_visible_fields_set_cookie( visible_fields_collection ) {

    var collection = typeof visible_fields_collection === 'object' && visible_fields_collection !== null ?  visible_fields_collection : {};

    ctSetCookie([
        {
            'name' : 'apbct_visible_fields',
            'value' : JSON.stringify( collection )
        }
    ])
};
