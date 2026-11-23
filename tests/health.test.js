const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("../app");

test("GET /health returns 200 and OK", async () => {
  const server = app.listen(0);

  try {
    const { port } = server.address();
    const response = await fetch(`http://localhost:${port}/health`);

    assert.equal(response.status, 200);
    assert.equal(await response.text(), "OK");
  } finally {
    server.close();
  }
});
