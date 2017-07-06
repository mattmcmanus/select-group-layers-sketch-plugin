export default function(context) {
  function selectChildren(group) {
    group.deselect();
    group.iterate(function(layer) {
      layer.addToSelection();
    });
  }

  let sketch = context.api()
  let selection = sketch.selectedDocument.selectedLayers;

  selection.iterate(function(layer) {
    if (layer.isGroup) {
      selectChildren(layer);
    } else {
      let container = layer.container;
      selectChildren(container);
    }
  })
}
