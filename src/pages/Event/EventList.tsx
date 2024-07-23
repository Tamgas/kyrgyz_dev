import { Link } from "react-router-dom";



export const EventList = ({
name = '',
location = '',
created_at = 0,
organization_name = '',
cover = '',
}: {
    name: string,
    location: string,
    created_at: number,
    updated_at: number,
    gradient: number,
    organization_name: string,
    cover: string,
}) => {
return (
    <Link to={"/eventDetals"}>
    <div className="events">
      <div className="events--foto">
      <img src={cover} data-v-17b3db24="img"/>
        <div className="events--foto__text">
          <h4>
            {created_at} <span>17:00</span>
          </h4>
          <h1>{name}</h1>

          <div className="events--foto__text--par">
            <div className="events--foto__text--par__kor1">
              <h6>Организатор</h6>
              <h2>{organization_name}</h2>
            </div>
            <div className="events--foto__text--par__kor2">
              <h6>Локация</h6>
              <h2>{location}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
)
}