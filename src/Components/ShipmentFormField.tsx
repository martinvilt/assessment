import React from "react";
import {ShipmentsApiResponse} from "../API/ShipmentsApi";
import {RouteComponentProps} from "react-router";

export interface ShipmentsFormFieldProps{
    name: string;
    shipmentField: string;
    onShipmentChange: (newValue:ShipmentsApiResponse) => void;
    shipment:ShipmentsApiResponse;
}

const ShipmentFormField = (props: ShipmentsFormFieldProps) =>{

    const onEditField = (key:string, value:string) =>{
        props.onShipmentChange({
            ...props.shipment,
        [key]:value,
        })
    }

    if (!props.shipment) return <div>No shipment selected</div>

    return(
        <div>
            <form className="form-group-field">
                <label>{props.name}</label>
                <input type={"text"} id={props.name} className="form-control" value={props.shipmentField} onChange={(e) => onEditField(props.name , e.target.value)}></input>
            </form>
        </div>
    )
}

export default ShipmentFormField;