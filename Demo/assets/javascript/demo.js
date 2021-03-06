Event.observe(window, 'load', loadSimplemodal, false);

function loadSimplemodal() {
  /* Alert */
  $('alert').observe('click', function() {
    var modal = new SimpleModal({
      btn_ok: 'Alert button',
      title: 'Alert Modal Title',
      contents: 'Lorem ipsum dolor sit amet...'
    });
    modal.showModal();
  });

  /* Confirm */
  $('confirm').observe('click', function() {
    var modal = new SimpleModal({
      btn_ok: 'Confirm button',
      model: 'confirm',
      callback: function(){
        alert('Action confirm!');
      },
      title: 'Confirm Modal Title',
      contents: 'Lorem ipsum dolor sit amet...'
    });
    modal.showModal();
  });

  /* Modal */
  $('modal').observe('click', function() {
    var modal = new SimpleModal({
      btn_ok: 'Confirm button',
      model: 'modal',
      title: 'Modal Window Title',
      contents: '<p ><img style="text-align:center" src="assets/images/simpleModalSmallWhite.png" />Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
    });
    modal.addButton('Confirm', 'btn primary', function() {
      alert('Action confirm modal');
      this.hideModal();
    });
    modal.addButton('Cancel', 'btn');
    modal.showModal();
  });

  /* Modal Ajax */
  $('modal-ajax').observe('click', function() {
    var modal = new SimpleModal({
      btn_ok: 'Confirm button',
      width: 600,
      model: 'modal-ajax',
      title: 'Are you sure you want to delete this?',
      param: {
        url: 'ajax-content.html',
        onRequestComplete: function() { },
        onRequestFailure: function() { }
      }
    })
    modal.addButton('Confirm', 'btn primary', function() {
      // Check
      if( $('confirm-text').value != "DELETE" ) {
        $('confirm-delete-error').show();
      } else {
        // Your code ...
        this.hideModal();
      }
    })
    modal.addButton('Cancel', 'btn').showModal();
  });

  /* Modal Image */
  $('modal-image').observe('click', function() {
    var modal = new SimpleModal({
      model: 'modal-ajax',
      title: 'Modal Lightbox',
      param: {
        url: 'assets/images/lightbox.jpg'
      }
    });
    modal.showModal();
  });

  /* NO Header */
  $('alert-noheader').observe('click', function() {
    var modal = new SimpleModal({
      hideHeader: true,
      closeButton: false,
      btn_ok: 'Close window',
      width: 600,
      model: 'alert',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    });
    modal.showModal();
  });

  /* Modal Video */
  $('modal-video').observe('click', function() {
    var modal = new SimpleModal({
      hideFooter: true,
      width: 710,
      title: 'Vimeo video',
      model: 'modal',
      contents: '<iframe src="http://player.vimeo.com/video/26198635?title=0&amp;byline=0&amp;portrait=0&amp;color=824571" width="680" height="382" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe>'
    });
    modal.showModal();
  });

  $('example-eheh').observe('click', function() {
    var modal = new SimpleModal({
      btn_ok: 'Confirm button',
      overlayClick: false,
      width: 300,
      model: 'modal',
      title: 'Eh eh eh',
      contents: '<p>Try clicking on the button \"Click ME please!\"</p>',

      onAppend: function() {
        var item = $("simple-modal").down(".simple-modal-footer a");
        var parent = item.parentElement;
        item.removeClassName("primary").setStyle({"background":"#824571","color": "#FFF" });
        parent.addClassName("align-left");
        item.observe("mouseenter", function() {
          if (parent.hasClassName("align-left")) {
            parent.removeClassName("align-left").addClassName("align-right");
          } else {
            parent.removeClassName("align-right").addClassName("align-left");
          }
        });
      }
    });
    modal.addButton("Click ME please!", "btn primary", function(){})
    modal.showModal();
  });
};