# repo-template
template for making repos

CREATE GITHUB REPO
	minified self-contained master 
		bundle script and style 
		base 64 images/media
			gzipped
			caching
	production master
		uses folders in repository, not for webpage or sending, too many requests
	images (media)
		use imagemaick for batch processing, pngs
	scripts
		divide scripts up per function, should not have to scroll
	styles
	docs (project commentary)
		have versions of files from development
		use internal scripts and styling
		no global variables, they will intefere with other iframes on page
		use prism for code and the result in an iframe
		keep contents fixed and disabled
		start
			introduce problem
			list features wanted
			why limits of features
		middle
			Investigate mechanics of problem, how it works
			describe solutions step by step
			and potential alternatives as well, why you choose not to use them, their pros and cons
			divide into think vs feel
			inner workings vs ui
		finish
			show finished work, demonstration
			make downloads available, should be minified
			list pros and cons of each
				Keyboard: ctrl + s 
				Mouse: download button
				install as PWA
				install as chrome extension
				download production version at github
		sources/snippets
			sources
				have headings
				mouse: drag and drop into bookmarks
				button: download as file to import
			snippets
				checkout snippet library to 
				intergrate snippets easily
				copy icon
				download as json or csv
	README
	LICENSE