import { h, Component } from 'preact';
import El from './el.js';
import style from './style';

export default class Home extends Component {
	constructor(){
		super();
		
		this.state = {
			els: this.get(this.getRandomInt(100, 100))
		};
	}	
	get(size){
		let els = [];
		for(let i = 0; i < size; i++){
			els.push({ 
				id: i
			});
		}
		return els;
	}
	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	render() {
		return (
			<div 
				class={style.home}>
				{
					this.state.els.map(i => (
						<El data={i}/>						
					))
				}
			</div>
		);
	}
}
