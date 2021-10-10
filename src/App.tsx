import {useEffect, useState} from 'react';
import "./assets/css/now-ui-kit.css";
import "./assets/css/bootstrap.min.css"
import {getShipmentData, ShipmentsApiResponse} from "./API/ShipmentsApi";
import ShipmentsTable from './Components/ShipmentsTable';
import ShipmentForm from "./Components/ShipmentForm";
import {Route, Switch, BrowserRouter} from "react-router-dom";

function App() {
  const [shipments, updateShipments] = useState([] as ShipmentsApiResponse[]);
  const [selectedShipment, updateSelectedShipment] = useState(undefined as unknown as ShipmentsApiResponse);
  const onDeleteShipment = (shipmentId: string) => {
      updateShipments(shipments.filter(({orderNo}) => orderNo !== shipmentId));
  }
  const onShipmentChange = (updatedShipment: ShipmentsApiResponse) => {
    updateSelectedShipment(updatedShipment);
  }

  const editSelectedShipment = (updatedShipment: ShipmentsApiResponse) => {
      const updateShipments = shipments.map((shipment) => {
          console.log(updatedShipment);
          if (shipment.orderNo === updatedShipment.orderNo){
              return updatedShipment;
          }
          return shipment;
      })
    }

  useEffect(() =>{
    getShipmentData().then((data: ShipmentsApiResponse[]) =>{updateShipments(data)})
  }, [])

      return (
          <BrowserRouter>
              <Switch>
                  <Route path="/Components/ShipmentsTable" exact render= {(routeProps) => (
                      <ShipmentsTable {...routeProps} shipments={shipments} onShipmentChange={onShipmentChange} onDeleteShipment={onDeleteShipment}/>
                  )}/>
                  <Route path="/Components/ShipmentForm" exact render={(routeProps) => (<ShipmentForm {...routeProps} selectedShipment={selectedShipment} onShipmentChange={onShipmentChange}/>)}/>
              </Switch>
          </BrowserRouter>
  );
}

export default App;
