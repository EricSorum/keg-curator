import FormResultsClass from "@/models/FormResults";
import StyleType from "@/models/StyleType";

export const defaultResults = new FormResultsClass("My Restaurant", 6, false, false, 30, "");

export const reserved = ["Japanese", "Latin American", "German", "Chinese/Korean", "Southeast Asian", "Breakfast"];

export const preferredBreweries: string[] = ["BlackStack Brewing", "Falling Knife Brewing", "Drekker", "Lupulin Brewing", "Bent Paddle Brewery", "Fair State Brewing"];

export const styles: StyleType[] = [
  { value: "stout", label: "Stout" },
  { value: "porter", label: "Porter" },
  { value: "sour", label: "Sour"},
  { value: "something-dark", label: "Something Dark" },
  { value: "pilsner", label: "Pilsner" },
  { value: "cream-ale", label: "Cream Ale" },
  { value: "blonde-golden-ale", label: "Blonde/Golden Ale" },
  { value: "a-light-craft-beer", label: "A Light Craft Beer" },
  { value: "american-lager", label: "American Lager" },
  { value: "american-light-lager", label: "American Light Lager" },
  { value: "ipa", label: "IPA" },
  { value: "hazy-ipa", label: "Hazy IPA" },
  { value: "pale-ale", label: "Pale Ale" },
  { value: "double-ipa", label: "Double IPA" },
  { value: "hazy-double-ipa", label: "Hazy Double IPA" },
  { value: "international-lager", label: "International Lager" }
]

