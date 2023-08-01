describe("API test", () => {
  it("Should post a new user", () => {
    cy.createUser({
      id: 111,
      username: "TestUser001",
      firstName: "Galina",
      lastName: "Ivanova",
      email: "Givanova@email.pl",
      password: "1a2s3d",
      phone: "+2444666677",
      userStatus: 2,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Should put updated user", () => {
    cy.createUser({
      id: 111,
      username: "UpdateUser001",
      firstName: "Nina",
      lastName: "Semina",
      email: "NSemina@mail.kr",
      password: "1z2x3c",
      phone: "7444488333",
      userStatus: 2,
    });

    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/TestUser001",
      body: {
        id: 111,
        username: "UpdateUser001",
        firstName: "Dasha",
        lastName: "Slavina",
        email: "DSlavina@mail.kr",
        password: "1v2b3n",
        phone: "7445566899",
        userStatus: 1,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Should deleted user", () => {
    cy.createUser({
      id: 111,
      username: "ShouldDeleteUser",
      firstName: "Mikhail",
      lastName: "Kotov",
      email: "MKotov@mail.kr",
      password: "1r2t3y",
      phone: "7990000675",
      userStatus: 2,
    });

    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/ShouldDeleteUser",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });
});
