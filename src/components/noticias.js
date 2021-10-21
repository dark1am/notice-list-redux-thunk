import React from 'react'
import { connect } from 'react-redux'
import { actionGetNotices, actionSetNotices } from '../state/actions/counterAction'
import './noticias.css'

class Noticias extends React.Component{

    componentDidMount(){
        this.props.actionGetNotices()
    }

    render(){

        let {actionSetNotices, notices} = this.props

        return (
            <div className="noticias">
                {
                    notices.map(e=>{
                        if(!e.seen){
                            return (<article onClick={()=> actionSetNotices(e.id)} key={e.id}>
                                    <h2> Author: {e.name} </h2><br/>
                                    <img src={e.avatar} alt="" /><br/>
                                    <h3> {e.content} </h3><br/>
                                    <h3> {e.createdAt} </h3><br/>
                                    </article>)
                        }
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        notices: state.notices
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actionGetNotices: ()=>{
            dispatch(actionGetNotices())
        },
        actionSetNotices: (id)=>{
            dispatch(actionSetNotices(id))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Noticias)