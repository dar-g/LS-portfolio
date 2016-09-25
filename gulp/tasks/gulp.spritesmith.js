// dz1
'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function () {
	  var spriteData = $.gulp.src('./source/images/*.png')
	  	.pipe($.spritesmith({
		    imgName: 'sprite.png',
		    cssName: 'sprite.css'
	  	}));

	  var imgStream = spriteData.img
    	.pipe($.gulp.dest($.config.root + '/assets/img'));

	  var cssStream = spriteData.css
	    .pipe($.gulp.dest($.config.root + '/assets/css'));

	  return $.merge(imgStream, cssStream);

	  	// return spriteData.pipe($.gulp.dest($.config.root + '/assets/img'));
	});
};