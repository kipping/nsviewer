jQuery(document).ready(function() {

	viewer = new Viewer('#layer_list', '.layer_settings');
	viewer.addView('#view_axial', Viewer.AXIAL);
	viewer.addView('#view_coronal', Viewer.CORONAL);
	viewer.addView('#view_sagittal', Viewer.SAGITTAL);
	viewer.addSlider('opacity', '.slider#opacity', 'horizontal', 0, 1, 1, 0.05);
	viewer.addSlider('pos-threshold', '.slider#pos-threshold', 'horizontal', 0, 1, 0, 0.01);
	viewer.addSlider('neg-threshold', '.slider#neg-threshold', 'horizontal', 0, 1, 0, 0.01);
	viewer.addSlider("nav-xaxis", ".slider#nav-xaxis", "horizontal", 0, 1, 0.5, 0.01, Viewer.XAXIS);
	viewer.addSlider("nav-yaxis", ".slider#nav-yaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.YAXIS);
	viewer.addSlider("nav-zaxis", ".slider#nav-zaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.ZAXIS);

	viewer.addColorSelect('#select_color');
	viewer.addSignSelect('#select_sign')
	viewer.addDataField('voxelValue', '#data_current_value')
	viewer.addDataField('currentCoords', '#data_current_coords')
	viewer.clear()   // Paint canvas background while images load
	images = [
		{
			'url': 'data/MNI152.json',
			'name': 'MNI152 2mm',
			'colorPalette': 'grayscale',
			'cache': true
		},
		{
			'url': 'data/language_meta.json',
			'name': 'language meta-analysis',
			'colorPalette': 'blue'			
		},
		{
			'url': 'data/emotion_meta.nii.gz',
			'name': 'emotion meta-analysis',
			'colorPalette': 'green'
		},
		{	
			'name': 'spherical ROI',
			'colorPalette': 'yellow',
			'data': {
				'dims': [91, 109, 91],
				'peaks':
					{ 'peak1':
						{'x': -48, 'y': 20, 'z': 20, 'r': 6, 'value': 1 }
					}
			}
		}
	]
	viewer.loadImages(images);

});