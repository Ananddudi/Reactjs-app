import React,{useState,useEffect,useRef} from 'react';
import { AiOutlineCaretLeft,AiOutlineCaretRight } from "react-icons/ai";

const array = [
	{
		id:1,
		imgtag:"https://stablecoin.co.in/wp-content/uploads/2021/12/18-243x300.png"
	},
	{
		id:2,
		imgtag:"https://stablecoin.co.in/wp-content/uploads/2021/12/19-243x300.png"
	},
	{
		id:3,
		imgtag:"https://stablecoin.co.in/wp-content/uploads/2021/12/16-243x300.png"
	},
	{
		id:4,
		imgtag:"https://stablecoin.co.in/wp-content/uploads/2021/12/19-243x300.png"
	}
]

export const Restpage = () =>{

	const [index,setIndex] = useState(1);
	const [halt,setHalt] = useState(false);

	const refer = useRef(null)
	let pos = '';

	useEffect(()=>{

		setTimeout(()=>{
			setIndex((ind)=>{
				if(ind<=3){
					return halt?ind:ind + 1
				}
				return 0
				})
			},2000)

	},[index])

	const backward = () =>{
		setHalt(true)
		pos = "backmove"
		console.log("yeah")
	}


	return (
		<>
			<article className="w-screen h-96 bg-slate-700 heightof">
				<div c className="pt-32 ml-3">
				<h1 className="text-4xl text-green-500 font-black">TRUSTED PLATFORM<br/> ANYTIME & ANYWHERE</h1>
				<pre className="pt-5 text-white">
				The Stablecoin mobile app adapts<br/>
				the full functionality of the Stablecoin<br/>
				platform for seamless ‘on-the-go’ trading<br/>
				</pre>
				</div>
				<img className="h-14 mt-3 ml-3" src="https://stablecoin.co.in/wp-content/uploads/2021/12/R-3.png" alt="cook"/>
				<img className="float-right -mt-80  h-96 mr-16" src="https://stablecoin.co.in/wp-content/uploads/2021/12/Mobile.png" alt="randomimage"/>	
			</article>
			<article className="w-screen h-96 bg-gray-900 heightof">
				<h1 className="text-4xl text-green-500 font-black ml-80 pt-20 pl-7">WHY STABLECOIN EXCHANGE?</h1>
				<pre className="text-white tracking-tighter pl-24 pt-4 letspace">
				Stablecoin are cryptocurrencies without the volatility. They share a lot of the same powers as ETH but their value is steady, more like a<p className="pl-48">traditional currency. So you have access to stable money that you can use on Ethereum.</p>
				</pre>
				<section className="ml-56 overflow-hidden h-60 mr-56">
					<div className="bg-transparent h-72 overflow-hidden relative">
						<div className="bg-white mt-1 bg-transparent absolute">
							<div className={halt ? `float-left w-48 h-48 ml-6 ${pos}`:`float-left w-48 h-48 ml-6 next${index}step`}><img src={array[0].imgtag} alt="animage"/></div>
							<div className={halt ? `float-left w-48 h-48 ml-8 ${pos}`:`float-left w-48 h-48 ml-6 next${index}step`}><img src={array[1].imgtag} alt="animage"/></div>
							<div className={halt ? `float-left w-48 h-48 ml-8 ${pos}`:`float-left w-48 h-48 ml-6 next${index}step`}><img src={array[2].imgtag} alt="animage"/></div>
							<div className={halt ? `float-left w-48 h-48 ml-8 ${pos}`:`float-left w-48 h-48 ml-6 next${index}step`}><img src={array[3].imgtag} alt="animage"/></div>
						</div>
						{/* <div className="bg-white mt-1 bg-transparent absolute"> */}
						{/* 	<div className={`float-left w-48 h-48 ml-6 last${index}step`}><img src={array[0].imgtag} alt="animage"/></div> */}
						{/* 	<div className={`float-left w-48 h-48 ml-8 last${index}step`}><img src={array[1].imgtag} alt="animage"/></div> */}
						{/* 	<div className={`float-left w-48 h-48 ml-8 last${index}step`}><img src={array[2].imgtag} alt="animage"/></div> */}
						{/* 	<div className={`float-left w-48 h-48 ml-8 last${index}step`}><img src={array[3].imgtag} alt="animage"/></div> */}
						{/* </div> */}
					</div>
					<AiOutlineCaretLeft onClick={backward} className="text-4xl font-bold -mt-44 -ml-9 text-white absolute"/>
					<AiOutlineCaretRight className="text-4xl font-bold -mt-44 float-right w-screen text-white absolute ml-64"/>
				</section>
			</article>
		</>
		)
}

