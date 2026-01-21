"use client"

import type React from "react"
import { CreditCard } from "lucide-react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useCart } from "./cart-provider"
import { useToast } from "@/hooks/use-toast"
import { Lock, Building2, CheckCircle2 } from "lucide-react"

interface CheckoutFormProps {
  total: number
}

type PaymentMethod = "ideal" | "bancontact" | "sofort" | "giropay"

const paymentMethods = [
  { id: "ideal" as const, name: "iDEAL", description: "Pay with your Dutch bank", country: "Netherlands" },
  { id: "bancontact" as const, name: "Bancontact", description: "Pay with Bancontact", country: "Belgium" },
  { id: "sofort" as const, name: "SOFORT", description: "Direct bank transfer", country: "Germany, Austria" },
  { id: "giropay" as const, name: "Giropay", description: "German online banking", country: "Germany" },
]

const idealBanks = [
  { id: "abn_amro", name: "ABN AMRO" },
  { id: "asn_bank", name: "ASN Bank" },
  { id: "bunq", name: "bunq" },
  { id: "ing", name: "ING" },
  { id: "knab", name: "Knab" },
  { id: "rabobank", name: "Rabobank" },
  { id: "sns_bank", name: "SNS Bank" },
  { id: "triodos_bank", name: "Triodos Bank" },
  { id: "revolut", name: "Revolut" },
]

export function CheckoutForm({ total }: CheckoutFormProps) {
  const router = useRouter()
  const { clearCart } = useCart()
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>("ideal")
  const [selectedBank, setSelectedBank] = useState("")

  const [formData, setFormData] = useState({
    // Contact
    email: "",
    // Shipping
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    phone: "",
    // Payment
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Save order to localStorage (in production, this would be an API call)
    const order = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      total,
      status: "processing",
      shipping: formData,
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    localStorage.setItem("orders", JSON.stringify([order, ...existingOrders]))

    clearCart()
    toast({
      title: "Order placed successfully!",
      description: `Order #${order.id}`,
    })

    router.push("/profile?tab=orders")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {/* Contact Information */}
      <div>
        <h2 className="font-serif text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Contact Information</h2>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1.5"
            />
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div>
        <h2 className="font-serif text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Shipping Address</h2>
        <div className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="firstName" className="text-sm">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1.5"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address" className="text-sm">
              Address
            </Label>
            <Input
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="Street address"
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="apartment" className="text-sm">
              Apartment, suite, etc. (optional)
            </Label>
            <Input
              id="apartment"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              className="mt-1.5"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="city" className="text-sm">
                City
              </Label>
              <Input id="city" name="city" required value={formData.city} onChange={handleChange} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="state" className="text-sm">
                State / Province
              </Label>
              <Input
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                className="mt-1.5"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="country" className="text-sm">
                Country
              </Label>
              <Input
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="zipCode" className="text-sm">
                ZIP / Postal Code
              </Label>
              <Input
                id="zipCode"
                name="zipCode"
                required
                value={formData.zipCode}
                onChange={handleChange}
                className="mt-1.5"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1.5"
            />
          </div>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div>
        <h2 className="font-serif text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Payment Method</h2>
        <p className="text-sm text-muted-foreground mb-4">Select your preferred bank payment method</p>
        
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => {
                setSelectedPaymentMethod(method.id)
                setSelectedBank("")
              }}
              className={`w-full p-4 border text-left transition-all ${
                selectedPaymentMethod === method.id
                  ? "border-foreground bg-secondary"
                  : "border-border hover:border-foreground/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-foreground" />
                  <div>
                    <p className="font-medium">{method.name}</p>
                    <p className="text-xs text-muted-foreground">{method.description} - {method.country}</p>
                  </div>
                </div>
                {selectedPaymentMethod === method.id && (
                  <CheckCircle2 className="h-5 w-5 text-foreground" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Bank Selection for iDEAL */}
        {selectedPaymentMethod === "ideal" && (
          <div className="mt-4">
            <Label htmlFor="bank" className="text-sm">Select your bank</Label>
            <select
              id="bank"
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              required
              className="mt-1.5 w-full h-10 px-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Choose your bank...</option>
              {idealBanks.map((bank) => (
                <option key={bank.id} value={bank.id}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mt-4 p-4 bg-secondary/50 border border-border">
          <p className="text-sm text-muted-foreground">
            <Lock className="h-4 w-4 inline mr-2" />
            You will be redirected to your bank to complete the payment securely via {paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="border-t border-border pt-4 sm:pt-6">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full h-12 sm:h-14 text-sm sm:text-base" 
          disabled={isProcessing || (selectedPaymentMethod === "ideal" && !selectedBank)}
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              Redirecting to bank...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
              Pay with {paymentMethods.find(m => m.id === selectedPaymentMethod)?.name} - ${total.toFixed(2)}
            </span>
          )}
        </Button>
        <p className="text-xs text-center text-muted-foreground mt-3">
          Secure bank payment powered by Mollie
        </p>
      </div>
    </form>
  )
}
