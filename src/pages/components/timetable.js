import { Clock } from "lucide-react"

const scheduleData = [
  {
    "time": "9:00",
    "tag": "ARRIVAL & ONBOARDING",
    "timeRange": "9:00 - 10:00",
    "title": "Registration + Breakfast",
    "description": "Check-in and start your day with breakfast, networking with fellow attendees.",
    "speaker": "-",
    "duration": "60 MIN",
    "theme": "CHECK-IN",
    "bgColor": "bg-blue-50"
  },
  {
    "time": "10:00",
    "tag": "KEYNOTE",
    "timeRange": "10:00 - 10:30",
    "title": "Inauguration & Keynote Speaker Address",
    "description": "Driving Social Innovation Through CSR and ESG: Unlocking Sustainable Business Growth.",
    "speaker": "Keynote Speaker",
    "duration": "30 MIN",
    "theme": "CSR & ESG",
    "bgColor": "bg-orange-50"
  },
  {
    "time": "10:30",
    "tag": "PRESENTATION",
    "timeRange": "10:30 - 10:45",
    "title": "NGO Presentation 1",
    "description": "NGO presenting its innovative initiatives for CSR impact.",
    "speaker": "-",
    "duration": "15 MIN",
    "theme": "NGO INITIATIVE",
    "bgColor": "bg-green-50"
  },
  {
    "time": "10:45",
    "tag": "PANEL DISCUSSION",
    "timeRange": "10:45 - 11:45",
    "title": "Panel Discussion 1 – CSR",
    "description": "Redefining CSR: From Compliance to Community Engagement.",
    "speaker": "Panelists",
    "duration": "60 MIN",
    "theme": "CSR",
    "bgColor": "bg-yellow-50"
  },
  {
    "time": "11:45",
    "tag": "PRESENTATION",
    "timeRange": "11:45 - 12:00",
    "title": "NGO Presentation 2",
    "description": "Second NGO presentation focusing on social and environmental impact.",
    "speaker": "-",
    "duration": "15 MIN",
    "theme": "NGO INITIATIVE",
    "bgColor": "bg-green-50"
  },
  {
    "time": "12:00",
    "tag": "PANEL DISCUSSION",
    "timeRange": "12:00 - 13:00",
    "title": "Panel Discussion 2 – ESG",
    "description": "Driving Long-Term Sustainability through Social Innovation: Transforming Communities & Business Models.",
    "speaker": "Panelists",
    "duration": "60 MIN",
    "theme": "ESG",
    "bgColor": "bg-yellow-50"
  },
  {
    "time": "13:00",
    "tag": "BREAK",
    "timeRange": "13:00 - 14:00",
    "title": "Lunch Break",
    "description": "Enjoy a lunch break with opportunities for networking.",
    "speaker": "-",
    "duration": "60 MIN",
    "theme": "LUNCH",
    "bgColor": "bg-orange-50"
  },
  {
    "time": "14:00",
    "tag": "ACTIVITY",
    "timeRange": "14:00 - 14:30",
    "title": "Engagement Activity",
    "description": "Interactive session for networking and collaboration among attendees.",
    "speaker": "-",
    "duration": "30 MIN",
    "theme": "ENGAGEMENT",
    "bgColor": "bg-blue-50"
  },
  {
    "time": "14:30",
    "tag": "PITCH",
    "timeRange": "14:30 - 16:30",
    "title": "Pitch by NGO",
    "description": "Pitch for Change – 8 minutes presentation by NGO.",
    "speaker": "-",
    "duration": "120 MIN",
    "theme": "PITCH",
    "bgColor": "bg-green-50"
  },
  {
    "time": "16:30",
    "tag": "AWARDS",
    "timeRange": "16:30 - 17:00",
    "title": "Awards & Recognition",
    "description": "Recognition for CSR and ESG heads, social entrepreneurs, and NGOs.",
    "speaker": "-",
    "duration": "30 MIN",
    "theme": "RECOGNITION",
    "bgColor": "bg-yellow-50"
  },
  {
    "time": "17:00",
    "tag": "CLOSING",
    "timeRange": "17:00 - 17:15",
    "title": "Closing Remarks",
    "description": "Summing up the day and closing the event.",
    "speaker": "-",
    "duration": "15 MIN",
    "theme": "CLOSURE",
    "bgColor": "bg-orange-50"
  }
]

const getBgColor = (index: number) => {
  const colors = ['bg-blue-50', 'bg-orange-50', 'bg-purple-50']
  return colors[index % colors.length]
}

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-2 bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">Impact Innovator's Summit: CSR & ESG 2024</h1>
      {scheduleData.map((item, index) => (
        <div key={index} className={`flex ${getBgColor(index)} rounded-lg overflow-hidden`}>
          <div className="bg-blue-600 text-white p-4 w-24 flex items-center justify-center text-2xl font-bold">
            {item.time}
          </div>
          <div className="flex-1 p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="text-blue-700 text-sm flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {item.timeRange}
              </span>
            </div>
            <h2 className="text-xl font-bold text-blue-800 mb-1">{item.title}</h2>
            {item.description && <p className="text-blue-700 text-sm mb-2">{item.description}</p>}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <h3 className="font-semibold text-blue-600">SPEAKER</h3>
                <p className="text-blue-700">{item.speaker}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600">DURATION</h3>
                <p className="text-blue-700">{item.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600">THEME</h3>
                <p className="text-blue-700">{item.theme}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}