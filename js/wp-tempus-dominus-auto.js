(function ($) {
	jQuery.getScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment-with-locales.min.js").done(function () {
		jQuery.getScript("https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/js/tempusdominus-bootstrap-4.min.js").done(function () {
			$('<link/>', {
				rel: 'stylesheet',
				type: 'text/css',
				href: "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/css/tempusdominus-bootstrap-4.min.css"
			}).appendTo('head');
			$('<link/>', {
				rel: 'stylesheet',
				type: 'text/css',
				href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
			}).appendTo('head');
			
			$(function () {
				$('input[type=date], input[type=time], input[type=datetime], input.tempus-dominus, input.tempus-dominus-time, input.tempus-dominus-date')
					.not('.no-tempus-dominus')
					.each(function (ix, e) {
						var $input = $(e);
						
						var id     = 'auto-tempus-dominus-' + ix;
						$input.attr('data-target', '#' + id);
						
						var type   = 'datetime';
						var format = 'YYYY-MM-DD HH:mm:ss';
						var local2 = 'en-gb';
						var icon   = 'fa-calendar';
						
						if ( $input.attr('type') == 'time' || $input.is('.tempus-dominus-time') ) {
							type   = 'time';
							format = 'HH:mm:ss';
							icon   = 'fa-clock-o';
						}
						if ( $input.attr('type') == 'date' || $input.is('.tempus-dominus-date') ) {
							type   = 'date';
							format = 'YYYY-MM-DD';
						}
						
						var $group = $input.wrap('<div class="input-group date" id="' + id + '" data-target-input="nearest"></div>').parent();
						$group.append('<div class="input-group-append" data-target="#' + id + '" data-toggle="datetimepicker"><div class="input-group-text"><i class="fa ' + icon + '"></i></div></div>');
						
						if ( e.hasAttribute('data-tempus-dominus-format') ) {
							format = e.getAttribute('data-tempus-dominus-format');
						}
						
						if ( e.hasAttribute('data-tempus-dominus-locale') ) {
							locale = e.getAttribute('data-tempus-dominus-locale');
						}
						
						$input.attr('type', 'text');
						$group.datetimepicker({ "format": format, "locale": local2 });
						$input.focus(function () {
							$group.datetimepicker('show');
						});
						
						// Put data-tempus-dominus-linked="#id" on the end time
						if ( $input.attr('data-tempus-dominus-linked') ) {
							var $linked = $( $input.attr('data-tempus-dominus-linked') );
							$linked.on("change.datetimepicker", function (e) {
								$input.datetimepicker('minDate', e.date);
							});
							$input.on("change.datetimepicker", function (e) {
								$linked.datetimepicker('maxDate', e.date);
							});
						}
					});
			});
		});
	});
})(jQuery);
