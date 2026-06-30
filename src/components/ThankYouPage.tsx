import React from "react";
import { CheckCircle, PhoneCall, Gift, ArrowLeft, ShieldCheck, Heart } from "lucide-react";
import { Order } from "../types";

interface ThankYouPageProps {
  order: Order;
  onBackToShop: () => void;
}

export default function ThankYouPage({ order, onBackToShop }: ThankYouPageProps) {
  // Format phone number to WhatsApp style (removing leading 0 and adding +234)
  const formatWhatsAppNumber = (num: string) => {
    let clean = num.replace(/\D/g, "");
    if (clean.startsWith("0")) {
      clean = "234" + clean.substring(1);
    } else if (!clean.startsWith("234") && clean.length === 10) {
      clean = "234" + clean;
    }
    return clean;
  };

  const merchantWhatsApp = "2348123456789"; // Replace with merchant's WhatsApp
  const orderMessage = encodeURIComponent(
    `Hello, I just ordered the *Men's 7-Piece Luxury Watch Gift Set*.\n\n*Order Details:*\n- *Name:* ${order.fullName}\n- *Phone:* ${order.phoneNo}\n- *State:* ${order.state}\n- *City:* ${order.city}\n- *Address:* ${order.address}\n- *Ref:* ${order.referenceId}\n- *Total:* ₦${order.totalPrice.toLocaleString()}\n\nKindly confirm and ship my order. Thank you!`
  );

  const whatsappUrl = `https://wa.me/${merchantWhatsApp}?text=${orderMessage}`;

  return (
    <div id="thankyou-page-container" className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <div id="success-card" className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden text-center p-8 md:p-12 relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-900"></div>
        
        {/* Animated Celebration Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-slate-100 rounded-full scale-125 animate-pulse opacity-30"></div>
            <div className="bg-slate-50 text-slate-800 p-4 rounded-full border border-slate-200 relative z-10">
              <CheckCircle size={48} className="stroke-[2]" />
            </div>
          </div>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">
          ORDER PLACED SUCCESSFULLY! 🎉
        </h1>
        <p className="text-slate-600 text-base md:text-lg mb-8 max-w-xl mx-auto font-sans leading-relaxed">
          Ese! Thank you, <span className="font-bold text-slate-950">{order.fullName}</span>. Your order has been registered in our system and is currently being processed.
        </p>

        {/* Reference Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-8 max-w-md mx-auto text-left">
          <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-xs mb-3 border-b border-slate-200 pb-2">
            <Gift size={16} className="text-slate-700" />
            <span>Order Receipt Details</span>
          </div>
          <div className="space-y-2 text-xs md:text-sm text-slate-700 font-sans">
            <div><span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">Reference ID</span> <span className="font-mono font-bold text-slate-900">{order.referenceId}</span></div>
            <div><span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">Item</span> Men's New 7-Piece Luxury Watch Gift Set</div>
            <div><span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">Quantity</span> {order.itemQuantity} Box{order.itemQuantity > 1 ? "es" : ""}</div>
            <div><span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">Delivery Cost</span> <span className="text-emerald-600 font-bold">FREE DELIVERY</span></div>
            <div><span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">Total Price</span> <span className="text-lg font-black text-slate-900">₦{order.totalPrice.toLocaleString()}</span></div>
            <div><span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">Payment Method</span> <span className="font-bold text-slate-900">Pay On Delivery (POD)</span></div>
          </div>
        </div>

        {/* CALL TO ACTION: INSTANT WHATSAPP CONFIRMATION (EXTREMELY POPULAR IN NIGERIA) */}
        <div className="bg-slate-900 text-white rounded-lg p-6 md:p-8 mb-8 max-w-xl mx-auto border border-slate-800">
          <h2 className="font-display font-black text-yellow-400 text-base md:text-lg mb-3 uppercase tracking-wider flex items-center justify-center gap-2">
            ⚠️ ACTION REQUIRED: EXPEDITE YOUR ORDER!
          </h2>
          <p className="text-slate-300 text-xs md:text-sm mb-6 leading-relaxed font-sans">
            Due to extremely high demand, orders verified via WhatsApp are **dispatched first**! Click the button below to send your details directly to our shipping manager on WhatsApp to secure your box right now.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-confirm-btn"
            className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-black text-sm md:text-base px-8 py-4 rounded shadow-lg transition duration-150 uppercase tracking-widest w-full md:w-auto"
          >
            <PhoneCall size={18} />
            Confirm Order via WhatsApp Now
          </a>
          <p className="text-slate-400 text-[10px] mt-3 italic font-medium">
            (Saves up to 48 hours in packaging and delivery delay!)
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-slate-200 pt-8 max-w-lg mx-auto mb-8 text-left">
          <div className="flex items-start gap-2">
            <div className="text-slate-900 mt-0.5"><ShieldCheck size={16} /></div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Pay On Delivery</h4>
              <p className="text-[10px] text-slate-500 font-sans">Inspect before paying</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-slate-900 mt-0.5"><Gift size={16} /></div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Original Quality</h4>
              <p className="text-[10px] text-slate-500 font-sans">100% Brand New Set</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-start gap-2 justify-center md:justify-start">
            <div className="text-slate-900 mt-0.5"><PhoneCall size={16} /></div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">24/7 Phone Line</h4>
              <p className="text-[10px] text-slate-500 font-sans">Active for tracking</p>
            </div>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={onBackToShop}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Landing Page</span>
        </button>
      </div>
    </div>
  );
}
