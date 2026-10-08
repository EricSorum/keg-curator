import FormResultsClass from "@/models/FormResults";
import { StyleType } from "@/models/StyleType";

export const defaultResults = new FormResultsClass("My Restaurant", 6, false, false, 30, "", []);

export const reserved = ["Japanese", "Latin American", "German", "Chinese/Korean", "Southeast Asian", "Breakfast"];

export const preferredBreweries: string[] = ["BlackStack Brewing", "Falling Knife Brewing", "Drekker", "Lupulin Brewing", "Bent Paddle Brewery"];

export const styles: StyleType[] = [
  { value: "stout", label: "Stout", quantity: 1 },
  { value: "porter", label: "Porter", quantity: 1 },
  { value: "sour", label: "Sour", quantity: 1},
  { value: "something-dark", label: "Something Dark", quantity: 1 },
  { value: "pilsner", label: "Pilsner", quantity: 1 },
  { value: "cream-ale", label: "Cream Ale", quantity: 1 },
  { value: "blonde-golden-ale", label: "Blonde/Golden Ale", quantity: 1 },
  { value: "a-light-craft-beer", label: "A Light Craft Beer", quantity: 1 },
  { value: "american-lager", label: "American Lager", quantity: 1 },
  { value: "american-light-lager", label: "American Light Lager", quantity: 1 },
  { value: "ipa", label: "IPA", quantity: 1 },
  { value: "hazy-ipa", label: "Hazy IPA", quantity: 1 },
  { value: "pale-ale", label: "Pale Ale", quantity: 1 },
  { value: "double-ipa", label: "Double IPA", quantity: 1 },
  { value: "hazy-double-ipa", label: "Hazy Double IPA", quantity: 1 },
  { value: "international-lager", label: "International Lager", quantity: 1 }
]

