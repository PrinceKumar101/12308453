import Log from "./logger.js";

(async function main() {
  
  try {
    const res = await Log("backend", "info", "handler", "test log from run.js");
    console.log("server response:", res);
  } catch (err) {
    console.error("log failed:", err && err.message ? err.message : err);
  }
})();
