import TabItem from "./TabItem";
import '../../App.css';

const Tabs = ( {setActiveTab} ) => {
    return(
        <div className="tabs">
            {
                ['aerobic', 'strength', 'yoga', 'pilates'].map((tab, index) => (
                    <TabItem 
                    key = { index }
                    tab = { tab }
                    index = { index }
                    setActiveTab = {setActiveTab}/>
                ))
            }
            </div>
    )
}

export default Tabs;