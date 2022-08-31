!function($,Drupal){Drupal.behaviors.hubspotGate={attach:function(context,settings){const gates=once("hubspotGate","[data-hubspot-form-id]",context),gated=once("hubspotGated","[data-gated-by]",context);$(gated).each((function(){var gateId=$(this).data("gated-by"),gateExists=$("#"+gateId).length,gateOpened=1==$.cookie(gateId);$(this).toggle(gateOpened||!gateExists)})),$(gates).each((function(){var formId=$(this).data("hubspot-form-id"),gateId=$(this).attr("id");if(1!=$.cookie(gateId)){var thisGate=$(this);hbspt.forms.create({region:"na1",portalId:"4727686",formId:formId,target:"#"+gateId,onFormSubmitted:function(form){$("[data-gated-by="+gateId+"]").show(),thisGate.hide(),$.cookie(gateId,1)}})}else $(this).hide()}))}}}(jQuery,Drupal);;
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.sonoco_blocks_swiftype_search = {
    attach: function(context, settings){

      // Redirect the search form to submit to the swiftype search results page.
      $(context).find('body').each(function () {
        $(this).find('div.block-sonoco-search-block > form').each(function (event) {
          var form = $(this);

          $(form).submit(function( event ) {
            event.preventDefault();
            
            var query = $(this).find('input[name=stq]').val();
            query = encodeURIComponent(query);
            query = query.replace(/%20/g,'+');

            window.location = form.attr('action') + '#stq=' + query + '&stp=1';
          });
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
;
