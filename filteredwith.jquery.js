/*
 * filteredWith
 * Filters a select element from the selected item of another select element.
 *
 * Copyright (c) 2014 Jonathan Underwood
 *
 * Licensed under the MIT license
 *
 * Version: 1.1.0
 *
 */

;(function($, window, document, undefined) {
  "use strict";

  $.fn.filteredWith = function(filteringSelect, options) {
    var settings = $.extend( {}, $.fn.filteredWith.defaults, options);

    return this.each(function() {
      var self = this;
      var backup = $(this).html();

      $(filteringSelect).each(function() {

        $(this).bind('change', function() {
          var filteringSelection = $(filteringSelect + ' :selected').text();
          var filteredOptions = $(backup).filter("optgroup[label='" + filteringSelection + "']");

          if (filteredOptions.length === 0) {
            $(self).html(backup);
          } else {
            $(filteredOptions).prepend('<option value="">' + settings.subText + '</option>');
            $(self).html(filteredOptions.html());
          };
        });
      });
    });
  };

  $.fn.filteredWith.defaults = {
    subText: '--'
  };
})(jQuery, window, document);
