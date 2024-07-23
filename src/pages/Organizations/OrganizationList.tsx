import { Link } from "react-router-dom"



export const OrganizationList = ({
name = '', 
events_count = 0,
jobs_count = 0,
meetups_count = 0,
icon = '',

}: {
    name: string,
    events_count: number,
    jobs_count: number,
    meetups_count: number,
    icon: string,

}) => {
    return (
        <Link to={"/detail"}>
              <div className="organizations--cards">
        <div className="organizations--cards__card">
        <div className="organizations--cards__card--title">
          <img src={`${icon}`} alt="" />
          <div className="organizations--cards__card--title__company">
            <h3>Компания</h3>
            <h2>{name}</h2>
          </div>
        </div>
        <div className="organizations--cards__card--about">
          <div className="organizations--cards__card--about__block">
            <h3>Вакансии</h3>
            <h2>{jobs_count}</h2>
          </div>
          <div className="organizations--cards__card--about__block">
            <h3>Мероприятия</h3>
            <h2>{events_count}</h2>
          </div>
          <div className="organizations--cards__card--about__block">
            <h3>Видео</h3>
            <h2>{meetups_count}</h2>
          </div>
        </div>
      </div>
      </div>

        </Link>
        
    )
}