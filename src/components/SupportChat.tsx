import { useState } from "react";
import { 
  MessageCircle, 
  X, 
  List, 
  Search, 
  Plus, 
  FileText, 
  Clock, 
  Paperclip, 
  Send, 
  Mic 
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'home' | 'create' | 'detail'>('home');
  const [message, setMessage] = useState("");

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#00e59b] text-white shadow-lg shadow-[#00e59b]/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] flex flex-col bg-white rounded-[1.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-[#00e59b] p-5 flex items-center justify-between text-[#062b20]">
        <div className="flex items-center gap-3">
          <MessageCircle className="h-6 w-6" />
          <h3 className="font-bold text-lg">Support Center</h3>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setView('home')} className="hover:opacity-70 transition-opacity">
            <List className="h-5 w-5" />
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden bg-[#f8faf9]">
        {view === 'home' && (
          <div className="flex-1 flex flex-col p-5">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search tickets..." 
                className="w-full h-11 pl-10 pr-4 bg-white border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00e59b]/20 transition-all shadow-sm"
              />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center opacity-40">
              <div className="h-20 w-20 rounded-full border-4 border-gray-200 flex items-center justify-center mb-4">
                <MessageCircle className="h-10 w-10 text-gray-300" />
              </div>
              <p className="font-bold text-gray-400">No tickets found</p>
            </div>

            <button 
              onClick={() => setView('create')}
              className="mt-auto w-full h-12 bg-[#00e59b] text-[#062b20] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#00d28d] transition-colors shadow-sm"
            >
              <Plus className="h-5 w-5" />
              New Support Ticket
            </button>
          </div>
        )}

        {view === 'create' && (
          <div className="flex-1 flex flex-col p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Create New Ticket</h4>
            
            <div className="space-y-4 flex-1">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-gray-500 ml-1">Select issue type</label>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 rounded-xl bg-white shadow-sm">
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                    <SelectItem value="billing">Billing Issue</SelectItem>
                    <SelectItem value="technical">Technical Problem</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-gray-500 ml-1">Please describe your issue in detail...</label>
                <textarea 
                  className="w-full h-40 p-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00e59b]/20 transition-all shadow-sm resize-none"
                  placeholder="Tell us what's happening..."
                ></textarea>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setView('home')}
                className="flex-1 h-12 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setView('detail')}
                className="flex-1 h-12 bg-[#00e59b] text-[#062b20] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#00d28d] transition-colors shadow-sm"
              >
                <FileText className="h-4 w-4" />
                Create Ticket
              </button>
            </div>
          </div>
        )}

        {view === 'detail' && (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="p-4 border-b border-gray-100 bg-white">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <List className="h-4 w-4 text-gray-400" />
                  <span className="font-bold text-gray-900 text-sm">#CLB-260507-UP5MK</span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium">May 7, 9:04 AM</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold">
                <Clock className="h-3 w-3" />
                Pending
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-white">
              <div className="flex flex-col gap-1 items-end">
                <div className="bg-[#00e59b]/10 border-l-4 border-[#00e59b] rounded-2xl rounded-tr-sm p-4 max-w-[85%] shadow-sm">
                   <p className="text-sm font-bold text-gray-700 mb-2">Ticket #CLB-260507-UP5MK created successfully</p>
                   <p className="text-sm text-gray-600 leading-relaxed">Testing the new support system implementation.</p>
                   <div className="flex items-center justify-between mt-3">
                      <span className="text-[10px] text-gray-400">07/05/2026</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">WhatsApp API</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
              <button className="text-gray-400 hover:text-gray-600">
                <Paperclip className="h-5 w-5" />
              </button>
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..." 
                  className="w-full h-11 pl-4 pr-12 bg-gray-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00e59b]/20 transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00e59b]">
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <button className="h-11 w-11 flex items-center justify-center rounded-full bg-[#00e59b] text-white shadow-lg shadow-[#00e59b]/20">
                <Mic className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
