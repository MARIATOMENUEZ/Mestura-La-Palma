var wms_layers = [];

var format_CANARIASLAPALMAZonasProtegidas_0 = new ol.format.GeoJSON();
var features_CANARIASLAPALMAZonasProtegidas_0 = format_CANARIASLAPALMAZonasProtegidas_0.readFeatures(json_CANARIASLAPALMAZonasProtegidas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANARIASLAPALMAZonasProtegidas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANARIASLAPALMAZonasProtegidas_0.addFeatures(features_CANARIASLAPALMAZonasProtegidas_0);
var lyr_CANARIASLAPALMAZonasProtegidas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANARIASLAPALMAZonasProtegidas_0,
maxResolution:42.00669922839295,
 
                style: style_CANARIASLAPALMAZonasProtegidas_0,
                popuplayertitle: "CANARIAS-LAPALMA-Zonas-Protegidas",
                interactive: true,
                title: '<img src="styles/legend/CANARIASLAPALMAZonasProtegidas_0.png" /> CANARIAS-LAPALMA-Zonas-Protegidas'
            });
var format_CANARIASLAPALMAsuppoblaciones_1 = new ol.format.GeoJSON();
var features_CANARIASLAPALMAsuppoblaciones_1 = format_CANARIASLAPALMAsuppoblaciones_1.readFeatures(json_CANARIASLAPALMAsuppoblaciones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANARIASLAPALMAsuppoblaciones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANARIASLAPALMAsuppoblaciones_1.addFeatures(features_CANARIASLAPALMAsuppoblaciones_1);
var lyr_CANARIASLAPALMAsuppoblaciones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANARIASLAPALMAsuppoblaciones_1, 
                style: style_CANARIASLAPALMAsuppoblaciones_1,
                popuplayertitle: "CANARIAS-LAPALMA-sup-poblaciones",
                interactive: true,
                title: '<img src="styles/legend/CANARIASLAPALMAsuppoblaciones_1.png" /> CANARIAS-LAPALMA-sup-poblaciones'
            });
var format_CANARIASLAPALMAEdificacionLava_2 = new ol.format.GeoJSON();
var features_CANARIASLAPALMAEdificacionLava_2 = format_CANARIASLAPALMAEdificacionLava_2.readFeatures(json_CANARIASLAPALMAEdificacionLava_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANARIASLAPALMAEdificacionLava_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANARIASLAPALMAEdificacionLava_2.addFeatures(features_CANARIASLAPALMAEdificacionLava_2);
var lyr_CANARIASLAPALMAEdificacionLava_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANARIASLAPALMAEdificacionLava_2, 
                style: style_CANARIASLAPALMAEdificacionLava_2,
                popuplayertitle: "CANARIAS-LAPALMA-Edificacion-Lava",
                interactive: true,
                title: '<img src="styles/legend/CANARIASLAPALMAEdificacionLava_2.png" /> CANARIAS-LAPALMA-Edificacion-Lava'
            });
var format_CANARIASLAPALMAptospoblaciones_3 = new ol.format.GeoJSON();
var features_CANARIASLAPALMAptospoblaciones_3 = format_CANARIASLAPALMAptospoblaciones_3.readFeatures(json_CANARIASLAPALMAptospoblaciones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANARIASLAPALMAptospoblaciones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANARIASLAPALMAptospoblaciones_3.addFeatures(features_CANARIASLAPALMAptospoblaciones_3);
var lyr_CANARIASLAPALMAptospoblaciones_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANARIASLAPALMAptospoblaciones_3,
maxResolution:28.00446615226196,
 
                style: style_CANARIASLAPALMAptospoblaciones_3,
                popuplayertitle: "CANARIAS-LAPALMA-ptos-poblaciones",
                interactive: true,
                title: 'CANARIAS-LAPALMA-ptos-poblaciones'
            });
var format_CANARIASLAPALMALavaAridane2021_4 = new ol.format.GeoJSON();
var features_CANARIASLAPALMALavaAridane2021_4 = format_CANARIASLAPALMALavaAridane2021_4.readFeatures(json_CANARIASLAPALMALavaAridane2021_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANARIASLAPALMALavaAridane2021_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANARIASLAPALMALavaAridane2021_4.addFeatures(features_CANARIASLAPALMALavaAridane2021_4);
var lyr_CANARIASLAPALMALavaAridane2021_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANARIASLAPALMALavaAridane2021_4, 
                style: style_CANARIASLAPALMALavaAridane2021_4,
                popuplayertitle: "CANARIAS-LAPALMA-Lava-Aridane-2021",
                interactive: true,
                title: '<img src="styles/legend/CANARIASLAPALMALavaAridane2021_4.png" /> CANARIAS-LAPALMA-Lava-Aridane-2021'
            });
