import React from "react";
import useFetch from "../../components/hooks/useFetch";
import { OrganizationList } from "./OrganizationList";


const Organizations = () => {
  const organizations_url = "http://3.38.98.134/organizations"
  const {data, loding} = useFetch({
    url: organizations_url
  })

  return (
    <div id="organizations">
      <div className="container">
        <div className="organizations">
        
         {
         data && data.map((Organizations: any) => {
          return (
            <OrganizationList 
            key={Organizations.id}
            name = {Organizations.name}
            events_count={Organizations.events_count}
            jobs_count={Organizations.jobs_count}
            meetups_count={Organizations.meetups_count}
            icon = {Organizations.icon}
            />
          )
         })
         }
            
          </div>
        </div>
      </div>

  );
};

export default Organizations;
