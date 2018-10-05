
  (function() {
    var fn = function() {
      Bokeh.safely(function() {
        (function(root) {
          function embed_document(root) {
            
          var docs_json = '{"fdce62a0-3adb-4eeb-b637-f882d69bbc84":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"732e88d3-a8a4-44c1-ab9d-b5721d922895","type":"Triangle"},{"attributes":{"below":[{"id":"fac0a528-9f92-4d78-836e-cbdb888be56f","type":"LinearAxis"}],"left":[{"id":"c7d4bf59-5823-4349-b272-b9f9a68db663","type":"LinearAxis"}],"renderers":[{"id":"fac0a528-9f92-4d78-836e-cbdb888be56f","type":"LinearAxis"},{"id":"1f5e1cd7-b405-4296-9406-8bf7fee27024","type":"Grid"},{"id":"c7d4bf59-5823-4349-b272-b9f9a68db663","type":"LinearAxis"},{"id":"73333e04-c5e2-4281-8348-6e7ebb0ccacf","type":"Grid"},{"id":"7854b4f9-1ae1-4b09-9d69-14953e479f2c","type":"BoxAnnotation"},{"id":"87aae8d7-963a-47a5-be26-930b44f0ed58","type":"GlyphRenderer"},{"id":"2d7067c7-7600-452a-925d-88436c77bb98","type":"GlyphRenderer"}],"title":{"id":"807c11d7-ed6e-4966-9695-4807d356d420","type":"Title"},"toolbar":{"id":"d6c40c2c-a945-4b2a-a79e-246f6a482629","type":"Toolbar"},"x_range":{"id":"b436dbd5-4bef-4444-98fe-8d2833bffbeb","type":"DataRange1d"},"x_scale":{"id":"b6705387-ec5d-458d-a33e-df198aa9970a","type":"LinearScale"},"y_range":{"id":"24840692-3a40-4a59-980b-653b97a453bf","type":"DataRange1d"},"y_scale":{"id":"18e4a141-10fe-4578-a6b6-26ed29a4ca0d","type":"LinearScale"}},"id":"37eb3e34-1c23-4715-9356-f9198eb96cc6","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"16fcb757-a092-44d5-bee2-167927a3869b","type":"ColumnDataSource"}},"id":"fab2f243-9c01-47b0-90b8-0c045403b59a","type":"CDSView"},{"attributes":{"args":{"s":{"id":"01929049-f046-4d1d-be9d-7e98999b7f1c","type":"ColumnDataSource"},"sT":{"id":"6fef77cf-fc14-4b4b-9320-368a2ecc8e1a","type":"ColumnDataSource"}},"code":"\\n        var data = s.data;\\n        var frame = cb_obj.value - 1\\n        var x = data[&#x27;x&#x27;]\\n        var y = data[&#x27;y&#x27;]\\n        var c = data[&#x27;color&#x27;]\\n\\n        var data2 = sT.data;\\n        var xdata = data2[&#x27;xdata&#x27;]\\n        var ydata = data2[&#x27;ydata&#x27;]\\n        var cdata = data2[&#x27;cdata&#x27;]\\n        for (var i = 0; i &lt; x.length; i++) {\\n            x[i] = xdata[frame][i]\\n            y[i] = ydata[frame][i]\\n            c[i] = cdata[frame][i]\\n        }\\n        s.change.emit();\\n    "},"id":"bf58c432-f4d1-4084-bbc8-e129794d8423","type":"CustomJS"},{"attributes":{"args":{"s":{"id":"16fcb757-a092-44d5-bee2-167927a3869b","type":"ColumnDataSource"},"sT":{"id":"f07ead86-3f79-4778-80fb-58bfb56f474f","type":"ColumnDataSource"}},"code":"\\n        var data = s.data;\\n        var frame = cb_obj.value - 1\\n        var x = data[&#x27;x&#x27;]\\n        var y = data[&#x27;y&#x27;]\\n\\n        var data2 = sT.data\\n        var xdata = data2[&#x27;xdata&#x27;]\\n        var ydata = data2[&#x27;ydata&#x27;]\\n        for (var i = 0; i &lt; x.length; i++) {\\n            x[i] = xdata[frame][i]\\n            y[i] = ydata[frame][i]\\n        }\\n        s.change.emit();\\n    "},"id":"8838c4a8-4124-4f5a-9efe-8ff565b97a9b","type":"CustomJS"},{"attributes":{"callback":null,"data":{"x":[69.21428571428571,48.204081632653065,43.75675675675676],"y":[41.42857142857143,74.9795918367347,18.81081081081081]},"selected":{"id":"46fea1d2-8153-45ae-a63b-02678083781b","type":"Selection"},"selection_policy":{"id":"c06f7ea8-8e58-4c57-aea3-c11d5731db89","type":"UnionRenderers"}},"id":"16fcb757-a092-44d5-bee2-167927a3869b","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":50,"js_property_callbacks":{"change:value":[{"id":"8838c4a8-4124-4f5a-9efe-8ff565b97a9b","type":"CustomJS"},{"id":"bf58c432-f4d1-4084-bbc8-e129794d8423","type":"CustomJS"}]},"start":1,"title":"Frames","value":1},"id":"c938114e-8481-4d4c-aa62-c221c893f0f0","type":"Slider"},{"attributes":{"children":[{"id":"ab4f7436-b34e-4016-a074-af71ef0e4ccb","type":"WidgetBox"},{"id":"37eb3e34-1c23-4715-9356-f9198eb96cc6","subtype":"Figure","type":"Plot"}]},"id":"4da98e12-f1e1-4090-98ff-8b85ba4b95ac","type":"Column"},{"attributes":{"children":[{"id":"c938114e-8481-4d4c-aa62-c221c893f0f0","type":"Slider"}]},"id":"ab4f7436-b34e-4016-a074-af71ef0e4ccb","type":"WidgetBox"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"color"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"abf17981-dce9-493f-8562-56b2176afe45","type":"Circle"},{"attributes":{"callback":null},"id":"b436dbd5-4bef-4444-98fe-8d2833bffbeb","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"be74f718-b241-4362-88e8-6f3fdf8434d4","type":"Circle"},{"attributes":{"callback":null},"id":"24840692-3a40-4a59-980b-653b97a453bf","type":"DataRange1d"},{"attributes":{},"id":"b6705387-ec5d-458d-a33e-df198aa9970a","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"807c11d7-ed6e-4966-9695-4807d356d420","type":"Title"},{"attributes":{},"id":"18e4a141-10fe-4578-a6b6-26ed29a4ca0d","type":"LinearScale"},{"attributes":{},"id":"fc3d14dd-8090-472b-9559-8f6d45ebddb6","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_alpha":{"value":0.7},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5692fd7c-44b0-47ab-ab19-dfd312b2d362","type":"Triangle"},{"attributes":{},"id":"36307030-46b6-4270-805b-4b5cb74da36c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"36307030-46b6-4270-805b-4b5cb74da36c","type":"BasicTickFormatter"},"plot":{"id":"37eb3e34-1c23-4715-9356-f9198eb96cc6","subtype":"Figure","type":"Plot"},"ticker":{"id":"2714e588-886a-4175-bf09-df5db31d76ff","type":"BasicTicker"}},"id":"fac0a528-9f92-4d78-836e-cbdb888be56f","type":"LinearAxis"},{"attributes":{},"id":"6805b99c-652e-4e7f-b692-e8c37881be05","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2da2012d-3551-460d-84af-2ab146b7d3c6","type":"PanTool"},{"id":"9b7a3a41-64a3-4e43-a599-85cf59f4f1bc","type":"WheelZoomTool"},{"id":"4148fe14-d27b-4203-9292-3e6b7dbb382a","type":"BoxZoomTool"},{"id":"3c48bdbf-43a6-47fd-9c34-bd687a353423","type":"SaveTool"},{"id":"f2f19e66-c768-4f7a-9715-47774d452009","type":"ResetTool"},{"id":"b1727198-2967-402e-9a40-9c97480cfc17","type":"HelpTool"}]},"id":"d6c40c2c-a945-4b2a-a79e-246f6a482629","type":"Toolbar"},{"attributes":{"data_source":{"id":"01929049-f046-4d1d-be9d-7e98999b7f1c","type":"ColumnDataSource"},"glyph":{"id":"abf17981-dce9-493f-8562-56b2176afe45","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"be74f718-b241-4362-88e8-6f3fdf8434d4","type":"Circle"},"selection_glyph":null,"view":{"id":"d10cf2c9-a5be-44e2-8586-95170494ae3a","type":"CDSView"}},"id":"87aae8d7-963a-47a5-be26-930b44f0ed58","type":"GlyphRenderer"},{"attributes":{},"id":"2714e588-886a-4175-bf09-df5db31d76ff","type":"BasicTicker"},{"attributes":{},"id":"e934786b-7bdf-4449-b1c7-3f2478ca46c1","type":"UnionRenderers"},{"attributes":{"plot":{"id":"37eb3e34-1c23-4715-9356-f9198eb96cc6","subtype":"Figure","type":"Plot"},"ticker":{"id":"2714e588-886a-4175-bf09-df5db31d76ff","type":"BasicTicker"}},"id":"1f5e1cd7-b405-4296-9406-8bf7fee27024","type":"Grid"},{"attributes":{"callback":null,"data":{"cdata":[["#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442"],["#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442"],["#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442"],["#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442"],["#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442"],["#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442"],["#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442"]],"xdata":[[77,62,78,53,55,59,71,94,80,70,69,33,93,75,56,23,2,27,13,76,14,0,21,61,11,84,73,25,74,1,18,36,6,91,10,12,54,95,19,57,41,45,97,90,98,50,52,66,88,81,58,38,51,42,67,37,20,31,63,85,49,82,72,83,30,24,16,28,99,92,3,29,79,35,44,5,65,48,89,87,32,26,60,9,96,17,64,8,86,46,68,4,39,47,34,7,43,22,15,40],[83,99,92,79,84,73,77,62,78,89,91,53,87,60,55,96,59,97,71,94,98,86,80,70,69,85,93,75,82,72,56,23,2,27,13,76,14,0,21,61,11,25,74,1,18,36,6,10,12,54,95,19,57,41,45,90,50,52,66,88,81,58,38,51,42,67,37,20,31,63,49,30,24,16,28,3,29,35,44,5,65,48,32,26,9,17,64,8,46,68,33,4,39,47,34,7,43,22,15,40],[83,99,92,79,84,73,77,62,65,78,89,91,53,87,95,60,55,96,59,97,71,94,98,86,80,70,68,69,85,93,75,82,72,56,23,2,27,13,76,14,21,61,11,25,74,18,36,6,10,12,54,19,57,41,45,90,50,52,66,88,81,58,38,51,42,67,37,31,63,49,30,24,16,28,0,3,29,35,44,5,1,48,32,26,9,17,64,8,46,33,4,39,20,47,34,7,43,22,15,40],[83,99,92,79,84,73,77,62,65,78,89,91,53,87,95,60,55,96,59,64,97,71,94,98,86,80,70,68,69,85,93,75,82,72,56,23,2,27,13,76,14,21,61,25,74,18,36,6,10,12,54,57,41,45,90,50,52,66,88,81,58,38,51,42,67,37,31,63,49,30,24,16,28,0,3,29,35,11,44,5,1,48,32,19,26,9,17,8,46,33,4,39,20,47,34,7,43,22,15,40],[83,99,92,79,84,73,77,62,65,78,89,91,53,87,95,60,55,96,59,64,97,71,94,98,86,80,70,68,69,85,93,75,82,72,56,23,2,13,76,21,61,25,74,18,36,6,10,12,54,57,41,45,90,50,52,66,88,81,58,38,51,42,67,37,31,63,49,30,24,16,27,28,14,0,3,29,35,11,44,5,1,48,32,19,26,9,17,8,46,33,4,39,20,47,34,7,43,22,15,40],[83,99,92,79,84,73,77,62,65,78,89,91,53,87,60,55,96,59,64,97,71,94,98,86,80,70,68,69,85,93,75,82,72,56,23,2,13,76,21,61,25,74,18,36,6,12,54,95,57,41,45,90,50,52,66,88,81,58,38,51,42,67,37,31,63,49,30,24,16,27,28,14,0,3,29,35,11,44,5,1,48,10,32,19,26,9,17,8,46,33,4,39,20,47,34,7,43,22,15,40],[83,99,92,79,84,73,77,62,65,78,89,91,53,87,60,55,96,59,64,97,71,94,98,86,80,70,68,69,85,93,75,82,72,56,2,13,76,21,61,25,74,18,36,12,54,95,57,41,45,90,50,52,66,88,81,58,38,51,42,67,37,31,63,49,30,24,16,23,27,28,14,0,3,29,35,11,44,5,1,48,6,10,32,19,26,9,17,8,46,33,4,39,20,47,34,7,43,22,15,40]],"ydata":[[33,44,45,48,37,41,47,24,51,43,32,46,40,49,76,61,85,55,74,91,60,53,69,96,56,57,65,92,77,52,98,99,68,67,64,84,90,87,54,72,82,66,80,95,70,86,78,71,88,83,94,89,81,79,93,73,50,75,97,58,62,59,63,23,30,38,10,25,4,13,6,12,18,29,2,3,14,35,9,19,42,34,31,17,15,28,5,11,8,21,16,1,7,36,0,27,22,20,39,26],[23,4,13,18,57,65,33,44,45,9,67,48,19,31,37,15,41,80,47,24,70,8,51,43,32,58,40,49,59,63,76,61,85,55,74,91,60,53,69,96,56,92,77,52,98,99,68,64,84,90,87,54,72,82,66,95,86,78,71,88,83,94,89,81,79,93,73,50,75,97,62,30,38,10,25,6,12,29,2,3,14,35,42,34,17,28,5,11,21,16,46,1,7,36,0,27,22,20,39,26],[23,4,13,18,57,65,33,44,14,45,9,67,48,19,87,31,37,15,41,80,47,24,70,8,51,43,16,32,58,40,49,59,63,76,61,85,55,74,91,60,69,96,56,92,77,98,99,68,64,84,90,54,72,82,66,95,86,78,71,88,83,94,89,81,79,93,73,75,97,62,30,38,10,25,53,6,12,29,2,3,52,35,42,34,17,28,5,11,21,46,1,7,50,36,0,27,22,20,39,26],[23,4,13,18,57,65,33,44,14,45,9,67,48,19,87,31,37,15,41,5,80,47,24,70,8,51,43,16,32,58,40,49,59,63,76,61,85,55,74,91,60,69,96,92,77,98,99,68,64,84,90,72,82,66,95,86,78,71,88,83,94,89,81,79,93,73,75,97,62,30,38,10,25,53,6,12,29,56,2,3,52,35,42,54,34,17,28,11,21,46,1,7,50,36,0,27,22,20,39,26],[23,4,13,18,57,65,33,44,14,45,9,67,48,19,87,31,37,15,41,5,80,47,24,70,8,51,43,16,32,58,40,49,59,63,76,61,85,74,91,69,96,92,77,98,99,68,64,84,90,72,82,66,95,86,78,71,88,83,94,89,81,79,93,73,75,97,62,30,38,10,55,25,60,53,6,12,29,56,2,3,52,35,42,54,34,17,28,11,21,46,1,7,50,36,0,27,22,20,39,26],[23,4,13,18,57,65,33,44,14,45,9,67,48,19,31,37,15,41,5,80,47,24,70,8,51,43,16,32,58,40,49,59,63,76,61,85,74,91,69,96,92,77,98,99,68,84,90,87,72,82,66,95,86,78,71,88,83,94,89,81,79,93,73,75,97,62,30,38,10,55,25,60,53,6,12,29,56,2,3,52,35,64,42,54,34,17,28,11,21,46,1,7,50,36,0,27,22,20,39,26],[23,4,13,18,57,65,33,44,14,45,9,67,48,19,31,37,15,41,5,80,47,24,70,8,51,43,16,32,58,40,49,59,63,76,85,74,91,69,96,92,77,98,99,84,90,87,72,82,66,95,86,78,71,88,83,94,89,81,79,93,73,75,97,62,30,38,10,61,55,25,60,53,6,12,29,56,2,3,52,35,68,64,42,54,34,17,28,11,21,46,1,7,50,36,0,27,22,20,39,26]]},"selected":{"id":"df168d26-2907-474b-8dbe-b38ddf284919","type":"Selection"},"selection_policy":{"id":"b4f65929-5add-4571-8a60-a3d519d70dca","type":"UnionRenderers"}},"id":"6fef77cf-fc14-4b4b-9320-368a2ecc8e1a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"fc3d14dd-8090-472b-9559-8f6d45ebddb6","type":"BasicTickFormatter"},"plot":{"id":"37eb3e34-1c23-4715-9356-f9198eb96cc6","subtype":"Figure","type":"Plot"},"ticker":{"id":"19fce343-bdde-4382-bd98-f1800fff3ac3","type":"BasicTicker"}},"id":"c7d4bf59-5823-4349-b272-b9f9a68db663","type":"LinearAxis"},{"attributes":{},"id":"46fea1d2-8153-45ae-a63b-02678083781b","type":"Selection"},{"attributes":{},"id":"19fce343-bdde-4382-bd98-f1800fff3ac3","type":"BasicTicker"},{"attributes":{},"id":"c06f7ea8-8e58-4c57-aea3-c11d5731db89","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"37eb3e34-1c23-4715-9356-f9198eb96cc6","subtype":"Figure","type":"Plot"},"ticker":{"id":"19fce343-bdde-4382-bd98-f1800fff3ac3","type":"BasicTicker"}},"id":"73333e04-c5e2-4281-8348-6e7ebb0ccacf","type":"Grid"},{"attributes":{},"id":"2a02f9fa-8fee-4d40-a385-f9ecb8a87874","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7854b4f9-1ae1-4b09-9d69-14953e479f2c","type":"BoxAnnotation"},{"attributes":{},"id":"16adff8e-a278-45dd-adae-2917fc1cf2c5","type":"UnionRenderers"},{"attributes":{},"id":"df168d26-2907-474b-8dbe-b38ddf284919","type":"Selection"},{"attributes":{},"id":"b4f65929-5add-4571-8a60-a3d519d70dca","type":"UnionRenderers"},{"attributes":{},"id":"2da2012d-3551-460d-84af-2ab146b7d3c6","type":"PanTool"},{"attributes":{"callback":null,"data":{"xdata":[[69.21428571428571,48.204081632653065,43.75675675675676],[79.63333333333334,40.97560975609756,30.379310344827587],[79.3030303030303,42.270270270270274,25.633333333333333],[78.8529411764706,43.82857142857143,23.70967741935484],[78.8529411764706,45.24242424242424,23.515151515151516],[78.36363636363636,47.81818181818182,23.11764705882353],[78.36363636363636,49.96774193548387,22.63888888888889]],"ydata":[[41.42857142857143,74.9795918367347,18.81081081081081],[39.766666666666666,76.95121951219512,20.75862068965517],[39.696969696969695,78.72972972972973,24.233333333333334],[38.6764705882353,80.08571428571429,26.838709677419356],[38.6764705882353,81.45454545454545,28.696969696969695],[37.21212121212121,82.15151515151516,29.735294117647058],[37.21212121212121,83.29032258064517,31.666666666666668]]},"selected":{"id":"2a02f9fa-8fee-4d40-a385-f9ecb8a87874","type":"Selection"},"selection_policy":{"id":"16adff8e-a278-45dd-adae-2917fc1cf2c5","type":"UnionRenderers"}},"id":"f07ead86-3f79-4778-80fb-58bfb56f474f","type":"ColumnDataSource"},{"attributes":{},"id":"9b7a3a41-64a3-4e43-a599-85cf59f4f1bc","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"7854b4f9-1ae1-4b09-9d69-14953e479f2c","type":"BoxAnnotation"}},"id":"4148fe14-d27b-4203-9292-3e6b7dbb382a","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"color":["#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#0072B2","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#E69F00","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442","#F0E442"],"x":[77,62,78,53,55,59,71,94,80,70,69,33,93,75,56,23,2,27,13,76,14,0,21,61,11,84,73,25,74,1,18,36,6,91,10,12,54,95,19,57,41,45,97,90,98,50,52,66,88,81,58,38,51,42,67,37,20,31,63,85,49,82,72,83,30,24,16,28,99,92,3,29,79,35,44,5,65,48,89,87,32,26,60,9,96,17,64,8,86,46,68,4,39,47,34,7,43,22,15,40],"y":[33,44,45,48,37,41,47,24,51,43,32,46,40,49,76,61,85,55,74,91,60,53,69,96,56,57,65,92,77,52,98,99,68,67,64,84,90,87,54,72,82,66,80,95,70,86,78,71,88,83,94,89,81,79,93,73,50,75,97,58,62,59,63,23,30,38,10,25,4,13,6,12,18,29,2,3,14,35,9,19,42,34,31,17,15,28,5,11,8,21,16,1,7,36,0,27,22,20,39,26]},"selected":{"id":"6805b99c-652e-4e7f-b692-e8c37881be05","type":"Selection"},"selection_policy":{"id":"e934786b-7bdf-4449-b1c7-3f2478ca46c1","type":"UnionRenderers"}},"id":"01929049-f046-4d1d-be9d-7e98999b7f1c","type":"ColumnDataSource"},{"attributes":{},"id":"3c48bdbf-43a6-47fd-9c34-bd687a353423","type":"SaveTool"},{"attributes":{},"id":"f2f19e66-c768-4f7a-9715-47774d452009","type":"ResetTool"},{"attributes":{"source":{"id":"01929049-f046-4d1d-be9d-7e98999b7f1c","type":"ColumnDataSource"}},"id":"d10cf2c9-a5be-44e2-8586-95170494ae3a","type":"CDSView"},{"attributes":{},"id":"b1727198-2967-402e-9a40-9c97480cfc17","type":"HelpTool"},{"attributes":{"data_source":{"id":"16fcb757-a092-44d5-bee2-167927a3869b","type":"ColumnDataSource"},"glyph":{"id":"5692fd7c-44b0-47ab-ab19-dfd312b2d362","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"732e88d3-a8a4-44c1-ab9d-b5721d922895","type":"Triangle"},"selection_glyph":null,"view":{"id":"fab2f243-9c01-47b0-90b8-0c045403b59a","type":"CDSView"}},"id":"2d7067c7-7600-452a-925d-88436c77bb98","type":"GlyphRenderer"}],"root_ids":["4da98e12-f1e1-4090-98ff-8b85ba4b95ac"]},"title":"Bokeh Application","version":"0.13.0"}}';
          var render_items = [{"docid":"fdce62a0-3adb-4eeb-b637-f882d69bbc84","roots":{"4da98e12-f1e1-4090-98ff-8b85ba4b95ac":"4c7c713d-94eb-471b-b8b0-4a87649e5b3e"}}];
          root.Bokeh.embed.embed_items(docs_json, render_items);
        
          }
          if (root.Bokeh !== undefined) {
            embed_document(root);
          } else {
            var attempts = 0;
            var timer = setInterval(function(root) {
              if (root.Bokeh !== undefined) {
                embed_document(root);
                clearInterval(timer);
              }
              attempts++;
              if (attempts > 100) {
                console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                clearInterval(timer);
              }
            }, 10, root)
          }
        })(window);
      });
    };
    if (document.readyState != "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  })();
