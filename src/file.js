import React, {Component} from 'react';


 class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        bgColor_pixcel:[],
    }
  
  }
 
  componentDidMount() {
    this.random_bg_color()
  }
 
  componentDidUpdate(prevProps) {
 
  
  }
 
   random_bg_color =() =>{
    var html = "";
    var contact_color= [];
    for (var i = 0;i<=32768; i += 8) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        contact_color.push("rgb(" + x + "," + y + "," + z + ")");
        console.log(i);
  }
  
   this.setState({
                bgColor_pixcel:contact_color
            })
  
    
    }
 
 
  render() {
    const {bgColor_pixcel} = this.state
    console.log("====================="+this.state.bgColor_pixcel)
    console.log("====le=="+this.state.bgColor_pixcel.length)
    return (
 
        <div  className="pixcel_Main_Div">
               <div class="row HomeProductSection" >
          {this.state.bgColor_pixcel.length >0 ?( this.state.bgColor_pixcel.map((data,key) =>
              <React.Fragment>
                <div style={{"background":data}} key={key}>
                <h2 style={{"color":data}} >{data}</h2>
                </div>
          </React.Fragment>
           )):(
            <h3>No one product buy </h3>
          )}
         
        </div>
           
      </div>
    )
  }
}
export default App;