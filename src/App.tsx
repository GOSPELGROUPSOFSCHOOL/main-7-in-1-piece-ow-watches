/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import ThankYouPage from "./components/ThankYouPage";
import CRMSection from "./components/CRMSection";
import { Order } from "./types";

type ViewState = "landing" | "thankyou" | "admin";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>("landing");
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  const handleOrderSuccess = (order: Order) => {
    setCompletedOrder(order);
    setCurrentView("thankyou");
  };

  const handleBackToShop = () => {
    setCompletedOrder(null);
    setCurrentView("landing");
  };

  return (
    <div id="app-container" className="min-h-screen bg-slate-50 text-slate-900 selection:bg-yellow-100 font-sans">
      
      {/* Brand Header Bar */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="bg-yellow-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded shadow-sm tracking-widest">
              MAJESTIC
            </div>
            <span className="font-display font-black text-slate-900 tracking-tight text-xl">
              Watch Collection
            </span>
          </div>

          <div className="flex items-center gap-4">
            {currentView === "admin" && (
              <button
                onClick={() => setCurrentView("landing")}
                className="text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-transparent px-4 py-1.5 rounded transition-all uppercase tracking-wider"
              >
                Back to Shop
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10">
        {currentView === "landing" && (
          <LandingPage 
            onOrderSuccess={handleOrderSuccess} 
            onGoToAdmin={() => setCurrentView("admin")} 
          />
        )}
        
        {currentView === "thankyou" && completedOrder && (
          <ThankYouPage 
            order={completedOrder} 
            onBackToShop={handleBackToShop} 
          />
        )}

        {currentView === "admin" && (
          <CRMSection 
            onBackToLanding={() => setCurrentView("landing")} 
          />
        )}
      </main>

    </div>
  );
}

