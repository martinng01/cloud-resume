const WEBSITE_URL = "https://d2d6qte8vhldzx.cloudfront.net/";
const GITHUB_URL = "https://github.com/martinng01";
const LINKEDIN_URL = "https://linkedin.com/in/martinng01";
const LAMBDA_URL =
  "https://ql7clnksoqep7jixmf6ontlkxu0kyhnu.lambda-url.ap-southeast-1.on.aws/";

describe("Website exists", () => {
  it("passes", () => {
    cy.visit(WEBSITE_URL);
  });
});

describe("Personal Links Test", () => {
  it("contains github link", () => {
    cy.visit(WEBSITE_URL);
    cy.get('a[href="' + GITHUB_URL + '"]').should("exist");
  });

  it("contains linkedin link", () => {
    cy.visit(WEBSITE_URL);
    cy.get('a[href="' + LINKEDIN_URL + '"]').should("exist");
  });
});

describe("Section Headers Test", () => {
  it("contains Experience header", () => {
    cy.visit(WEBSITE_URL);
    cy.contains("Experience").should("exist");
  });

  it("contains Projects header", () => {
    cy.visit(WEBSITE_URL);
    cy.contains("Projects").should("exist");
  });

  it("contains Education header", () => {
    cy.visit(WEBSITE_URL);
    cy.contains("Education").should("exist");
  });

  it("contains Skills header", () => {
    cy.visit(WEBSITE_URL);
    cy.contains("Skills").should("exist");
  });
});

describe("Visitor Counter Test", () => {
  it("should send a POST request to the API", () => {
    cy.visit(WEBSITE_URL);
    cy.request("POST", LAMBDA_URL).then((response) => {
      expect(response.status).to.eq(200);
      expect(Number.isInteger(parseInt(response.body))).to.eq(true);
    });
  });

  it("should increment visitor count", () => {
    let numVisits;
    let numVisitsNew;
    cy.visit(WEBSITE_URL);
    cy.wait(1000);
    cy.contains("This website has been visited")
      .invoke("text")
      .then((text) => {
        numVisits = text.replace(/[^0-9]/g, "");
      });
    cy.reload();
    cy.wait(1000);
    cy.contains("This website has been visited")
      .invoke("text")
      .then((text) => {
        numVisitsNew = text.replace(/[^0-9]/g, "");
        expect(parseInt(numVisitsNew)).to.be.equal(parseInt(numVisits) + 1);
      });
  });
});
