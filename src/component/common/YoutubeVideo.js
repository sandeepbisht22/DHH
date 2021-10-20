import React, { useEffect, useState, Fragment } from "react";

const YoutubeVideo = ({ channelId, youtubeKey }) => {
  const [channelVideoInfos, setChannelVideoInfos] = useState([]);
  const [channelInfos, setChannelInfos] = useState([]);

  async function getChannelYoutubeInfo() {
    if (channelVideoInfos.length === 0) {
      const res = await fetch(
        // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=5&order=viewCount&key=${youtubeKey}`
        "http://localhost:5000/sampleyoutubefirstcall"
      );
      const channelJson = await res.json();
      //channelInfos = channelJson.items;
      setChannelInfos(channelJson[0].items);
      //      channelInfos = channelJson[0].items;

      console.log(channelInfos);
    }

    await Promise.all(
      channelInfos.map(async (channelInfo) => {
        const response = await fetch(
          //   `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${channelInfo.id.videoId}&key=${youtubeKey}`
          "http://localhost:5000/sampleyoutubesecondcall"
        );
        const data = await response.json();
        setChannelVideoInfos((channelVideoInfos) => [
          ...channelVideoInfos,
          data[0].items,
          //data.items,
        ]);
        console.log(channelVideoInfos);
      })
    );
  }
  useEffect(() => {
    getChannelYoutubeInfo(channelId, youtubeKey);
  }, []);
  return (
    channelInfos.length > 0 && (
      <Fragment>
        <div className="container">
          <div className="row">
            {channelInfos.map((channelInfo) => (
              <div className="col-md-6">
                <img src={channelInfo.snippet.thumbnails.medium.url} />
                <div style={{ color: "#FFFFFF" }}>
                  {channelInfo.snippet.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  );
};

export default YoutubeVideo;
