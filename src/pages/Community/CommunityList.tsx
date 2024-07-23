import { FaTelegramPlane } from "react-icons/fa";



export const CommunityList = ({
    label = '',
    value = '',
}: {
    label: string,
    value: string,
}) => {
return (
    
    <div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>{label}</p>
              </div>
)
}