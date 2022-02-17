import { MongoClient } from 'mongodb';
import { Fragment, useEffect, useState } from 'react';
import MeetUpList from '../components/meetups/MeetupList';
import Head from 'next/head';

 /* const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
        address: 'Some Address 5, 13254 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
        address: 'Some Address 5, 13254 Some City',
        description: 'This is a Second meetup!'
    },
]; */

function HomePage(props) {

    /*const [loadedMeetups, setLoadedMetups] = useState([]);

    useEffect(() => {
        //fetch data


        setLoadedMetups(DUMMY_MEETUPS);
    }, []); */


    return (
        <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name="description" content="Browse a husge list of active react meetups" />
        </Head>
        <MeetUpList meetups={/* loadedMeetups */ props.meetups} />
        </Fragment>
    );
}

/*
export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;

    return{
        props:{
            meetups:DUMMY_MEETUPS
        }
    };
}
*/

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://hemilrajpura:hemilsoni@cluster0.vtlpg.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsColletion = db.collection('meetups');
    const meetups  = await meetupsColletion.find().toArray();
    client.close();

    //fetch('./api/meetups.js');
    return {
        props: {
            meetups: meetups.map((meetup)=>(
                {
                    title:meetup.title,
                    image:meetup.image,
                    address:meetup.address,
                    //description:meetup.description,
                     id: meetup._id.toString(),
                }
            ))
        },
        revalidate: 1
    };
}

export default HomePage;