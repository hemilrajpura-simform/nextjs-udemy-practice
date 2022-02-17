import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import NewMeetUPForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head';

function NewMeetUPPage() {

  const router = useRouter();


  async function addMeetUpHandler(enteredMeetUpData) {
    //console.log(enteredMeetUpData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    router.push('/');
  }
  return (
    <Fragment>
      <Head>
        <title>Add A New Meetup</title>
        <meta name="description" content="Add yout own meetups and create amazing networking opportunity" />
      </Head>

      <NewMeetUPForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
}

export default NewMeetUPPage;