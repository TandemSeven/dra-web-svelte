export const isValidZipCode = zipCode => /^\d{5}(?:[-\s]\d{4})?$/.test(zipCode);