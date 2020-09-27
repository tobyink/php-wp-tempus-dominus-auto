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
			
			jQuery.fn.datetimepicker.Constructor.prototype._notifyEvent = function _notifyEvent(e) {
				if (e.type === jQuery.fn.datetimepicker.Constructor.Event.CHANGE && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate)) {
					return;
				}
				this._element.trigger(e);
			};
			
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
						
						if ( e.hasAttribute('data-tempus-dominus-format') ) {
							format = e.getAttribute('data-tempus-dominus-format');
						}
						
						if ( e.hasAttribute('data-tempus-dominus-locale') ) {
							local2 = e.getAttribute('data-tempus-dominus-locale');
						}
						
						if ( e.hasAttribute('data-tempus-dominus-icon') ) {
							icon = e.getAttribute('data-tempus-dominus-icon');
						}
						
						var $group = $input.wrap('<div class="input-group date" id="' + id + '" data-target-input="nearest"></div>').parent();
						$group.append('<div class="input-group-append" data-target="#' + id + '" data-toggle="datetimepicker"><div class="input-group-text"><i class="fa ' + icon + '"></i></div></div>');
						
						$input.attr('type', 'text');
						$group.datetimepicker({ "format": format, "locale": local2 });
						
						$group.on('hide.datetimepicker', function () {
							$group.find('.input-group-text').html('<i class="fa ' + icon + '"></i>');
						});
						$group.on('show.datetimepicker', function () {
							$group.find('.input-group-text').html('<i class="fa fa-close"></i>');
						});
						
						if ( e.hasAttribute('data-tempus-dominus-onclick') ) {
							$input.click(function () { $group.datetimepicker('toggle'); });
						}
						
						if ( e.hasAttribute('data-tempus-dominus-overlay') ) {
							$group.css({ 'position': 'relative' });
							$group.append('<span class="tempus-dominus-overlay text-muted"></span>');
							var $overlay = $group.find('.tempus-dominus-overlay');
							var overlay_fmt = e.getAttribute('data-tempus-dominus-overlay');
							$overlay.css({
								'position':  'absolute',
								'top':       '5px',
								'right':     ( $group.find('.input-group-append').height() + 10 )+'px',
								'z-index':   5,
								'font-size': '80%',
							});
							$input.change(function () {
								var m = moment( $input.val(), format );
								$overlay.text( m.format(overlay_fmt) );
							});
							$input.keyup(function () {
								var m = moment( $input.val(), format );
								$overlay.text( m.format(overlay_fmt) );
							});
							$group.on("change.datetimepicker", function (e) {
								var m = e.date;
								$overlay.text( m.format(overlay_fmt) );
							});
							setInterval(
								function () {
									var m = moment( $input.val(), format );
									$overlay.text( m.format(overlay_fmt) );
								},
								1000
							);
						}
						
						// Put data-tempus-dominus-linked="#id" on the end time
						if ( $input.attr('data-tempus-dominus-linked') ) {
							var $linked = $( $input.attr('data-tempus-dominus-linked') ).parents('.input-group');
							$linked.on("change.datetimepicker", function (e) {
								$group.datetimepicker('minDate', e.date);
							});
							$group.on("change.datetimepicker", function (e) {
								$linked.datetimepicker('maxDate', e.date);
							});
						}
					});
			});
		});
	});
})(jQuery);
