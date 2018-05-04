var picture = require('cat-picture')
var image = require('lightning-image-poly')
var remote = require('electron').remote


var src = picture.src
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
var fs = require('fs')

picture.remove()

function save() {
	remote.getCurrentWebContents().printToPDF({
		portrait: true
	}, function (err, data) {
		fs.writeFile('annotation.pdf', data, function (err) {
			if(err) alert('err generating pdf!' + err.message)
			else alert('pdf saved!')
		})
	})
}

window.addEventListener('keydown', function (e) {
	if (e.keyCode == 80) save()
})