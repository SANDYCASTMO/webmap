var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pasco_geomorfologia_1 = new ol.format.GeoJSON();
var features_pasco_geomorfologia_1 = format_pasco_geomorfologia_1.readFeatures(json_pasco_geomorfologia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasco_geomorfologia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasco_geomorfologia_1.addFeatures(features_pasco_geomorfologia_1);
var lyr_pasco_geomorfologia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pasco_geomorfologia_1, 
                style: style_pasco_geomorfologia_1,
                interactive: true,
    title: 'pasco_geomorfologia<br />\
    <img src="styles/legend/pasco_geomorfologia_1_0.png" /> Ab<br />\
    <img src="styles/legend/pasco_geomorfologia_1_1.png" /> Am<br />\
    <img src="styles/legend/pasco_geomorfologia_1_2.png" /> Bo<br />\
    <img src="styles/legend/pasco_geomorfologia_1_3.png" /> I-fl<br />\
    <img src="styles/legend/pasco_geomorfologia_1_4.png" /> Lg/ca<br />\
    <img src="styles/legend/pasco_geomorfologia_1_5.png" /> Mo<br />\
    <img src="styles/legend/pasco_geomorfologia_1_6.png" /> P-at<br />\
    <img src="styles/legend/pasco_geomorfologia_1_7.png" /> Pl-al<br />\
    <img src="styles/legend/pasco_geomorfologia_1_8.png" /> Pl-i<br />\
    <img src="styles/legend/pasco_geomorfologia_1_9.png" /> RC-ri<br />\
    <img src="styles/legend/pasco_geomorfologia_1_10.png" /> RC-rm<br />\
    <img src="styles/legend/pasco_geomorfologia_1_11.png" /> RC-rs<br />\
    <img src="styles/legend/pasco_geomorfologia_1_12.png" /> RC-rv<br />\
    <img src="styles/legend/pasco_geomorfologia_1_13.png" /> RCE-rm<br />\
    <img src="styles/legend/pasco_geomorfologia_1_14.png" /> RCE-rs<br />\
    <img src="styles/legend/pasco_geomorfologia_1_15.png" /> RCL-ri<br />\
    <img src="styles/legend/pasco_geomorfologia_1_16.png" /> RCL-rs<br />\
    <img src="styles/legend/pasco_geomorfologia_1_17.png" /> RCL-rv<br />\
    <img src="styles/legend/pasco_geomorfologia_1_18.png" /> RCLD-rs<br />\
    <img src="styles/legend/pasco_geomorfologia_1_19.png" /> RL-rs<br />\
    <img src="styles/legend/pasco_geomorfologia_1_20.png" /> RM-cgl<br />\
    <img src="styles/legend/pasco_geomorfologia_1_21.png" /> RM-ri<br />\
    <img src="styles/legend/pasco_geomorfologia_1_22.png" /> RM-rm<br />\
    <img src="styles/legend/pasco_geomorfologia_1_23.png" /> RM-rs<br />\
    <img src="styles/legend/pasco_geomorfologia_1_24.png" /> RM-rv<br />\
    <img src="styles/legend/pasco_geomorfologia_1_25.png" /> RM-rvs<br />\
    <img src="styles/legend/pasco_geomorfologia_1_26.png" /> RMCE-rs<br />\
    <img src="styles/legend/pasco_geomorfologia_1_27.png" /> RME-rs<br />\
    <img src="styles/legend/pasco_geomorfologia_1_28.png" /> T-al<br />\
    <img src="styles/legend/pasco_geomorfologia_1_29.png" /> Ti<br />\
    <img src="styles/legend/pasco_geomorfologia_1_30.png" /> V-al<br />\
    <img src="styles/legend/pasco_geomorfologia_1_31.png" /> V-cd<br />\
    <img src="styles/legend/pasco_geomorfologia_1_32.png" /> V-d<br />\
    <img src="styles/legend/pasco_geomorfologia_1_33.png" /> V-gfl<br />\
    <img src="styles/legend/pasco_geomorfologia_1_34.png" /> V-gl<br />\
    <img src="styles/legend/pasco_geomorfologia_1_35.png" /> Vll-e<br />\
    <img src="styles/legend/pasco_geomorfologia_1_36.png" /> Vll-gl<br />\
    <img src="styles/legend/pasco_geomorfologia_1_37.png" /> Vll-gl/l<br />\
    <img src="styles/legend/pasco_geomorfologia_1_38.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_pasco_geomorfologia_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_pasco_geomorfologia_1];
lyr_pasco_geomorfologia_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'etiqueta': 'etiqueta', 'sub_uni': 'sub_uni', 'codigeom': 'codigeom', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_pasco_geomorfologia_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'etiqueta': 'TextEdit', 'sub_uni': 'TextEdit', 'codigeom': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_pasco_geomorfologia_1.set('fieldLabels', {'OBJECTID': 'no label', 'etiqueta': 'no label', 'sub_uni': 'no label', 'codigeom': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_pasco_geomorfologia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});