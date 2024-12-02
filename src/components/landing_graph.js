import { Mafs, Coordinates, Plot } from "mafs"
import "./landing_graph.css"

function Sin() {
  return (
    <Mafs>
      <Coordinates.Cartesian subdivisions={4} />
      <Plot.OfX y={(x) => Math.sin(x)} />
    </Mafs>
  )
}

export default Sin;
