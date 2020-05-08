const Material = require("./material/model");
const ArtForm = require("./artForm/model");

// ARTFORMS (REQUIRED!)
async function seedArtForm() {
  const painting = await ArtForm.create({
    id: 1,
    name: "Painting"
  });
  const drawing = await ArtForm.create({
    id: 2,
    name: "Drawing"
  });
  const sculpture = await ArtForm.create({
    id: 3,
    name: "Sculpture"
  });
}
// MATERIALS
async function seedMaterial() {
  console.log("RUNNING!!!");
  const watercolor = await Material.create({
    id: 1,
    name: "Watercolor"
  });
  const oil = await Material.create({
    id: 2,
    name: "Oil"
  });
  const acrylic = await Material.create({
    id: 3,
    name: "Acrylic"
  });
  const gouache = await Material.create({
    id: 4,
    name: "Gouache"
  });
  const paper = await Material.create({
    id: 5,
    name: "Paper"
  });
  const stone = await Material.create({
    id: 6,
    name: "Stone"
  });
  const clay = await Material.create({
    id: 7,
    name: "Clay"
  });
  const wood = await Material.create({
    id: 8,
    name: "Wood"
  });
}

seedArtForm();
seedMaterial();
