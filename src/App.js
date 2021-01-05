import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from './components';
import dotenv from  'dotenv';
function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    dotenv.config();
    return (
        <Grid style={{ justify: "center" }} container spacing={3}>
            <Grid item xs={12}>
                <Grid container spacing={10}>
                    <Grid item xs={10}>
                        <h1>⚡Stream Lite⚡</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <SearchBar onSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </Grid>
          
                </Grid>
            </Grid>
        </Grid>
       
    );
    async function handleSubmit(searchTerm) {
        const { data: { items: videos } } = await youtube.get("search", {
            params: {
                part: "snippet",
                maxResults: 5,
                key: process.env.REACT_APP_API_KEY,
                q: searchTerm,
            }
        });

        setVideos(videos);
        setSelectedVideo(videos[0]);
    }

}
export default App;