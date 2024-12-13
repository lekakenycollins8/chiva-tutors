import { pricingPlans } from "@/data/index"

export default function PricingPage() {
  return (
    <div id="pricing" className="min-h-screen py-12 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Our Pricing Plans</h1>
        <p className="text-xl text-center text-white-60 mb-12">Choose the plan that best fits your needs</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4 text-black">{plan.name}</h2>
              <p className="text-4xl text-black-100 font-bold mb-6">${plan.price}<span className="text-xl font-normal"></span></p>
              <ul className="mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="mb-2 flex items-center text-black-100">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
          <p className="text-blue-500">We accept all major credit cards, PayPal, Payoneer, Wise and bank transfers.</p>
        </div>
      </div>
    </div>
  )
}