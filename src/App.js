import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import DataTable from "./components/DataTable"

function App() {
  const AppStyle = {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    fontSize: "0.8rem",
  }
  const DataTableStyle = {
    width: "100%",
  }
  return (
    <div
      className="bg-d-black d-flex flex-column align-items-center text-light"
      style={AppStyle}
    >
      <h1 className="p-1">Dummy data</h1>
      <div style={DataTableStyle}>
        <DataTable />
      </div>
    </div>
  )
}

export default App
