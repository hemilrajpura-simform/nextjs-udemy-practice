import { Fragment } from "react";
import MeetUpDetail from "../../components/meetups/MeetupDetail";
import { MongoClient,ObjectId } from 'mongodb';
import Head from "next/head";
function MeetUpDetails(props) {

    return (
        <Fragment>
        <Head>
          <title>{props.meetupData.title}</title>
          <meta name="description" content={props.meetupData.description} />
        </Head>
  
        <MeetUpDetail
            image={props.meetupData.image}
            title={props.meetupData.title} desc={props.meetupData.description} 
            address={props.meetupData.address}
        />
        </Fragment>
    );
}

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://hemilrajpura:hemilsoni@cluster0.vtlpg.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsColletion = db.collection('meetups');
    const meetups = await meetupsColletion.find({}, { _id: 1 }).toArray();
    client.close();


    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() }
        }))
        /*   [
               {
                   params: {
                       meetupId: 'm1',
                   },
               },
               {
                   params: {
                       meetupId: 'm2',
                   },
               },
           ],*/
    };
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://hemilrajpura:hemilsoni@cluster0.vtlpg.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsColletion = db.collection('meetups');
    const selectedMeetup = await meetupsColletion.findOne({_id:ObjectId(meetupId),});



    client.close();
    console.log(meetupId);

    return {
        props: {
            meetupData:{
                id:selectedMeetup._id.toString(),
                title:selectedMeetup.title,
                description:selectedMeetup.description,
                image:selectedMeetup.image,
                address:selectedMeetup.address,
            },
            /* {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
                id: meetupId,
                title: 'A First Meetup',
                desc: 'A First ever Meetup Desc',
                address: 'some address'
            } */
        }
    };
}

export default MeetUpDetails;