var format_CANARIASLAPALMAContorno_5 = new ol.format.GeoJSON();
var features_CANARIASLAPALMAContorno_5 = format_CANARIASLAPALMAContorno_5.readFeatures(json_CANARIASLAPALMAContorno_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANARIASLAPALMAContorno_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANARIASLAPALMAContorno_5.addFeatures(features_CANARIASLAPALMAContorno_5);
var lyr_CANARIASLAPALMAContorno_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANARIASLAPALMAContorno_5, 
                style: style_CANARIASLAPALMAContorno_5,
                popuplayertitle: "CANARIAS-LAPALMA-Contorno",
                interactive: true,
                title: '<img src="styles/legend/CANARIASLAPALMAContorno_5.png" /> CANARIAS-LAPALMA-Contorno'
            });
var format_CANARIASLAPALMALAVAhitos_6 = new ol.format.GeoJSON();
var features_CANARIASLAPALMALAVAhitos_6 = format_CANARIASLAPALMALAVAhitos_6.readFeatures(json_CANARIASLAPALMALAVAhitos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANARIASLAPALMALAVAhitos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANARIASLAPALMALAVAhitos_6.addFeatures(features_CANARIASLAPALMALAVAhitos_6);
var lyr_CANARIASLAPALMALAVAhitos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANARIASLAPALMALAVAhitos_6,
maxResolution:28.00446615226196,
 
                style: style_CANARIASLAPALMALAVAhitos_6,
                popuplayertitle: "CANARIAS-LAPALMA-LAVA-hitos",
                interactive: true,
                title: '<img src="styles/legend/CANARIASLAPALMALAVAhitos_6.png" /> CANARIAS-LAPALMA-LAVA-hitos'
            });

