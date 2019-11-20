    var center = SMap.Coords.fromWGS84(18.166467666625977, 49.83407974243164);
    var mapa = new SMap(JAK.gel("mapa"), center, 16);
    mapa.addDefaultLayer(SMap.DEF_BASE).enable();
    var layer = new SMap.Layer.Marker();
    mapa.addLayer(layer).enable()
    var mCoord = SMap.Coords.fromWGS84(18.166467666625977,49.83407974243164);
    var mOpt = {
        anchor: {left:14, top:49},
        url:SMap.CONFIG.img + "/marker/balloon-3.png"
     }
    var marker = new SMap.Marker(mCoord,"MyMarker", mOpt);
    layer.addMarker(marker);
    var overview = new SMap.Control.Overview();
    mapa.addControl(overview);
    var scale = new SMap.Control.Scale();
    mapa.addControl(scale, {left:"8px", bottom:"25px"});
    var msOpt = SMap.MOUSE_PAN | SMap.MOUSE_WHEEL | SMap.MOUSE_ZOOM;
    var mouse = new SMap.Control.Mouse(msOpt);
    mapa.addControl(mouse);
    var keyboard = new SMap.Control.Keyboard(SMap.KB_PAN | SMap.KB_ZOOM);
    mapa.addControl(keyboard);
    var selection = new SMap.Control.Selection(2);
    mapa.addControl(selection);
    var zn = new SMap.Control.ZoomNotification();
    mapa.addControl(zn);
    var zoomOpt = {showZoomMenu:false};
    var zoom = new SMap.Control.Zoom(null,{titles:["Přiblížit", "Oddálit"], showZoomMenu:false});
    mapa.addControl(zoom, {right:"2px", top:"10x"});
    var lnt = "Zobrazit na Mapy.cz";
    var lnd = JAK.mel("a", {href:"https://mapy.cz/s/jejadebaru", target:"_blank", innerHTML:lnt});
    lnd.style.cssText = "position:absolute;left:8px; bottom:54px;"+
    "display:block; padding:4px 8px; background-color:#fff; border:medium none;"+
    "border-radius:3px; box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);"+
    "text-decoration:none; color:#6b7580;";
    mapa.getContainer().appendChild(lnd);
