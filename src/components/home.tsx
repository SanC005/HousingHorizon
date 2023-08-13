
// import './App.css';

import Carousel from "./carousel";

function Home() {
  return (
    <div className="h-full flex flex-col w-full">
    <div className="font-bold text-center">
    <div className="">
      <Carousel/>
    </div>
      <div className="text-center justify-center m-5 mx-20">
        Real Estate Price Predictor
        Find estimated price of real estate of your wished specifications in
        just a few clicks!
        Bangalore is known as the "Silicon Valley of India" because of its role
        as the nation's leading information technology (IT) exporter.
        
        We built a real time application which can be used by real estate
        business. As, we need a proper prediction on the real estate and the
        properties in the housing market. We can see a mechanism that runs
        throughout the properties for the purpose of buying and selling as
        buying a house will be a life time goal for most of the individual. Our
        model uses machine learning algorithms, where machine learns from the
        data and uses them to predict a new data. The most frequently used model
        for predictive analysis is linear regression model , that has a huge
        significant on completion of this project.
      </div>
    </div>
    
    </div>
  );
}

export default Home;
