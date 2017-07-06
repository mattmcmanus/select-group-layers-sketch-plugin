function isLayer(layer) {
  return !layer.isGroup;
}

function selectChildLayers(group) {
  group.iterateWithFilter(isLayer, function(layer) {
    layer.addToSelection();
  });
}

export default function(context) {
  let sketch = context.api()
  let { selectedLayers } = sketch.selectedDocument;

  selectedLayers.iterate(function(layer) {
    layer.deselect();

    if (layer.isGroup) {
      selectChildLayers(layer);
    } else {
      let container = layer.container;
      selectChildLayers(container);
    }
  })
}
