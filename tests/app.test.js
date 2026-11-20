import test from "node:test";
import assert from "node:assert/strict";
import { greeting, attachGreeting } from "../src/app.js";

test("HELLO-001: greeting uses World by default", () => {
  assert.equal(greeting(), "Hello, World!");
});

test("HELLO-002: clicking button updates greeting", () => {
  const listeners = new Map();
  const button = { addEventListener: (event, handler) => listeners.set(event, handler) };
  const message = { textContent: "Your agentic development workflow is running." };
  const elements = { greet: button, message };
  attachGreeting({ getElementById: (id) => elements[id] });
  assert.equal(typeof listeners.get("click"), "function");
  listeners.get("click")();
  assert.equal(message.textContent, "Hello, from RoboDevAgentTemplate!");
});

test("HELLO-002: missing UI elements fail clearly", () => {
  assert.throws(() => attachGreeting({ getElementById: () => null }), /not found/);
});
