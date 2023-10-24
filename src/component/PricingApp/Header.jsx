import rings from "../../assets/pricingApp/pattern-circles.svg"

export default function Header() {
    return (
        <div className="text-center mb-20 md:mb-20">
            <img src={rings} alt="rings" className="mx-auto" />
            <div className="-mt-24 text-center">
              <h1 className="text-black text-xl md:text-3xl font-semibold">
                Simple, traffic-based pricing
              </h1>
              <p className="w-3/5 text-sm mx-auto md:text-[15px] text-gray-400">
                Sign-up for our 30-day trial. No credit card required.
              </p>
            </div>
          </div>
    )
}
