import MainButton from "../../components/SharedComponents/MainButton/MainButton"
import Img from '../../images/CompletePage/Successmark.svg'
import TabTitle from "../../utils/TabTitle"
import './CompleteRequest.css'

const CompleteRequest = () => {
    TabTitle ('Spark | your request is complete');
    return (
        <section className="complete-page main-container zoomIn">
            <img src={Img} alt={Img}/>
            <h1>Request Completed</h1>
            <MainButton title={'Back to Home'} url={'/'} addStyle="text-white"/>
        </section>
    )
}

export default CompleteRequest