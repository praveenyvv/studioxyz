"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Receipt, CheckCircle2, MessageSquare, Plus, Trash2, Printer, ShieldCheck } from "lucide-react";

interface BillingDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InvoiceItem {
  id: number;
  name: string;
  qty: number;
  rate: number;
}

export default function BillingDemoModal({ isOpen, onClose }: BillingDemoModalProps) {
  const [businessName, setBusinessName] = useState("Sri Balaji Enterprises");
  const [clientName, setClientName] = useState("Apex Industrial Works");
  const [clientPhone, setClientPhone] = useState("+91 98480 22334");
  const [gstRate, setGstRate] = useState(18);
  const [whatsappSent, setWhatsappSent] = useState(false);
  const [cloudSynced, setCloudSynced] = useState(true);

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, name: "Industrial Precision Machining (Batch #04)", qty: 2, rate: 24500 },
    { id: 2, name: "Custom Component Tooling & Quality CMM", qty: 1, rate: 15250 },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), name: "Standard Commercial Supply / Service", qty: 1, rate: 5000 },
    ]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: number, field: "name" | "qty" | "rate", value: string | number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  const subtotal = items.reduce((acc, curr) => acc + curr.qty * curr.rate, 0);
  const taxAmount = (subtotal * gstRate) / 100;
  const grandTotal = subtotal + taxAmount;

  const handleSimulateWhatsApp = () => {
    setWhatsappSent(true);
    setTimeout(() => setWhatsappSent(false), 5000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        >
          {/* Modal Header */}
          <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Receipt size={18} />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-2">
                  <span>Interactive Billing &amp; Cloud Ledger Engine</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                    LIVE DEMO
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Test how our custom webapps eliminate manual billing chaos &amp; data loss
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Interactive Form & Invoice Canvas */}
          <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Top Config Row */}
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 text-xs">
              <div>
                <label className="text-[10px] font-semibold text-slate-500 block mb-1">
                  Your Business Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-slate-900 focus:outline-none focus:border-blue-600 text-xs"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-slate-500 block mb-1">
                  Client / Customer Name
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-slate-900 focus:outline-none focus:border-blue-600 text-xs"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-slate-500 block mb-1">
                  Customer WhatsApp Number
                </label>
                <input
                  type="text"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-slate-900 focus:outline-none focus:border-blue-600 text-xs"
                />
              </div>
            </div>

            {/* Itemized Line Items Table */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                  Invoice Items (Editable Live)
                </span>
                <button
                  onClick={addItem}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md"
                >
                  <Plus size={12} /> Add Item
                </button>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-100/80 text-[10px] text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Item Description</th>
                      <th className="p-2.5 w-16 text-center">Qty</th>
                      <th className="p-2.5 w-24 text-right">Rate (₹)</th>
                      <th className="p-2.5 w-24 text-right">Amount (₹)</th>
                      <th className="p-2.5 w-10 text-center"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {items.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/50">
                        <td className="p-2">
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => updateItem(item.id, "name", e.target.value)}
                            className="w-full bg-transparent border-0 focus:ring-1 focus:ring-blue-500 rounded px-1.5 py-1 text-slate-900 font-medium"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <input
                            type="number"
                            min="1"
                            value={item.qty}
                            onChange={(e) =>
                              updateItem(item.id, "qty", parseInt(e.target.value) || 1)
                            }
                            className="w-12 text-center bg-slate-50 border border-slate-200 rounded py-1 font-mono font-semibold"
                          />
                        </td>
                        <td className="p-2 text-right">
                          <input
                            type="number"
                            value={item.rate}
                            onChange={(e) =>
                              updateItem(item.id, "rate", parseFloat(e.target.value) || 0)
                            }
                            className="w-20 text-right bg-slate-50 border border-slate-200 rounded py-1 px-1.5 font-mono font-semibold"
                          />
                        </td>
                        <td className="p-2 text-right font-mono font-bold text-slate-900">
                          ₹{(item.qty * item.rate).toLocaleString("en-IN")}
                        </td>
                        <td className="p-2 text-center">
                          {items.length > 1 && (
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-slate-400 hover:text-rose-500 p-1"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculations & GST breakdown */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 text-xs">
                <span className="font-semibold text-slate-600">GST Slab:</span>
                {[0, 5, 12, 18, 28].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setGstRate(rate)}
                    className={`px-2 py-1 rounded-md text-[11px] font-mono font-bold transition-all ${
                      gstRate === rate
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>

              <div className="w-full sm:w-60 text-right text-xs space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal:</span>
                  <span className="font-mono font-bold text-slate-800">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>GST ({gstRate}%):</span>
                  <span className="font-mono font-bold text-blue-600">
                    ₹{taxAmount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-200 text-sm font-bold text-slate-950">
                  <span>Grand Total:</span>
                  <span className="font-mono text-emerald-600">
                    ₹{grandTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            {/* Live Operational Proof Pills */}
            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-2.5 text-emerald-900 font-medium">
                <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-emerald-950">Continuous Cloud Sync</div>
                  <div className="text-[10px] text-emerald-700">
                    Saved to cloud database &middot; 0 risk of PC crash data loss
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center gap-2.5 text-blue-900 font-medium">
                <MessageSquare size={18} className="text-blue-600 shrink-0" />
                <div>
                  <div className="font-bold text-blue-950">Direct WhatsApp Dispatch</div>
                  <div className="text-[10px] text-blue-700">
                    Sends official GST PDF directly to customer phone
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp simulation notification banner */}
            {whatsappSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-xs flex items-center justify-between shadow-md"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>
                    Simulated: Official PDF Invoice sent to <strong>{clientPhone}</strong> via WhatsApp!
                  </span>
                </div>
                <span className="text-[10px] bg-emerald-700 px-2 py-0.5 rounded font-mono">DELIVERED</span>
              </motion.div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleSimulateWhatsApp}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-xs"
              >
                <MessageSquare size={14} />
                <span>Simulate WhatsApp PDF Dispatch</span>
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-2.5 rounded-xl transition-all"
              >
                <Printer size={14} />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>
            </div>

            <a
              href="https://wa.me/917569965052?text=Hi%20StudioXYZ!%20Your%20team%20member%20visited%20my%20office%20regarding%20a%20custom%20billing%20webapp.%20I%20just%20tested%20your%20interactive%20billing%20demo%20on%20your%20site%20and%20want%20to%20discuss%20pricing%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/20"
            >
              <span>Build This For My Business</span>
              <span>&rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
