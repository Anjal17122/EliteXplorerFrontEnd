const formNames = [
  { title: "hotelName", amount: "hotelPrice" },
  { title: "flightName", amount: "flightPrice" },
  { title: "guideName", amount: "guidePrice" },
  { title: "transportName", amount: "transportPrice" },
  { title: "entranceName", amount: "entrancePrice" },
  { title: "permitName", amount: "permitPrice" },
  { title: "mealName", amount: "mealPrice" },
  { title: "extraName", amount: "extraPrice" },
];
export interface PricingTemplateInterface {
  id: number;
  hotelName: string;
  hotelPrice: number;
  flightName: string;
  flightPrice: number;
  guideName: string;
  guidePrice: number;
  transportName: string;
  transportPrice: number;
  entranceName: string;
  entrancePrice: number;
  permitName: string;
  permitPrice: number;
  mealName: string;
  mealPrice: number;
  extraName: string;
  extraPrice: number;
  pdf1Id: number;
  pdf2Id: number;
  total: number;
  pdf1Pdf2Id: number;
}
