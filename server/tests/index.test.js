const server = require("../src/app");
const session = require("supertest");

const agent = session(server);

describe("Test de Rutas", () => {
  describe("GET / /D&D/character/:id", () => {
    it("Responde con el status 200", async () => {
      await agent.get("/D&D/character/1").expect(200);
    });

    it("Si hay un error responde con el status 500", async () => {
      await agent.get("/D&D/character/3312").expect(500);
    });

    it('Responde con un objeto con las propiedades: "id", "name", "species", "gender", "origin", "status" e "image"', async () => {
      const {body} = await agent.get("/D&D/character/1");

      const propiedades = [
        "id",
        "name",
        "species",
        "gender",
        "origin",
        "status",
        "image",
      ];

      // const keys = Object.keys(body) // ["id", "name", "species", "gender", "origin", "status" , "image"]
      //   propiedades.forEach((prop) => {
      //   expect(keys).toHaveProperty(prop);
      // });

      propiedades.forEach((prop) => {
        expect(body).toHaveProperty(prop);
      });
    });
  });
  describe("GET / D&D/login", () => {
    // let access = {access:true}

    it("Informacion correcta pase usted", async () => {
      const {body} = await agent.get(
        "/D&D/login?email=jmrod@hotmail.com&password=password"
      );
      expect(body.access).toEqual(true);
    });

    it("Informacion incorrecta 'You Shall Not Pass 🧙‍♂️'", async () => {
      const {body} = await agent.get(
        "/D&D/login?email=batrolomiau@gmail.com&password=elmalo"
      );
      expect(body.access).toEqual(false);
    });
  });

  
    it("Elimina al personaje recibido por ID", async () => {
      const {body} = await agent.delete("/rickandmorty/fav/2");

      expect(body).not.toContainEqual(testCharB);
    });
  });

