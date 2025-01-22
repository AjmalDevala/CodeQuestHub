const express = require('express')
const cors = require('cors')
const app =express()

app.use(cors())
app.use(package.json())


const port =3000
app.listen(port,()=>{
    console.log(port)
})
// Sample data - in a real app, this would come from a database
const images = [
  {
    id: 1,
    title: "Mountain Landscape",
    description: "Beautiful mountain vista at sunset",
    url: "/api/placeholder/800/600"
  },
  {
    id: 2,
    title: "Ocean View",
    description: "Serene ocean waves at dawn",
    url: "/api/placeholder/800/600"
  },
  {
    id: 3,
    title: "Forest Trail",
    description: "Mystical forest path in autumn",
    url: "/api/placeholder/800/600"
  }
];

app.get('/api/images', (req, res) => {
  res.json(images);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});