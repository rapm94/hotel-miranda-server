export interface RoomI {
    id: string;
    name: string;
    roomNumber: number;
    price: number;
    bedType: string;
    facilities: string[];
    offerPrice: number;
    status: boolean;
}