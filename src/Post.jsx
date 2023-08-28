export default function Post() {
    return (
        <div className="post">
        <div className="image">
        <img
          src="https://www.nativetroutflyfishing.com/img/apachetrout2.jpg"
          alt=""
        />
      </div>
        <div className="texts">
          <h2>The beautiful, and native, Apache trout of Northern Arizona</h2>
          <p className="info">
            <a className="author">Posted by John Doe</a>
            <time>2023-08-26 16:45</time>
          </p>
          <p className="summary">
            The Apache trout (Oncorhynchus gilae apache) once occupied
            approximately 600 miles of stream habitat in the upper Salt River,
            San Francisco River, and Little Colorado River watersheds of
            Arizona. By the 1940s Apache trout occupied fewer than 30 stream
            miles and occurred in only 12 streams on the Fort Apache Indian
            Reservation. Overfishing, habitat degradation, and the stocking of
            nonnative salmonids (starting in 1920 stocking occurred in numerous
            streams supporting Apache trout) were the cause of this decline.
          </p>
        </div>
      </div>
    )
}