import React from 'react'
import './Level.css';
import { ArrowUpOutlined} from '@ant-design/icons';

const Level = ({data}) => {
    return (
        <div className="Level">
            <div className="confirmed">
                <div className="head">Confirmed</div>
                {data && 
                <div className="datas">
                    <ArrowUpOutlined/>
                    {data.deltaconfirmed}
                </div>    
                }
                {data && <div className="head">{data.confirmed}</div>}
            </div>    
            <div className="active">
                <div className="head">Active</div>
                {data && 
                <div className="datas">
                    <ArrowUpOutlined/>
                    {data.deltaconfirmed - (data.deltarecovered) - data.deltadeaths}</div>
            }
                {data && <div className="head">{data.active}</div>}
            </div> 
            <div className="recovered">
                <div className="head">Recovered</div>
                {data && 
                <div className="datas">
                    <ArrowUpOutlined/>
                    {data.deltarecovered}
                </div>}
                {data && <div className="head">{data.recovered}</div>}
            </div> 
            <div className="deaths">
                <div className="head">Deceased</div>
                {data && 
                <div className="datas">
                    <ArrowUpOutlined/>
                    {data.deltadeaths}    
                </div>}
                {data && <div className="head">{data.deaths}</div>}
            </div>   
        </div>
    )
}

export default Level;