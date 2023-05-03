function MainPage() {
  return (

    <>
    <br></br>
    <div className="bg-cyan-900 text-center rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full">
      <h1 className="text-5xl font-bold text-white">CarCar</h1>
      <div className="">
        <p className="m-4 text-white">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
    </div>
    <br></br>

<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://www.hdcarwallpapers.com/walls/aston_martin_dbs_770_ultimate_2023_8k_3-HD.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://wallpapercave.com/wp/wp5636803.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.hdqwalls.com/wallpapers/ford-gt-2020-42.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>


</>

  );
}

export default MainPage;
