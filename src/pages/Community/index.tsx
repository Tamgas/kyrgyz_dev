import React from "react";
import useFetch from "../../components/hooks/useFetch";
import { CommunityList } from "./CommunityList";

const Community = () => {
  const community_url = "http://3.38.98.134/community"
  const {data, loding} = useFetch({
    url: community_url
  })
  return (
    <div id="community">
      <div className="container">
        <div className="community">
          <div className="community--telegram">
            <h1>Наши ресурсы в Telegram</h1>
            <div className="community--telegram__blocks">
              {
                data && data.map((community: any) => {
                return (
                  <CommunityList
                  key={community.id}
                  label = {community.label}
                  value = {community.value}
                  />
                )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Community;