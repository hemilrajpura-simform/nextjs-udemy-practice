import classes from "./NewMeetupForm.module.css";


function MeetUpDetail(props) {
    return (
        <section className={classes.detail}>
            <img
                src={props.image}
                alt="" />
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <address>{props.address}</address>
        </section>
    );
}


export default MeetUpDetail;