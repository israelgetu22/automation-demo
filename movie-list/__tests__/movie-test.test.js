const { Builder, Capabilities } = require("selenium-webdriver");

const { addMovie } = require("../functions/addMovie");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  await driver.get("http://127.0.0.1:5501/movie-list/index.html");
});

afterAll(async () => {
  await driver.quit();
});

test("Adds a movie to the list", async () => {
  await addMovie(driver);

  await driver.sleep(5000);
});
