import { RouteComponentProps } from "react-router";
import { ShipmentsApiResponse } from "../API/ShipmentsApi";
import ShipmentFormField from "./ShipmentFormField";

export interface shipmentFormProps extends RouteComponentProps{
    selectedShipment: ShipmentsApiResponse;
    onShipmentChange:(updatedShipment: ShipmentsApiResponse) => void;
}


const ShipmentForm = (shipment: shipmentFormProps) =>{

    return <div>
        <nav className="navbar navbar-expand-lg bg-info"/>
        <div className="container-lg">
            <div className="row align-self-center">
                <div className="col-2"/>
                <h6 className="col-2">SHIPMENT DETAILS</h6>
            </div>
            <div className="row justify-content-center">
                <div className="col-2">
                    <ShipmentFormField name="orderNo" shipmentField={shipment.selectedShipment.orderNo} shipment={shipment.selectedShipment} onShipmentChange={shipment.onShipmentChange}/>
                    <ShipmentFormField name="customer" shipmentField={shipment.selectedShipment.customer} shipment={shipment.selectedShipment}  onShipmentChange={shipment.onShipmentChange}/>
                    <ShipmentFormField name="consignee" shipmentField={shipment.selectedShipment.consignee} shipment={shipment.selectedShipment} onShipmentChange={shipment.onShipmentChange}/>
                </div>
                <div className="col-2">
                    <ShipmentFormField name="date" shipmentField={shipment.selectedShipment.date} shipment={shipment.selectedShipment} onShipmentChange={shipment.onShipmentChange}/>
                    <ShipmentFormField name="trackingNo" shipmentField={shipment.selectedShipment.trackingNo} shipment={shipment.selectedShipment} onShipmentChange={shipment.onShipmentChange}/>
                    <ShipmentFormField name="status" shipmentField={shipment.selectedShipment.status} shipment={shipment.selectedShipment} onShipmentChange={shipment.onShipmentChange}/>
                </div>
            </div>
        </div>
    </div>
}

export default ShipmentForm;

