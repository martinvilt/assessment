import React from "react";
import {ShipmentsApiResponse} from "../API/ShipmentsApi";

export interface ShipmentsFormFieldProps{
    name: string;
    shipmentField: string;
    onShipmentChange: (newValue:ShipmentsApiResponse) => void;
    shipment:ShipmentsApiResponse;
}

const ShipmentFormField = ({name, onShipmentChange, shipment, shipmentField}: ShipmentsFormFieldProps) =>{

    const onEditField = (key:string, value:string) =>{
        onShipmentChange({
            ...(shipment),
        [key]:value,
        })
    }

    if (!shipment) return <div>No shipment selected</div>

    return(
        <div>
            <form className="form-group-field">
                <label>{name}</label>
                <input type={"text"} id={name} className="form-control" value={shipmentField} onChange={(e) => onEditField(name, e.target.value)}/>
            </form>
        </div>
    )
}

export default ShipmentFormField;