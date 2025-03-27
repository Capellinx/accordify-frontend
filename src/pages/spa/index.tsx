import dashboardImage from '../../assets/png/Dashboard.png';
import patternBanner from '../../assets/Pattern.svg';


export function Spa() {
	return (
		<>
			<header className="flex items-center justify-between p-5 ">
				<h2>Accordify</h2>
				
				<ul className="flex items-center gap-10">
					<li>About</li>
					<li>Services</li>
					<li>Features</li>
					<li>Contact</li>
				</ul>
				
				<nav className="flex items-center gap-10">
					<button className="underline cursor-pointer">Log in</button>
					<button
						className="bg-gradient-to-t from-zinc-800 from-70% to-gray-500 border-2 border-gray-200 text-white p-2 rounded-md hover:bg-zinc-900 cursor-pointer">
						Get Started
					</button>
				</nav>
			</header>
			<section className="flex items-center justify-between mx-auto mt-10">
				<aside className="p-15 relative z-20">
					<div>
						<h1 className="text-7xl w-full max-w-[700px] font-medium">
							Revolution of Contracts and Sales
						</h1>
						<span className=" w-full max-w-[600px] block text-gray-500 my-5">
              Streamline Operations, Boost Efficiency, Automate Contracts, Integrate Workflows, and Drive Growth
            </span>
					</div>
					<nav className="flex items-center gap-4">
						<button
							className="bg-gradient-to-t from-zinc-800 from-70% to-gray-500 border-2 border-gray-200 text-white p-2 rounded-md hover:bg-zinc-900 cursor-pointer">
							Get Started
						</button>
						<button className="border-2 border-zinc-800 p-2 text-zinc-800 rounded-md cursor-pointer">
							Learn More
						</button>
					</nav>
					<span className="block mt-3 text-sm">Used and helping over more <strong>200+ Companies</strong></span>
					
					<img src={patternBanner} alt="" className="absolute left-0 top-0 z-10 w-[800px]"/>
				</aside>
				<figure>
					<img src={dashboardImage} alt="" className=""/>
				</figure>
			</section>
		</>
	);
}