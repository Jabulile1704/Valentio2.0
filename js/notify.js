// ✅ Replace these with YOUR EmailJS values:
const EMAILJS_PUBLIC_KEY = "GdIQbr-uVlvY2JWPj";
const EMAILJS_SERVICE_ID = "service_h9apltm";
const EMAILJS_TEMPLATE_ID = "template_wzruznk";

emailjs.init(EMAILJS_PUBLIC_KEY);

const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");
const statusEl = document.getElementById("status");

async function sendDecision(decision){
  if(!statusEl) return;

  statusEl.textContent = "Sending notification…";

  // ✅ Edit the values below to match your EmailJS template variables
  const templateParams = {
    to_name: "Jabulile",
    decision: decision,
    message: `Your Valentine proposal was: ${decision}`
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    statusEl.textContent = `✅ Sent! You chose: ${decision}`;
  } catch (err) {
    console.error(err);
    statusEl.textContent = "❌ Could not send email. Check EmailJS keys/template.";
  }
}

if(acceptBtn){
  acceptBtn.addEventListener("click", () => sendDecision("ACCEPTED 💍🥰"));
}
if(declineBtn){
  declineBtn.addEventListener("click", () => sendDecision("DECLINED 🙈💔"));
}
