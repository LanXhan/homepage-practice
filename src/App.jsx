import Nav from './components/Nav'
const newArticles = [
  { title: "Hydrogen VS Electric Cars", description: "Will hydrogen-fueled cars ever catch up to EVs?" },
  { title: "The Downsides of AI Artistry", description: "What are the possible adverse effects of on-demand AI image generation?" },
  { title: "Is VC Funding Drying Up?", description: "Private funding by VC firms is down 50% YOY. We take a look at what that means." },
];

const featuredArticles = [
  { id: "01", image: "/assets/images/image-retro-pcs.jpg", title: "Reviving Retro PCs", description: "What happens when old PCs are given modern upgrades?" },
  { id: "02", image: "/assets/images/image-top-laptops.jpg", title: "Top 10 Laptops of 2022", description: "Our best picks for various needs and budgets." },
  { id: "03", image: "/assets/images/image-gaming-growth.jpg", title: "The Growth of Gaming", description: "How the pandemic has sparked fresh opportunities." },
];

export default function App() {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <Nav/>
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 mb-8 py-8'>
      {/* hero section */}
      <section className="lg:col-span-2 flex flex-col gap-8"> 
        <img src="/assets/images/image-web-3-desktop.jpg" alt="Web 3.0" className="block w-full h-auto object-cover" />
        <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-2 md:gap-8">
           <h1 className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-dark-blue">The Bright Future of Web 3.0?</h1>

          <div className='flex flex-col items-start gap-8 text-dark-grayish-blue'>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?
             <button className="bg-[#F15D51] px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#00001A] hover:bg-[#00001A] hover:text-white transition-colors">Read more</button>
          </div>
        </div>
      </section>
      <aside className="bg-[#00001A] p-8 gap-4">
        <h2 className='text-5xl font-bold text-[#E9AA52]'>
          New
        </h2>
        {/* card */}
        <div className='divide-y divide-[#5E607A]'>
          {
            newArticles.map((article)=>(
              <article key={article.title} className="py-10 last:pb-0 gap-2 flex-col flex" >
                <h3 className="font-bold text-white text-lg">{article.title}</h3>
                <p className='text-grayish-blue'>{article.description}</p>
              </article>
            ))}
        </div>
      </aside>
    </div>
    {/* section for the featured articles */}
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 gap-8'>
      {
        featuredArticles.map((article)=>(
          <article className='flex flex-row gap-8'>
            <img
              src={article.image}
              alt={article.title}
              className="h-32 w-24 shrink-0 object-cover"
            />
            <div> 
              <span className="text-3xl font-bold text-[#F15D51]">{article.id}</span>
              <h3 className="text-lg font-extrabold">{article.title}</h3>
              <p className="text-dark-grayish-blue">
                {article.description}
              </p>
            </div>
          </article>
        ))
      }
    </div>

    
    <footer class="attribution" className="pt-10">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="#">Franiche</a>.
    </footer>
  </div>
}
