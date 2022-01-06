export interface BookingI {
    name: string;
    id: string;
    checkIn: Date;
    checkOut: Date;
    roomId: string;
    price: number;
    specialRequests: string;
    Amenities: string;
}