import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;

      //  const { title, image, address, desc } = data;

        const client = await MongoClient.connect('mongodb+srv://hemilrajpura:hemilsoni@cluster0.vtlpg.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsColletion = db.collection('meetups');
        const result = await meetupsColletion.insertOne(data);

        console.log(result);

        res.status(201).json({message:'Meetup Inserted'});
    }
}
export default handler;