"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/providers/cart";
import { useRegion } from "@/providers/region";
import { HttpTypes } from "@medusajs/types";

interface AddressFormProps {
  onContinue: () => void;
  onBack: () => void;
}

interface AddressData {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2?: string;
  city: string;
  postal_code: string;
  province?: string;
  country_code: string;
  phone?: string;
  company?: string;
}

export const AddressForm = ({ onContinue, onBack }: AddressFormProps) => {
  const { updateCart, cart } = useCart();
  const { region } = useRegion();
  
  const [shippingAddress, setShippingAddress] = useState<AddressData>({
    first_name: cart?.shipping_address?.first_name || "",
    last_name: cart?.shipping_address?.last_name || "",
    address_1: cart?.shipping_address?.address_1 || "",
    address_2: cart?.shipping_address?.address_2 || "",
    city: cart?.shipping_address?.city || "",
    postal_code: cart?.shipping_address?.postal_code || "",
    province: cart?.shipping_address?.province || "",
    country_code: cart?.shipping_address?.country_code || region?.countries?.[0]?.iso_2 || "",
    phone: cart?.shipping_address?.phone || "",
    company: cart?.shipping_address?.company || "",
  });

  const [billingAddress, setBillingAddress] = useState<AddressData>({
    first_name: cart?.billing_address?.first_name || "",
    last_name: cart?.billing_address?.last_name || "",
    address_1: cart?.billing_address?.address_1 || "",
    address_2: cart?.billing_address?.address_2 || "",
    city: cart?.billing_address?.city || "",
    postal_code: cart?.billing_address?.postal_code || "",
    province: cart?.billing_address?.province || "",
    country_code: cart?.billing_address?.country_code || region?.countries?.[0]?.iso_2 || "",
    phone: cart?.billing_address?.phone || "",
    company: cart?.billing_address?.company || "",
  });

  const [sameAsShipping, setSameAsShipping] = useState(
    cart?.billing_address ? false : true
  );
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateAddress = (address: AddressData, prefix: string = ""): Record<string, string> => {
    const addressErrors: Record<string, string> = {};

    if (!address.first_name.trim()) {
      addressErrors[`${prefix}first_name`] = "First name is required";
    }
    if (!address.last_name.trim()) {
      addressErrors[`${prefix}last_name`] = "Last name is required";
    }
    if (!address.address_1.trim()) {
      addressErrors[`${prefix}address_1`] = "Address is required";
    }
    if (!address.city.trim()) {
      addressErrors[`${prefix}city`] = "City is required";
    }
    if (!address.postal_code.trim()) {
      addressErrors[`${prefix}postal_code`] = "Postal code is required";
    }
    if (!address.country_code.trim()) {
      addressErrors[`${prefix}country_code`] = "Country is required";
    }

    return addressErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate addresses
    const shippingErrors = validateAddress(shippingAddress, "shipping_");
    const billingErrors = sameAsShipping ? {} : validateAddress(billingAddress, "billing_");
    
    const allErrors = { ...shippingErrors, ...billingErrors };
    
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      return;
    }

    try {
      setLoading(true);

      const finalBillingAddress = sameAsShipping ? shippingAddress : billingAddress;

      await updateCart({
        updateData: {
          shipping_address: shippingAddress,
          billing_address: finalBillingAddress,
        },
      });

      onContinue();
    } catch (err) {
      console.error("Error updating addresses:", err);
      setErrors({ general: "Failed to save addresses. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const updateShippingAddress = (field: keyof AddressData, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field
    if (errors[`shipping_${field}`]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`shipping_${field}`];
        return newErrors;
      });
    }
  };

  const updateBillingAddress = (field: keyof AddressData, value: string) => {
    setBillingAddress(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field
    if (errors[`billing_${field}`]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`billing_${field}`];
        return newErrors;
      });
    }
  };

  const countries = region?.countries || [];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold font-manrope">Shipping Address</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="shipping_first_name">First Name *</Label>
            <Input
              id="shipping_first_name"
              value={shippingAddress.first_name}
              onChange={(e) => updateShippingAddress("first_name", e.target.value)}
              className={errors.shipping_first_name ? "border-red-300" : ""}
            />
            {errors.shipping_first_name && (
              <p className="text-red-500 text-sm mt-1">{errors.shipping_first_name}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="shipping_last_name">Last Name *</Label>
            <Input
              id="shipping_last_name"
              value={shippingAddress.last_name}
              onChange={(e) => updateShippingAddress("last_name", e.target.value)}
              className={errors.shipping_last_name ? "border-red-300" : ""}
            />
            {errors.shipping_last_name && (
              <p className="text-red-500 text-sm mt-1">{errors.shipping_last_name}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="shipping_company">Company</Label>
          <Input
            id="shipping_company"
            value={shippingAddress.company}
            onChange={(e) => updateShippingAddress("company", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="shipping_address_1">Address *</Label>
          <Input
            id="shipping_address_1"
            value={shippingAddress.address_1}
            onChange={(e) => updateShippingAddress("address_1", e.target.value)}
            className={errors.shipping_address_1 ? "border-red-300" : ""}
          />
          {errors.shipping_address_1 && (
            <p className="text-red-500 text-sm mt-1">{errors.shipping_address_1}</p>
          )}
        </div>

        <div>
          <Label htmlFor="shipping_address_2">Address Line 2</Label>
          <Input
            id="shipping_address_2"
            value={shippingAddress.address_2}
            onChange={(e) => updateShippingAddress("address_2", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="shipping_city">City *</Label>
            <Input
              id="shipping_city"
              value={shippingAddress.city}
              onChange={(e) => updateShippingAddress("city", e.target.value)}
              className={errors.shipping_city ? "border-red-300" : ""}
            />
            {errors.shipping_city && (
              <p className="text-red-500 text-sm mt-1">{errors.shipping_city}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="shipping_postal_code">Postal Code *</Label>
            <Input
              id="shipping_postal_code"
              value={shippingAddress.postal_code}
              onChange={(e) => updateShippingAddress("postal_code", e.target.value)}
              className={errors.shipping_postal_code ? "border-red-300" : ""}
            />
            {errors.shipping_postal_code && (
              <p className="text-red-500 text-sm mt-1">{errors.shipping_postal_code}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="shipping_province">State/Province</Label>
            <Input
              id="shipping_province"
              value={shippingAddress.province}
              onChange={(e) => updateShippingAddress("province", e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="shipping_country">Country *</Label>
            <select
              id="shipping_country"
              value={shippingAddress.country_code}
              onChange={(e) => updateShippingAddress("country_code", e.target.value)}
              className={`w-full p-2 border rounded-md ${errors.shipping_country_code ? "border-red-300" : "border-gray-300"}`}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.iso_2} value={country.iso_2}>
                  {country.display_name}
                </option>
              ))}
            </select>
            {errors.shipping_country_code && (
              <p className="text-red-500 text-sm mt-1">{errors.shipping_country_code}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="shipping_phone">Phone</Label>
          <Input
            id="shipping_phone"
            type="tel"
            value={shippingAddress.phone}
            onChange={(e) => updateShippingAddress("phone", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="same_as_shipping"
            checked={sameAsShipping}
            onCheckedChange={(checked) => setSameAsShipping(!!checked)}
          />
          <Label htmlFor="same_as_shipping">
            Billing address is the same as shipping address
          </Label>
        </div>

        {!sameAsShipping && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-manrope">Billing Address</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="billing_first_name">First Name *</Label>
                <Input
                  id="billing_first_name"
                  value={billingAddress.first_name}
                  onChange={(e) => updateBillingAddress("first_name", e.target.value)}
                  className={errors.billing_first_name ? "border-red-300" : ""}
                />
                {errors.billing_first_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.billing_first_name}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="billing_last_name">Last Name *</Label>
                <Input
                  id="billing_last_name"
                  value={billingAddress.last_name}
                  onChange={(e) => updateBillingAddress("last_name", e.target.value)}
                  className={errors.billing_last_name ? "border-red-300" : ""}
                />
                {errors.billing_last_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.billing_last_name}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="billing_address_1">Address *</Label>
              <Input
                id="billing_address_1"
                value={billingAddress.address_1}
                onChange={(e) => updateBillingAddress("address_1", e.target.value)}
                className={errors.billing_address_1 ? "border-red-300" : ""}
              />
              {errors.billing_address_1 && (
                <p className="text-red-500 text-sm mt-1">{errors.billing_address_1}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="billing_city">City *</Label>
                <Input
                  id="billing_city"
                  value={billingAddress.city}
                  onChange={(e) => updateBillingAddress("city", e.target.value)}
                  className={errors.billing_city ? "border-red-300" : ""}
                />
                {errors.billing_city && (
                  <p className="text-red-500 text-sm mt-1">{errors.billing_city}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="billing_postal_code">Postal Code *</Label>
                <Input
                  id="billing_postal_code"
                  value={billingAddress.postal_code}
                  onChange={(e) => updateBillingAddress("postal_code", e.target.value)}
                  className={errors.billing_postal_code ? "border-red-300" : ""}
                />
                {errors.billing_postal_code && (
                  <p className="text-red-500 text-sm mt-1">{errors.billing_postal_code}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="billing_country">Country *</Label>
              <select
                id="billing_country"
                value={billingAddress.country_code}
                onChange={(e) => updateBillingAddress("country_code", e.target.value)}
                className={`w-full p-2 border rounded-md ${errors.billing_country_code ? "border-red-300" : "border-gray-300"}`}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.iso_2} value={country.iso_2}>
                    {country.display_name}
                  </option>
                ))}
              </select>
              {errors.billing_country_code && (
                <p className="text-red-500 text-sm mt-1">{errors.billing_country_code}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {errors.general && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{errors.general}</p>
        </div>
      )}

      <div className="flex gap-4">
        <Button
          type="button"
          onClick={onBack}
          variant="secondary"
          className="flex-1"
          disabled={loading}
        >
          Back to Product
        </Button>
        
        <Button
          type="submit"
          className="flex-1"
          disabled={loading}
        >
          {loading ? "Saving..." : "Continue to Shipping"}
        </Button>
      </div>
    </form>
  );
};