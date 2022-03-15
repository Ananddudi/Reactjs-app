import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {Restpage} from './restpage';

const images = [
	'https://stablecoin.co.in/wp-content/uploads/2021/12/Banner-3-2.jpg',
	'https://stablecoin.co.in/wp-content/uploads/2022/01/Cashback-Main-File.jpg',
	'https://stablecoin.co.in/wp-content/uploads/2022/01/Banner-main-file-.jpg',
	'https://stablecoin.co.in/wp-content/uploads/2021/12/banner-5.png'
]

const Home = () => {
	let [count,setCount] = useState(0)

	useEffect(()=>{
		const interval = setInterval(()=>{
			setCount((preval)=>{
				if(preval < 3){
					return preval+1;
				}
				return 0
				})
		},3000);
		return ()=>{
			 clearInterval(interval);
		}
	},[])
	return(
		<>	
		 <img src={images[count]} alt="tagename"/>
		 <div className="bg-slate-900 w-screen h-96 text-white">
		 	<h6 className="ml-80 pt-14">We have offices in the four global financial capitals. Do you want to join us?</h6>
		 	<h1 className="text-green-600 ml-60 pl-48 font-black text-4xl pt-6 pb-3">GLOBAL PRESENCE</h1>
		 	<div className="inline ml-14 flex flex-row">
		 	<div>
		 	<img className="w-56 h-48 border-2 rounded-xl border-green-600 ml-9 m-4" src="https://stablecoin.co.in/wp-content/uploads/2022/01/1.png" alt="nothing"/>
		 	<div className="absolute text-green-600 bg-white rounded-full -mt-9 ml-24 pl-5 pr-5 pt-2 pb-2 font-bold">Australia</div>
		 	</div>
		 	<div>
		 	<img className="w-60 h-48 border-2 rounded-xl border-green-600 ml-14 m-4" src="https://stablecoin.co.in/wp-content/uploads/2022/01/2.png" alt="nothing"/>
		 	<div className="absolute text-green-600 bg-white rounded-full -mt-9 ml-32 pl-5 pr-5 pt-2 pb-2 font-bold">London</div>
		 	</div>
		 	<div>
		 	<img className="w-60 h-48 border-2 rounded-xl border-green-600 ml-14 m-4" src="https://stablecoin.co.in/wp-content/uploads/2022/01/3.png" alt="nothing"/>
		 	<div className="absolute text-green-600 bg-white rounded-full -mt-9 ml-32 pl-5 pr-5 pt-2 pb-2 font-bold">Canada</div>
		 	</div>
		 	<div>
		 	<img className="w-60 h-48 border-2 rounded-xl border-green-600 ml-14 m-4" src="https://stablecoin.co.in/wp-content/uploads/2022/01/4.png" alt="nothing"/>
		 	<div className="absolute text-green-600 bg-white rounded-full -mt-9 ml-32 pl-5 pr-5 pt-2 pb-2 font-bold">Europe</div>
		 	</div>
		 	</div>
		 </div>
		 <section className="w-screen h-96 bg-white">
		 	<img className="w-96 h-80 ml-36 mt-9" src="https://stablecoin.co.in/wp-content/uploads/2022/01/Zero-Fee-1024x745.png" alt="logoimage"/>
		 	<h1 className="font-bold text-3xl text-green-500 ml-96 pl-80 -mt-52">PAY NOTHING WHEN YOU</h1>
		 	<div className="flex flex-row pl-96 ml-80 mt-9 tracking-wider childelements">
		 	<AiOutlinePlayCircle className="text-green-800 -mr-4 mt-1 text-xl"/><h2>Buy</h2><AiOutlinePlayCircle className="text-green-800 -mr-4 mt-1 text-xl ml-3"/> <h2>Sell</h2><AiOutlinePlayCircle className="text-green-800 -mr-4 mt-1 text-xl ml-3"/> <h2>Deposit</h2>
		 	<AiOutlinePlayCircle className="text-green-800 -mr-4 mt-1 text-xl ml-3"/><h2>Withdraw</h2>
		 	</div>
		 </section>
		 <section>
		 	<Restpage/>
		 </section>
		</>
		)
}

export default Home;