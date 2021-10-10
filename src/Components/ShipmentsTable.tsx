// @ts-ignore
import {getShipmentData, ShipmentsApiResponse} from "../API/ShipmentsApi";
import {RouteComponentProps} from'react-router';
import OpenImage from "./openSelected.png";
import WhiteCross from "./whiteCross.png"


export interface ShipmentsTableProps extends RouteComponentProps{
    shipments: ShipmentsApiResponse[];
    onShipmentChange:(newValue:ShipmentsApiResponse) => void;
    onDeleteShipment: any;
}

const getShipmentsTableHeaders = () =>{
    return(
        <thead className="thead-light">
        <tr>
            <th>ORDERNO</th>
            <th>DELIVERYDATE</th>
            <th>CUSTOMER</th>
            <th>TRACKINGNO</th>
            <th>STATUS</th>
            <th>CONSIGNEE</th>
            <th></th>
            <th></th>
        </tr>

        </thead>
    )
}

const ShipmentsTable= (props: ShipmentsTableProps) =>{
    return <div className={"shipments-table-div"}>
        <table className="table">
            {getShipmentsTableHeaders()}
            <tbody>
            {props.shipments.map((shipment:ShipmentsApiResponse)=> {
                return(
                        <tr>
                            <td>{shipment.orderNo}</td>
                            <td>{shipment.date}</td>
                            <td>{shipment.customer}</td>
                            <td>{shipment.trackingNo}</td>
                            <td>{shipment.status}</td>
                            <td>{shipment.consignee}</td>
                            <td>
                                <button type="button" className="btn btn-info btn-lg" onClick={() => {
                                    props.history.push("/Components/ShipmentForm");
                                    props.onShipmentChange(shipment);
                                }}><img src={OpenImage} alt="open selected shipment icon"/>
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger btn-lg" onClick={(e) => {props.onDeleteShipment(shipment.orderNo)}}><img src={WhiteCross} alt="whitecross"/></button>
                            </td>
                        </tr>
                )
            })}
            </tbody>
        </table>
    </div>
}
export default ShipmentsTable;



