import DB from "./DB";
//insert

it("should reject the promise if the ID is not a number", () => {
  const db = new DB();
  const data = { id: "invalid", name: "John Doe" };
  db.insert(data).catch((err) => {
    expect(err.message).toEqual("ID can be only number!");
  });
});

it("should reject the promise if the ID is already taken", () => {
  const db = new DB();
  const data1 = { id: 1, name: "John Doe" };
  const data2 = { id: 1, name: "Jane Doe" };
  db.insert(data1);
  db.insert(data2).catch((err) => {
    expect(err.message).toEqual("ID can't be duplicated!");
  });
});
