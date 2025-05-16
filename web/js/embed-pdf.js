	const canvas = document.getElementById('pdf-canvas');
	const pdfUrl = '/web/media/hello-world.pdf';
	
	pdfjsLib.GlobalWorkerOptions.workerSrc = '/web/js/pdf.worker.mjs';
	pdfjsLib.getDocument(pdfUrl).promise.then(function (pdfDoc) {
		// Continue with further steps.
	});
	
	pdfDoc.getPage(1).then(function (page) {
		// Continue with further steps.
	});
	
	const viewport = page.getViewport({ scale: 1 });
	canvas.width = viewport.width;
	canvas.height = viewport.height;
	
	const ctx = canvas.getContext('2d');
	const renderContext = {
		canvasContext: ctx,
		viewport: viewport,
	};
	
	page.render(renderContext);
	
	pdfjsLib
	.getDocument(pdfUrl)
	.promise.then(function (pdfDoc) {
		// Handling and rendering logic.
	})
	.catch(function (error) {
		console.log('Error loading PDF file:', error);
	});