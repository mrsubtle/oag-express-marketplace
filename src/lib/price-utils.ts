/**
 * Utility functions for price formatting and calculations
 */

/**
 * Format price for display
 * @param amount - Price amount (database stores in cents, but API returns wrong format)
 * @param currencyCode - Currency code (e.g., "CAD", "USD")
 * @returns Formatted price string
 */
export const formatPrice = (amount: number, currencyCode: string = "CAD"): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(amount * 100); // Database stores in cents, multiply by 100 to get correct price
};

/**
 * Convert price amount to display format
 * @param amount - Price amount from database (needs correction)
 * @returns Amount ready for display (multiplied by 100)
 */
export const convertPrice = (amount: number): number => {
  return amount * 100;
};

/**
 * Calculate total price with quantity
 * @param unitPrice - Unit price (raw amount)
 * @param quantity - Quantity
 * @returns Total price (raw amount)
 */
export const calculateTotal = (unitPrice: number, quantity: number): number => {
  return unitPrice * quantity;
};