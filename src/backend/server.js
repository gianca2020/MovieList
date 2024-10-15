import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors())

const PORT = process.env.PORT || 5000

const people = [
    {
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYjkyZjY1OWItNjYyNC00ZjlhLTgwOTAtMGNiYTFmYTNmZDI3XkEyXkFqcGc@._V1_.jpg",
      name: "Perfect Blue",
      director: "Satoshi Kon",
      year: 1997,
    },
    {
      imageUrl: `https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg`,
      name: "La La Land",
      director: "Damien Chazelle",
      year: 2015,
    },
    {
      imageUrl: `https://m.media-amazon.com/images/M/MV5BMjE0MTM4NTc3NF5BMl5BanBnXkFtZTcwMjYzOTIxNg@@._V1_FMjpg_UX1000_.jpg`,
      name: "The Muppets",
      director: "James Bobin",
      year: 2011,
    },
  ]

app.get('/movies', async (req, res) => {
    try {
        res.send(people)
    } catch(e){
        console.log(e)
        res.status(400).send('Internal Server Error')
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port` ,PORT)
})