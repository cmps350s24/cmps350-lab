import { describe, it } from "mocha";
import { use, expect } from "chai";
import superagent from "chai-superagent";
import request from "superagent";

use(superagent());
const root = "http://localhost:3000";

describe("Tasks API", () => {
  describe("/api/tasks", () => {
    it("returns json format", () => {
      request
        .get(`${root}/api/tasks`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res).to.have.length;
        })
        .catch((err) => {
          expect(err).to.be.null;
          console.log(err);
        });
    });
  });
});
