import { useState } from "react";
import Tabs from './components/Tabs/Tabs';
import TabOne from "./components/Tabs/TabOne";
import TabTwo from "./components/Tabs/TabTwo";
import TabThree from "./components/Tabs/TabThree";
import TabFour from "./components/Tabs/TabFour";

function Training() {

    const [activeTab, setActiveTab] = useState(0);

    return <div>

        <div className="training_container">
            <h1 className="training_heading">It's time for physical activity?</h1>
            <p className="training_par">Choose a workout:</p>
        </div>

        <div>
            <Tabs setActiveTab={setActiveTab} />
            {activeTab === 0 && <TabOne />}
            {activeTab === 1 && <TabTwo />}
            {activeTab === 2 && <TabThree />}
            {activeTab === 3 && <TabFour />}
        </div>
    </div>

}

export default Training;