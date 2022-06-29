import client from "../../lib/mongodb";

export default async (req, res) => {
	if (req.method === "POST") {
		let {
			cardNumber ,
			expirationDate,
			CVV ,
			amount
		} = req.body

		if (
			typeof +cardNumber === "number" && +cardNumber &&
			typeof +expirationDate === "number" && +expirationDate &&
			typeof +CVV === "number" && +CVV &&
			typeof +amount === "number" && +amount
		)
			try {
				const cards = await client.db().collection("cards")

				let card = {cardNumber,expirationDate,CVV,amount}

				let {insertedId, acknowledged} = await cards.insertOne(card)
				if(!acknowledged) throw new Error("DB error")
				let result = JSON.stringify({amount, payId: insertedId})

				res.status(200).send(result);
			} catch (e) {
				res.status(500).json({ message: "Some error occured" })
			}
		else {
			res.status(400).json({ message: "Invalid params", body: req.body})
		}
	} else {
		res.status(400).json({ message: "Endpoint doesn't exist" })
	} 
};