Modal - A simple modal window
===========================================
SIMPLE MODAL is a small plugin for Prototype to create modal windows. It's heavily based on SIMPLE MODAL for Mootools (http://simplemodal.plasm.it/)
It can be used to generate alert or confirm messages with few lines of code. Confirm configuration involves the use of callbacks to be applied to affirmative action; it can work in asynchronous mode and retrieve content from external pages or getting the inline content.
SIMPLE MODAL is not a lightbox although the possibility to hide parts of its layout may partially make it similar.

How to Use
----------

Minimal configuration


ALERT INTEGRATION
-----------------
Snippet code Javascript:

```javascript
$('alert').observe('click', function() {
  var modal = new SimpleModal({
    btn_ok: 'Alert button',
    title: 'Alert Modal Title',
    contents: 'Lorem ipsum dolor sit amet...'
  });
  modal.showModal();
});
```

MODAL-AJAX INTEGRATION
----------------------
Snippet code Javascript:

```javascript
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
```