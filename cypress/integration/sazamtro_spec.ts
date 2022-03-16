describe("sazamtro", () => {
  it("just test it", () => {
    cy.visit("http://localhost:3000/")
    cy.findByRole("search").type("nudes")
  })
})
export {}
