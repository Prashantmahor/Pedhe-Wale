// import { useState } from "react";
// import axios from "axios";

// export default function Chatbot() {
//   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input) return;

//     // Add user msg
//     setMessages((prev) => [...prev, { sender: "user", text: input }]);

//     try {
//       const res = await axios.post("http://localhost:5000/api/chat", {
//         message: input,
//         userId: "demoUser",
//       });

//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: res.data.reply },
//       ]);
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "Server error, try again later." },
//       ]);
//     }

//     setInput("");
//   };

//   return (
//     <div className="fixed bottom-4 right-4 w-80 bg-white border rounded-lg shadow-lg flex flex-col">
//       <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg">Chatbot</div>
//       <div className="flex-1 p-2 overflow-y-auto">
//         {messages.map((m, i) => (
//           <div key={i} className={`my-1 ${m.sender === "user" ? "text-right" : "text-left"}`}>
//             <span
//               className={`inline-block px-2 py-1 rounded ${
//                 m.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
//               }`}
//             >
//               {m.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex p-2 border-t">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 border px-2 py-1 rounded"
//           placeholder="Type here..."
//         />
//         <button
//           onClick={sendMessage}
//           className="ml-2 bg-blue-600 text-white px-3 py-1 rounded"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", { message: input });
      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
    }

    setInput("");
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
      <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.sender === "user" ? "right" : "left", margin: "5px 0" }}>
            <span style={{ padding: "5px 10px", borderRadius: "10px", backgroundColor: m.sender === "user" ? "#daf8cb" : "#f1f0f0" }}>
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        style={{ width: "80%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} style={{ width: "18%", padding: "10px", marginLeft: "2%", borderRadius: "5px" }}>Send</button>
    </div>
  );
}
