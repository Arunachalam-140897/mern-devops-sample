const request = require("supertest");
const app = require("../server");



describe("Task API", () => {
  it("should return tasks", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should create a new task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "Test Task" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Task");
  });
});
