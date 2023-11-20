import icon_success from "../../assets/Newsletter/icon-success.svg";

export default function ThankYou({email,onDismiss}) {
    return (
        <div className="w-full h-screen md:h-fit md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white md:rounded-3xl p-6 md:p-10">
            <div className="grid gap-5 h-fit pt-[40%] sm:pt-[30%] md:pt-0">
              <img src={icon_success} alt="success icon" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Thanks for subscribing!
              </h2>
              <p className="text-sm md:text-base">
                A confirmation email has been sent to{" "}
                <span className="font-bold">{email}</span>. Please open the
                button inside to confirm your subscription
              </p>
              <button
                onClick={onDismiss}
                className="w-full mt-[75%] md:mt-[50%] lg:mt-0 text-white mt-4 py-4 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-rose-400 hover:via-rose-400 hover:via-orange-400 hover:to-orange-400"
              >
                Dismiss message
              </button>
            </div>
          </div>
    )
}
