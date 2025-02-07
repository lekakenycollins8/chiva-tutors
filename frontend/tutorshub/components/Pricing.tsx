import { pricingPlans } from "@/data/index"
import { CreditCard, ShoppingCart, Landmark } from "lucide-react"

export default function PricingPage() {
  return (
    <div id="pricing" className="min-h-screen py-12 bg-gradient-to-b from-blue-600/20 to-purple-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Our Pricing Plans</h1>
          <p className="text-xl text-muted-foreground mb-12">Choose the plan that best fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="bg-white text-black rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <div className="text-4xl font-bold mb-6">
                  ${plan.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
          <p className="text-gray-600 mb-6">We accept all major credit cards, PayPal,   Payoneer, Wise and bank transfers.</p>
          <div className="flex justify-center space-x-4">
            <CreditCard className="w-8 h-8" />
            <ShoppingCart className="w-8 h-8" />
            <Landmark className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  )
}