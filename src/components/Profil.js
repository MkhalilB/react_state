import React  from "react";

class Profil extends React.Component{
    constructor(){
        super()
        this.state={
            Person : { fullName :"Dalil",bio : " Body bulding", imgSrc : "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/329472868_499486755594314_6138083775901313191_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=f3qGLd3_L8QAX9Zm-r-&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfA3PK5A9G7SoWiHZ9mOgMeStp6ChkMMXNZx_D95Pojh2Q&oe=656F46E8", profession :"devlopper"},
            count : 0
          }
    }
    componentDidMount(){
        setInterval(()=>this.setState({count : this.state.count+1}),1000)
    }
    render(){
        return(
            <div>
                <h3>{this.state.Person.fullName}</h3>
                <h4>{this.state.Person.bio}</h4>
                <h5>{this.state.count}</h5>
                <img src={this.state.Person.imgSrc} alt='not found'/>
            </div>
        )
    }
}
export default Profil;