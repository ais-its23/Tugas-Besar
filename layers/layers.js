var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_RAWANBANJIRDISS_1 = new ol.format.GeoJSON();
var features_RAWANBANJIRDISS_1 = format_RAWANBANJIRDISS_1.readFeatures(json_RAWANBANJIRDISS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAWANBANJIRDISS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAWANBANJIRDISS_1.addFeatures(features_RAWANBANJIRDISS_1);
var lyr_RAWANBANJIRDISS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAWANBANJIRDISS_1, 
                style: style_RAWANBANJIRDISS_1,
                popuplayertitle: "RAWAN BANJIR DISS",
                interactive: true,
    title: 'RAWAN BANJIR DISS<br />\
    <img src="styles/legend/RAWANBANJIRDISS_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/RAWANBANJIRDISS_1_1.png" /> Rendah<br />\
    <img src="styles/legend/RAWANBANJIRDISS_1_2.png" /> Sedang<br />\
    <img src="styles/legend/RAWANBANJIRDISS_1_3.png" /> Tinggi<br />\
    <img src="styles/legend/RAWANBANJIRDISS_1_4.png" /> Sangat Tinggi<br />'
        });
var format_JANGKAUAN_2 = new ol.format.GeoJSON();
var features_JANGKAUAN_2 = format_JANGKAUAN_2.readFeatures(json_JANGKAUAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUAN_2.addFeatures(features_JANGKAUAN_2);
var lyr_JANGKAUAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGKAUAN_2, 
                style: style_JANGKAUAN_2,
                popuplayertitle: "JANGKAUAN",
                interactive: true,
    title: 'JANGKAUAN<br />\
    <img src="styles/legend/JANGKAUAN_2_0.png" /> 2000<br />\
    <img src="styles/legend/JANGKAUAN_2_1.png" /> 3000<br />'
        });
var format_permukiman_new_2_3 = new ol.format.GeoJSON();
var features_permukiman_new_2_3 = format_permukiman_new_2_3.readFeatures(json_permukiman_new_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_permukiman_new_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_permukiman_new_2_3.addFeatures(features_permukiman_new_2_3);
var lyr_permukiman_new_2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_permukiman_new_2_3, 
                style: style_permukiman_new_2_3,
                popuplayertitle: "permukiman_new_2",
                interactive: true,
                title: '<img src="styles/legend/permukiman_new_2_3.png" /> permukiman_new_2'
            });
var format_Ind_Sampah_Atribute_4 = new ol.format.GeoJSON();
var features_Ind_Sampah_Atribute_4 = format_Ind_Sampah_Atribute_4.readFeatures(json_Ind_Sampah_Atribute_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ind_Sampah_Atribute_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ind_Sampah_Atribute_4.addFeatures(features_Ind_Sampah_Atribute_4);
var lyr_Ind_Sampah_Atribute_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ind_Sampah_Atribute_4, 
                style: style_Ind_Sampah_Atribute_4,
                popuplayertitle: "Ind_Sampah_Atribute",
                interactive: true,
                title: '<img src="styles/legend/Ind_Sampah_Atribute_4.png" /> Ind_Sampah_Atribute'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_RAWANBANJIRDISS_1.setVisible(true);lyr_JANGKAUAN_2.setVisible(true);lyr_permukiman_new_2_3.setVisible(true);lyr_Ind_Sampah_Atribute_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_RAWANBANJIRDISS_1,lyr_JANGKAUAN_2,lyr_permukiman_new_2_3,lyr_Ind_Sampah_Atribute_4];
lyr_RAWANBANJIRDISS_1.set('fieldAliases', {'TK_Rawan': 'TK_Rawan', 'Nilai_Rent': 'Nilai_Rent', });
lyr_JANGKAUAN_2.set('fieldAliases', {'nomor': 'nomor', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', });
lyr_permukiman_new_2_3.set('fieldAliases', {'Id': 'Id', 'nomor': 'nomor', 'Jangkauan': 'Jangkauan', });
lyr_Ind_Sampah_Atribute_4.set('fieldAliases', {'Alternatif': 'Alternatif', 'Kecamatan': 'Kecamatan', 'Deskripsi': 'Deskripsi', });
lyr_RAWANBANJIRDISS_1.set('fieldImages', {'TK_Rawan': 'TextEdit', 'Nilai_Rent': 'TextEdit', });
lyr_JANGKAUAN_2.set('fieldImages', {'nomor': 'TextEdit', 'Jangkauan': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_permukiman_new_2_3.set('fieldImages', {'Id': 'TextEdit', 'nomor': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_Ind_Sampah_Atribute_4.set('fieldImages', {'Alternatif': 'TextEdit', 'Kecamatan': '', 'Deskripsi': '', });
lyr_RAWANBANJIRDISS_1.set('fieldLabels', {'TK_Rawan': 'inline label - always visible', 'Nilai_Rent': 'inline label - always visible', });
lyr_JANGKAUAN_2.set('fieldLabels', {'nomor': 'hidden field', 'Jangkauan': 'inline label - always visible', 'type': 'hidden field', 'start': 'hidden field', });
lyr_permukiman_new_2_3.set('fieldLabels', {'Id': 'hidden field', 'nomor': 'inline label - always visible', 'Jangkauan': 'hidden field', });
lyr_Ind_Sampah_Atribute_4.set('fieldLabels', {'Alternatif': 'no label', 'Kecamatan': 'no label', 'Deskripsi': 'no label', });
lyr_Ind_Sampah_Atribute_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});