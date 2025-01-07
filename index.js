// Good luck!
const express = require("express")
const app = express()
let hairBraidingData = {
    hairstyles: [
        {
            hairstyle: "Box Braids",
            name: "Classic Box Braids",
            description: "Timeless and versatile braids that can be styled in various ways.",
            price: "150"
        },
        {
            hairstyle: "Cornrows",
            name: "Neat Cornrows",
            description: "Intricate and stylish cornrows perfect for any occasion.",
            price: "75"
        },
        {
            hairstyle: "Goddess Braids",
            name: "Elegant Goddess Braids",
            description: "Large, thick braids that create a regal and stunning look.",
            price: "200"
        },
        {
            hairstyle: "Twists",
            name: "Senegalese Twists",
            description: "Smooth and sleek twists that add length and beauty.",
            price: "250"
        }
    ],
    braiders: [
        {
            firstName: "Aisha",
            LastName: "Simmons",
            bestAt: "Box Braids"
        },

        {
            firstName: "Taylor",
            LastName: "Richardson",
            bestAt: "Twist"
        },
        {
            firstName: "Leah",
            lastName: "Caines",
            bestAt: "Cornrolls",
        },
        {
            firstName: "Shyla",
            lastName: "Combs",
            bestAt: "Goddess Braids"
        },
        {
            firstName: "Shyla",
            lastName: "Combs",
            bestAt: "Goddess Braids"
        },
        {
            firstName: "Tyla ",
            lastName: "Combs",
            bestAt: "Braided Pony Tail"
        },
        {
            firstName: "Alya",
            lastName: "Quill",
            bestAt: "Quick Weave with braids "
        },
    ]
}
app.use((request, response, next) => {
    console.log(request.method, request.url)
    next()
})
app.get("/", (request, response) => {
    response.status(200).send("Welcome to the hairbradinging API!")
})
app.get("/docs", (request, response) => {
    response.status(200).send("Go to /api/hairstyle/price/description to see more hairstyles, prices and their descriptions. In addition you can also go to /api/braider/best at to see the braiders and what they are best at.")
})
app.get("/api/hairstyle/price/description", (request, response) => {
    response.status(200).json(hairBraidingData.hairstyles)
})
app.get("/api/braider/bestAt", (request, response) => {
    response.status(200).json(hairBraidingData.braiders)
})
app.use((request, response, next) => {
    response.status(404).send("404 Not found")
})

app.listen(3000, () => {
    console.log("Server running")
})