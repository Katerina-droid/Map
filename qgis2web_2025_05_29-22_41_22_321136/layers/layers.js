var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_1 = new ol.format.GeoJSON();
var features_lab1_1 = format_lab1_1.readFeatures(json_lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_1.addFeatures(features_lab1_1);
var lyr_lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_1, 
                style: style_lab1_1,
                popuplayertitle: 'lab1',
                interactive: false,
                title: '<img src="styles/legend/lab1_1.png" /> lab1'
            });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_railway_3 = new ol.format.GeoJSON();
var features_railway_3 = format_railway_3.readFeatures(json_railway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_3.addFeatures(features_railway_3);
var lyr_railway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_3, 
                style: style_railway_3,
                popuplayertitle: 'railway',
                interactive: true,
                title: '<img src="styles/legend/railway_3.png" /> railway'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_4, 
                style: style_building_4,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });

lyr_OSMStandard_0.setVisible(true);lyr_lab1_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_railway_3.setVisible(true);lyr_building_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lab1_1,lyr_highway_2,lyr_railway_3,lyr_building_4];
lyr_lab1_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_highway_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'lanes:backward': 'lanes:backward', 'step_count': 'step_count', 'horse': 'horse', 'hgv': 'hgv', 'bus': 'bus', 'ford': 'ford', 'indoor': 'indoor', 'wheelchair': 'wheelchair', 'turn:lanes:backward': 'turn:lanes:backward', 'hgv:forward': 'hgv:forward', 'access': 'access', 'traffic_signals:vibration': 'traffic_signals:vibration', 'button_operated': 'button_operated', 'crossing:island': 'crossing:island', 'crossing:markings': 'crossing:markings', 'crossing': 'crossing', 'footway': 'footway', 'service': 'service', 'covered': 'covered', 'tunnel': 'tunnel', 'width': 'width', 'ramp': 'ramp', 'handrail': 'handrail', 'smoothness': 'smoothness', 'turn:lanes:forward': 'turn:lanes:forward', 'living_street': 'living_street', 'name:ru': 'name:ru', 'junction': 'junction', 'incline': 'incline', 'maxspeed:type': 'maxspeed:type', 'sidewalk': 'sidewalk', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:en': 'name:en', 'name:de': 'name:de', 'turn:lanes': 'turn:lanes', 'lanes': 'lanes', 'maxweight': 'maxweight', 'layer': 'layer', 'bridge': 'bridge', 'route': 'route', 'piste:type': 'piste:type', 'piste:oneway': 'piste:oneway', 'piste:grooming': 'piste:grooming', 'embankment': 'embankment', 'maxspeed': 'maxspeed', 'lit': 'lit', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', });
lyr_railway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'tunnel': 'tunnel', 'service': 'service', 'embankment': 'embankment', 'layer': 'layer', 'bridge': 'bridge', 'usage': 'usage', 'gauge': 'gauge', 'electrified': 'electrified', });
lyr_building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'military': 'military', 'tunnel': 'tunnel', 'tower_type': 'tower_type', 'tickets_av': 'tickets_av', 'old_name': 'old_name', 'official_n': 'official_n', 'voltage': 'voltage', 'substation': 'substation', 'official_s': 'official_s', 'addr_place': 'addr_place', 'layer': 'layer', 'wheelchair': 'wheelchair', 'aeroway': 'aeroway', 'disused_sh': 'disused_sh', 'descriptio': 'descriptio', 'contact_ph': 'contact_ph', 'contact_em': 'contact_em', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'smoking': 'smoking', 'clothes': 'clothes', 'name_ru': 'name_ru', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand_ru': 'brand_ru', 'brand_en': 'brand_en', 'brand': 'brand', 'government': 'government', 'contact_we': 'contact_we', 'contact_vk': 'contact_vk', 'contact_te': 'contact_te', 'stars': 'stars', 'rooms': 'rooms', 'office': 'office', 'tourism': 'tourism', 'name_ja': 'name_ja', 'start_date': 'start_date', 'historic': 'historic', 'building_f': 'building_f', 'abandoned': 'abandoned', 'ref': 'ref', 'roof_shape': 'roof_shape', 'service_ti': 'service_ti', 'name_uk': 'name_uk', 'name_de': 'name_de', 'name_ar': 'name_ar', 'height': 'height', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'ref_mkrf_t': 'ref_mkrf_t', 'phone': 'phone', 'public_tra': 'public_tra', 'bus': 'bus', 'religion': 'religion', 'ref_temple': 'ref_temple', 'name_en': 'name_en', 'denominati': 'denominati', 'opening_ho': 'opening_ho', 'source_add': 'source_add', 'addr_regio': 'addr_regio', 'addr_distr': 'addr_distr', 'addr_build': 'addr_build', 'operator': 'operator', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'generato_4': 'generato_4', 'man_made': 'man_made', 'power': 'power', 'website': 'website', 'sport': 'sport', 'leisure': 'leisure', 'shop': 'shop', 'url': 'url', 'healthcare': 'healthcare', 'building_p': 'building_p', 'building_l': 'building_l', 'name': 'name', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'type': 'type', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'address': 'address', });
lyr_lab1_1.set('fieldImages', {'fid': '', 'name': 'TextEdit', });
lyr_highway_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'lanes:backward': 'TextEdit', 'step_count': 'TextEdit', 'horse': 'TextEdit', 'hgv': 'TextEdit', 'bus': 'TextEdit', 'ford': 'TextEdit', 'indoor': 'TextEdit', 'wheelchair': 'TextEdit', 'turn:lanes:backward': 'TextEdit', 'hgv:forward': 'TextEdit', 'access': 'TextEdit', 'traffic_signals:vibration': 'TextEdit', 'button_operated': 'TextEdit', 'crossing:island': 'TextEdit', 'crossing:markings': 'TextEdit', 'crossing': 'TextEdit', 'footway': 'TextEdit', 'service': 'TextEdit', 'covered': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'ramp': 'TextEdit', 'handrail': 'TextEdit', 'smoothness': 'TextEdit', 'turn:lanes:forward': 'TextEdit', 'living_street': 'TextEdit', 'name:ru': 'TextEdit', 'junction': 'TextEdit', 'incline': 'TextEdit', 'maxspeed:type': 'TextEdit', 'sidewalk': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'name:en': 'TextEdit', 'name:de': 'TextEdit', 'turn:lanes': 'TextEdit', 'lanes': 'TextEdit', 'maxweight': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'route': 'TextEdit', 'piste:type': 'TextEdit', 'piste:oneway': 'TextEdit', 'piste:grooming': 'TextEdit', 'embankment': 'TextEdit', 'maxspeed': 'TextEdit', 'lit': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', });
lyr_railway_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'tunnel': 'TextEdit', 'service': 'TextEdit', 'embankment': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'usage': 'TextEdit', 'gauge': 'TextEdit', 'electrified': 'TextEdit', });
lyr_building_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'military': 'TextEdit', 'tunnel': 'TextEdit', 'tower_type': 'TextEdit', 'tickets_av': 'TextEdit', 'old_name': 'TextEdit', 'official_n': 'TextEdit', 'voltage': 'TextEdit', 'substation': 'TextEdit', 'official_s': 'TextEdit', 'addr_place': 'TextEdit', 'layer': 'TextEdit', 'wheelchair': 'TextEdit', 'aeroway': 'TextEdit', 'disused_sh': 'TextEdit', 'descriptio': 'TextEdit', 'contact_ph': 'TextEdit', 'contact_em': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'smoking': 'TextEdit', 'clothes': 'TextEdit', 'name_ru': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand_ru': 'TextEdit', 'brand_en': 'TextEdit', 'brand': 'TextEdit', 'government': 'TextEdit', 'contact_we': 'TextEdit', 'contact_vk': 'TextEdit', 'contact_te': 'TextEdit', 'stars': 'TextEdit', 'rooms': 'TextEdit', 'office': 'TextEdit', 'tourism': 'TextEdit', 'name_ja': 'TextEdit', 'start_date': 'TextEdit', 'historic': 'TextEdit', 'building_f': 'TextEdit', 'abandoned': 'TextEdit', 'ref': 'TextEdit', 'roof_shape': 'TextEdit', 'service_ti': 'TextEdit', 'name_uk': 'TextEdit', 'name_de': 'TextEdit', 'name_ar': 'TextEdit', 'height': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'ref_mkrf_t': 'TextEdit', 'phone': 'TextEdit', 'public_tra': 'TextEdit', 'bus': 'TextEdit', 'religion': 'TextEdit', 'ref_temple': 'TextEdit', 'name_en': 'TextEdit', 'denominati': 'TextEdit', 'opening_ho': 'TextEdit', 'source_add': 'TextEdit', 'addr_regio': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_build': 'TextEdit', 'operator': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'generato_2': 'TextEdit', 'generato_3': 'TextEdit', 'generato_4': 'TextEdit', 'man_made': 'TextEdit', 'power': 'TextEdit', 'website': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'shop': 'TextEdit', 'url': 'TextEdit', 'healthcare': 'TextEdit', 'building_p': 'TextEdit', 'building_l': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'type': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'address': 'TextEdit', });
lyr_lab1_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_highway_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'lanes:backward': 'no label', 'step_count': 'no label', 'horse': 'no label', 'hgv': 'no label', 'bus': 'no label', 'ford': 'no label', 'indoor': 'no label', 'wheelchair': 'no label', 'turn:lanes:backward': 'no label', 'hgv:forward': 'no label', 'access': 'no label', 'traffic_signals:vibration': 'no label', 'button_operated': 'no label', 'crossing:island': 'no label', 'crossing:markings': 'no label', 'crossing': 'no label', 'footway': 'no label', 'service': 'no label', 'covered': 'no label', 'tunnel': 'no label', 'width': 'no label', 'ramp': 'no label', 'handrail': 'no label', 'smoothness': 'no label', 'turn:lanes:forward': 'no label', 'living_street': 'no label', 'name:ru': 'no label', 'junction': 'no label', 'incline': 'no label', 'maxspeed:type': 'no label', 'sidewalk': 'no label', 'name:etymology:wikidata': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'turn:lanes': 'no label', 'lanes': 'no label', 'maxweight': 'no label', 'layer': 'no label', 'bridge': 'no label', 'route': 'no label', 'piste:type': 'no label', 'piste:oneway': 'no label', 'piste:grooming': 'no label', 'embankment': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', });
lyr_railway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'tunnel': 'no label', 'service': 'no label', 'embankment': 'no label', 'layer': 'no label', 'bridge': 'no label', 'usage': 'no label', 'gauge': 'no label', 'electrified': 'no label', });
lyr_building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'military': 'no label', 'tunnel': 'no label', 'tower_type': 'no label', 'tickets_av': 'no label', 'old_name': 'no label', 'official_n': 'no label', 'voltage': 'no label', 'substation': 'no label', 'official_s': 'no label', 'addr_place': 'no label', 'layer': 'no label', 'wheelchair': 'no label', 'aeroway': 'no label', 'disused_sh': 'no label', 'descriptio': 'no label', 'contact_ph': 'no label', 'contact_em': 'no label', 'operator_w': 'no label', 'operator_1': 'no label', 'smoking': 'no label', 'clothes': 'no label', 'name_ru': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'brand_ru': 'no label', 'brand_en': 'no label', 'brand': 'no label', 'government': 'no label', 'contact_we': 'no label', 'contact_vk': 'no label', 'contact_te': 'no label', 'stars': 'no label', 'rooms': 'no label', 'office': 'no label', 'tourism': 'no label', 'name_ja': 'no label', 'start_date': 'no label', 'historic': 'no label', 'building_f': 'no label', 'abandoned': 'no label', 'ref': 'no label', 'roof_shape': 'no label', 'service_ti': 'no label', 'name_uk': 'no label', 'name_de': 'no label', 'name_ar': 'no label', 'height': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'ref_mkrf_t': 'no label', 'phone': 'no label', 'public_tra': 'no label', 'bus': 'no label', 'religion': 'no label', 'ref_temple': 'no label', 'name_en': 'no label', 'denominati': 'no label', 'opening_ho': 'no label', 'source_add': 'no label', 'addr_regio': 'no label', 'addr_distr': 'no label', 'addr_build': 'no label', 'operator': 'no label', 'generator_': 'no label', 'generato_1': 'no label', 'generato_2': 'no label', 'generato_3': 'no label', 'generato_4': 'no label', 'man_made': 'no label', 'power': 'no label', 'website': 'no label', 'sport': 'no label', 'leisure': 'no label', 'shop': 'no label', 'url': 'no label', 'healthcare': 'no label', 'building_p': 'no label', 'building_l': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'type': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'address': 'no label', });
lyr_building_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});