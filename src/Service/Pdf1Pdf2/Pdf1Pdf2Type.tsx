import { PDF1 } from "../SaveToc/TocType";

export interface Pdf1Pdf2Type {
  id: number;
  pdf1Id: number;
  pdf2Id: number;
  day: number;
}

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

export type StepFieldMapType = {
  Hotel: "hotelPrice";
  Flight: "flightPrice";
  Guide: "guidePrice";
  Transport: "transportPrice";
  Entrance: "entrancePrice";
  Permits: "permitPrice";
  Meals: "mealPrice";
  Extras: "extraPrice";
};
export type PricingDetailWithDays = {
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
  day: number;
};

export type PricingFullDetailType = {
  pdf1: PDF1;
  pricingDetails: PricingDetailWithDays[];
};
