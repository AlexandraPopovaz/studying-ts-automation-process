import { defineConfig } from "cypress";
import axios from "axios";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        getNoAuth(res) {
          return axios(
            "http://qa-school-test.quantori.academy/api/v1/no-auth"
          ).then((res) => {
            return {
              status: res.status,
              body: res.data,
            };
          });
        },
      });
    },
  },
});
