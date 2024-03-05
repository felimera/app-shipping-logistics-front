export interface Delivery {
  guideNumber: string;
  price: number;
  amount: number;
  deadline: string;
  idCustomer: number;
  idProduct: number;

  id?: number;
  discount?: number;
  idStore?: number;
  idVehicle?: number;
  idPort?: number;
  idShip?: number;
}
