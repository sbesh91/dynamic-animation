import { h, Component } from 'preact';
import style from './style';

export default class El extends Component{
    constructor(props){
        super(props);
        
        let height = document.body.clientHeight;
        let width = document.body.clientWidth;

        this.state = {
            transform: '',
            x: this.getRandomInt(0, width),
            y: this.getRandomInt(0, height),            
            deg: this.getRandomInt(0, 360),            
            data: this.props.data,            
            height: 20,
            width: 20
        };        
    }        
    getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
    animate(){
        let ctx = this;
        let x = this.state.x;
        let y = this.state.y;
        let deg = this.state.deg;
        let height = document.body.clientHeight;
        let width = document.body.clientWidth;
        deg++
        //deg = Math.abs(Math.cos(deg));
        x++;        
        y++;        
        
        if(deg >= 360){
            deg = 0;
        }
        if(x >= width){
            x = 0;
        }
        if(y >= height){
            y = 0;
        }

        requestAnimationFrame(function(){
            ctx.setState({
                x: x,
                y: y,          
                deg: deg
            });            
            ctx.base.style.transform = `translate(${x}px,${y}px) scale(.5, .5) rotateX(${deg}deg) rotateY(${deg}deg) rotateZ(${deg}deg)`;
            ctx.animate();
        });
    }
    componentDidMount(){   
        let ctx = this;

        requestAnimationFrame(function(){
            ctx.animate();
        });
    }   
    render(){
        return (
            <div class={style.el}>            
            </div>
        );
    }
}