lyr_CANARIASLAPALMAZonasProtegidas_0.setVisible(true);lyr_CANARIASLAPALMAsuppoblaciones_1.setVisible(true);lyr_CANARIASLAPALMAEdificacionLava_2.setVisible(true);lyr_CANARIASLAPALMAptospoblaciones_3.setVisible(true);lyr_CANARIASLAPALMALavaAridane2021_4.setVisible(true);lyr_CANARIASLAPALMAContorno_5.setVisible(true);lyr_CANARIASLAPALMALAVAhitos_6.setVisible(true);
var layersList = [lyr_CANARIASLAPALMAZonasProtegidas_0,lyr_CANARIASLAPALMAsuppoblaciones_1,lyr_CANARIASLAPALMAEdificacionLava_2,lyr_CANARIASLAPALMAptospoblaciones_3,lyr_CANARIASLAPALMALavaAridane2021_4,lyr_CANARIASLAPALMAContorno_5,lyr_CANARIASLAPALMALAVAhitos_6];
lyr_CANARIASLAPALMAZonasProtegidas_0.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'ETIQUETA': 'ETIQUETA', 'TIPO_0107': 'TIPO_0107', 'ID_ENP': 'ID_ENP', 'DESIG_ABBR': 'DESIG_ABBR', 'ID_BIC': 'ID_BIC', 'ID_BICCA': 'ID_BICCA', 'ID_NG': 'ID_NG', 'PRIORIDAD': 'PRIORIDAD', 'F_ALTA': 'F_ALTA', 'layer': 'layer', 'path': 'path', });
lyr_CANARIASLAPALMAsuppoblaciones_1.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'ETIQUETA': 'ETIQUETA', 'TIPO_0502': 'TIPO_0502', 'INE_0502': 'INE_0502', 'FECHA_INE': 'FECHA_INE', 'HABIT_0502': 'HABIT_0502', 'CODIGO_EP': 'CODIGO_EP', 'ID_EP': 'ID_EP', 'ID_BIC': 'ID_BIC', 'ID_BICCA': 'ID_BICCA', 'ID_NG': 'ID_NG', 'PRIORIDAD': 'PRIORIDAD', 'F_ALTA': 'F_ALTA', 'layer': 'layer', 'path': 'path', });
lyr_CANARIASLAPALMAEdificacionLava_2.set('fieldAliases', {'id': 'id', });
lyr_CANARIASLAPALMAptospoblaciones_3.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'ETIQUETA': 'ETIQUETA', 'TIPO_0502': 'TIPO_0502', 'INE_0502': 'INE_0502', 'FECHA_INE': 'FECHA_INE', 'HABIT_0502': 'HABIT_0502', 'CODIGO_EP': 'CODIGO_EP', 'ID_EP': 'ID_EP', 'ID_BIC': 'ID_BIC', 'ID_BICCA': 'ID_BICCA', 'ID_NG': 'ID_NG', 'PRIORIDAD': 'PRIORIDAD', 'F_ALTA': 'F_ALTA', 'layer': 'layer', 'path': 'path', });
lyr_CANARIASLAPALMALavaAridane2021_4.set('fieldAliases', {'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_CANARIASLAPALMAContorno_5.set('fieldAliases', {'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_CANARIASLAPALMALAVAhitos_6.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Coordenada': 'Coordenada', '22019_Listado patrimonios_Nombre': '22019_Listado patrimonios_Nombre', '22019_Listado patrimonios_Comunidad': '22019_Listado patrimonios_Comunidad', '22019_Listado patrimonios_Valor': '22019_Listado patrimonios_Valor', '22019_Listado patrimonios_PoblaciÃ³n': '22019_Listado patrimonios_PoblaciÃ³n', '22019_Listado patrimonios_Comentarios': '22019_Listado patrimonios_Comentarios', '22019_Listado patrimonios_field_7': '22019_Listado patrimonios_field_7', '22019_Listado patrimonios_field_8': '22019_Listado patrimonios_field_8', });
lyr_CANARIASLAPALMAZonasProtegidas_0.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'TIPO_0107': 'TextEdit', 'ID_ENP': 'TextEdit', 'DESIG_ABBR': 'TextEdit', 'ID_BIC': 'TextEdit', 'ID_BICCA': 'TextEdit', 'ID_NG': 'TextEdit', 'PRIORIDAD': 'Range', 'F_ALTA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CANARIASLAPALMAsuppoblaciones_1.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'TIPO_0502': 'TextEdit', 'INE_0502': 'TextEdit', 'FECHA_INE': 'TextEdit', 'HABIT_0502': 'TextEdit', 'CODIGO_EP': 'TextEdit', 'ID_EP': 'TextEdit', 'ID_BIC': 'TextEdit', 'ID_BICCA': 'TextEdit', 'ID_NG': 'TextEdit', 'PRIORIDAD': 'Range', 'F_ALTA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CANARIASLAPALMAEdificacionLava_2.set('fieldImages', {'id': 'TextEdit', });
lyr_CANARIASLAPALMAptospoblaciones_3.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'TIPO_0502': 'TextEdit', 'INE_0502': 'TextEdit', 'FECHA_INE': 'TextEdit', 'HABIT_0502': 'TextEdit', 'CODIGO_EP': 'TextEdit', 'ID_EP': 'TextEdit', 'ID_BIC': 'TextEdit', 'ID_BICCA': 'TextEdit', 'ID_NG': 'TextEdit', 'PRIORIDAD': 'Range', 'F_ALTA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CANARIASLAPALMALavaAridane2021_4.set('fieldImages', {'osm_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'extratags': 'TextEdit', });
lyr_CANARIASLAPALMAContorno_5.set('fieldImages', {'osm_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'extratags': 'TextEdit', });
lyr_CANARIASLAPALMALAVAhitos_6.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Coordenada': 'TextEdit', '22019_Listado patrimonios_Nombre': 'TextEdit', '22019_Listado patrimonios_Comunidad': 'TextEdit', '22019_Listado patrimonios_Valor': 'TextEdit', '22019_Listado patrimonios_PoblaciÃ³n': 'TextEdit', '22019_Listado patrimonios_Comentarios': 'TextEdit', '22019_Listado patrimonios_field_7': 'TextEdit', '22019_Listado patrimonios_field_8': 'TextEdit', });
lyr_CANARIASLAPALMAZonasProtegidas_0.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'ETIQUETA': 'no label', 'TIPO_0107': 'no label', 'ID_ENP': 'no label', 'DESIG_ABBR': 'no label', 'ID_BIC': 'no label', 'ID_BICCA': 'no label', 'ID_NG': 'no label', 'PRIORIDAD': 'no label', 'F_ALTA': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CANARIASLAPALMAsuppoblaciones_1.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'ETIQUETA': 'no label', 'TIPO_0502': 'no label', 'INE_0502': 'no label', 'FECHA_INE': 'no label', 'HABIT_0502': 'no label', 'CODIGO_EP': 'no label', 'ID_EP': 'no label', 'ID_BIC': 'no label', 'ID_BICCA': 'no label', 'ID_NG': 'no label', 'PRIORIDAD': 'no label', 'F_ALTA': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CANARIASLAPALMAEdificacionLava_2.set('fieldLabels', {'id': 'no label', });
lyr_CANARIASLAPALMAptospoblaciones_3.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'ETIQUETA': 'no label', 'TIPO_0502': 'no label', 'INE_0502': 'no label', 'FECHA_INE': 'no label', 'HABIT_0502': 'no label', 'CODIGO_EP': 'no label', 'ID_EP': 'no label', 'ID_BIC': 'no label', 'ID_BICCA': 'no label', 'ID_NG': 'no label', 'PRIORIDAD': 'no label', 'F_ALTA': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CANARIASLAPALMALavaAridane2021_4.set('fieldLabels', {'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_CANARIASLAPALMAContorno_5.set('fieldLabels', {'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_CANARIASLAPALMALAVAhitos_6.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Coordenada': 'no label', '22019_Listado patrimonios_Nombre': 'no label', '22019_Listado patrimonios_Comunidad': 'no label', '22019_Listado patrimonios_Valor': 'no label', '22019_Listado patrimonios_PoblaciÃ³n': 'no label', '22019_Listado patrimonios_Comentarios': 'no label', '22019_Listado patrimonios_field_7': 'no label', '22019_Listado patrimonios_field_8': 'no label', });
lyr_CANARIASLAPALMALAVAhitos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});