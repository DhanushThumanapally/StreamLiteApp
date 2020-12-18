import React from 'react';
import { Paper, Typography } from "@material-ui/core";

function VideoDetail(props) {
    if (!props.video) return <div><div>Press Enter</div> <img width="100" src="https://cdn.wallpapersafari.com/51/45/hl5vyB.png" alt="thunder"></img></div>;

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    console.log(videoSrc);
 
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: "70%" }}>
                <iframe
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    title="Video Player"
                    src={videoSrc}
                />
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography className="others" variant="h4">
                    {props.video.snippet.title} - {props.video.snippet.channelTitle}
                </Typography>
                <Typography className="others" variant="subtitle1">
                    {props.video.snippet.channelTitle}
                </Typography>
                <Typography className="others" variant="subtitle2">{props.video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>   

    );
}
export default VideoDetail;
