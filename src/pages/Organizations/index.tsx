import React from "react";
import { useNavigate } from "react-router-dom";
import OrganizationList from "./OrganizationList";
import useFetch from "../../hooks/useFetch";

const Organizations = () => {
  const { data, loading } = useFetch({
    url: "http://3.38.98.134/organizations",
  });

  if (loading) {
    return <div>Loading</div>;
  }
  console.log(data);
  
  return (
    <div id="organizations">
      <div className="container">
        <div className="organizations">
          <div className="organizations--cards">
            {data &&
              data.map((el: any, index: number) => {
                return <OrganizationList
                  key={index}
                  name={el.name}
                  jobs_count={el.jobs_count}
                  meetups_count={el.meetups_count}
                  events_count={el.events_count}
                />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
