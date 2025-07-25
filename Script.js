const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, className) {
  const div = document.createElement("div");
  div.textContent = text;
  div.className = `message ${className}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIReply(text) {
  const lower = text.toLowerCase();
  if (lower.includes("بروتين")) return "البروتين مهم، خُد 1.6غ × لكل كغ ديال الوزن ديالك.";
  if (lower.includes("كمال الأجسام")) return "تريني 4‑5 دفعات فالجم، وركز على تمارين compound بحال squats و deadlifts.";
  if (lower.includes("لبسة") || lower.includes("ستايل")) return "سترست كلاسك؟ جرب Oversize و streetwear، غادي يجيك ستايل زوين.";
  return "معافك عاودها ليا، مافهمتش مزيان.";
}

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  const reply = getAIReply(text);
  setTimeout(() => addMessage(reply, "ai"), 500);
  userInput.value = "";
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
