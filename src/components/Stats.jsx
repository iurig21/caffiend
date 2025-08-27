import {calculateCurrentCaffeineLevel,statusLevels,calculateCoffeeStats,getTopThreeCoffees} from "../utils/index.js"
import { ChartNoAxesColumn } from 'lucide-react';
import { useAuth } from "../Context/AuthContext.jsx";

function StatCard({lg,title,children}){
    return(
        <div className={`card stat-card ${lg && "col-span-2"}`}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

function Stats(){

    const {globalData} = useAuth();
    
    const stats = calculateCoffeeStats(globalData);


    const caffeineLevel = calculateCurrentCaffeineLevel(globalData);
    const warningLevel = caffeineLevel < statusLevels.low.maxLevel ? 'low' : caffeineLevel < statusLevels.moderate.maxLevel ? 'moderate' : 'high';
    return (
       <div>
            <div className="section-header">
                <ChartNoAxesColumn size={30}/>
                <h2 style={{marginBottom:"22px"}}>Stats</h2>
            </div>
            <div className='stats-grid'>
                    <StatCard lg title="Active Caffeine Level">
                        <div className='status'>
                            <p> <span className="stat-text"> {caffeineLevel}mg </span> </p>
                            <h5 style={{color: statusLevels[warningLevel].color , background:statusLevels[warningLevel].background}}>{warningLevel}</h5>
                        </div>
                        <p>{statusLevels[warningLevel].description}</p>
                    </StatCard>
                    <StatCard title="Daily caffeine">
                        <p> <span className="stat-text"> {stats.daily_caffeine}mg </span></p>
                    </StatCard>
                    <StatCard title="Avg # of coffees">
                        <p> <span className="stat-text"> {stats.average_coffees}</span></p>
                    </StatCard>
                    <StatCard title="Daily cost (€)">
                        <p> €<span className="stat-text"> {stats.daily_cost} </span></p>
                    </StatCard>
                    <StatCard title="Total cost (€)">
                        <p> €<span className="stat-text"> {stats.total_cost} </span></p>
                    </StatCard>
                    <table className="stat-table">
                        <thead>
                            <tr>
                                <th>Coffee Name</th>
                                <th>Number of purchase</th>
                                <th> Percentage of Total </th>
                            </tr>
                        </thead>
                        <tbody>
                           {getTopThreeCoffees(globalData).map((coffee,idx) => (
                                <tr key={idx}>
                                    <td> {coffee.coffeeName} </td>
                                    <td> {coffee.count} </td>
                                    <td> {coffee.percentage} </td>
                                </tr>
                           ))}
                        </tbody>
                    </table>
            </div>
       </div>
    )
}

export default Stats