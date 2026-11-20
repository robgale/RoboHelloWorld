export function greeting(name = "World") {
  return `Hello, ${name}!`;
}

export function attachGreeting(document) {
  const button = document.getElementById("greet");
  const message = document.getElementById("message");
  if (!button || !message) throw new Error("Greeting UI elements not found");
  button.addEventListener("click", () => {
    message.textContent = greeting("from RoboDevAgentTemplate");
  });
}

if (typeof document !== "undefined") {
  attachGreeting(document);
}
