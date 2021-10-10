import axios, {AxiosResponse} from "axios";

export interface ShipmentsApiResponse{
    orderNo: string;
    date: string;
    customer: string;
    trackingNo: string;
    status: string;
    consignee: string;  // typo from API
}

export const getShipmentData = async () => {
    const data: AxiosResponse<ShipmentsApiResponse[]> = await axios.get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0");
    return data.data;
}
