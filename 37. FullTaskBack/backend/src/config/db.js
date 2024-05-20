const mongoose = require("mongoose") // new
 
// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://bd6nyw4qq:Nurus21@cluster0.1eir34x.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true })
	.then(() => {
        console.log("Mongoya baglandi");
	}).catch((err)=>console.log(err))
