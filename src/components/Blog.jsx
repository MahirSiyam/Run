import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MarathonNewsPage = () => {
  const currentDate = new Date().toDateString();

  const topHeadlines = [
    "City Marathon 2025 Breaks All-Time Participation Record",
    "Local Hero Finishes 10th After 6 Months of Training",
    "Experts Warn: Hydration Key to Safe Running in Summer",
    "New Marathon Route Includes Historic Landmarks",
    "Thousands Cheer at Central Park Finish Line",
  ];

  const news = [
    {
      title: "City Marathon 2025: A Festival of Speed and Spirit",
      content: `New York – Over 30,000 runners from around the world gathered early Sunday morning to participate in the City Marathon 2025. Spectators lined the streets to cheer on runners as they made their way through the iconic 26.2-mile course. Elite runners from Kenya and Ethiopia dominated the top spots once again, while thousands of amateur runners crossed the finish line with pride.`,
      img: "https://images.pexels.com/photos/1555354/pexels-photo-1555354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Inspiring Comeback: Veteran Runner Finishes Against All Odds",
      content: `After recovering from a major knee injury just last year, 58-year-old Maria Thompson crossed the finish line with tears in her eyes. “I didn’t think I’d ever run again,” she said. Her determination and discipline touched hearts across the globe.`,
      img: "https://images.pexels.com/photos/2524740/pexels-photo-2524740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Hydration Stations and Medical Teams Kept Runners Safe",
      content: `Organizers set up hydration points every two miles, distributing water and electrolytes. Over 150 medical volunteers were ready on-site to support runners, ensuring quick treatment of cramps, fatigue, and minor injuries.`,
      img: "https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Kids’ Fun Run Kicks Off Morning Festivities",
      content: `Before the main race, over 1,000 children took part in a 1-mile Fun Run, cheered by parents and volunteers. Medals were given to every participant, making it a joyful start to the marathon day.`,
      img: "https://images.pexels.com/photos/2526884/pexels-photo-2526884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Volunteers: The Backbone of the Marathon",
      content: `More than 2,000 volunteers worked tirelessly—handing out water, guiding runners, and cheering from start to finish. “We couldn’t have done this without them,” said the event organizer.`,
      img: "https://images.pexels.com/photos/2403737/pexels-photo-2403737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Pace Runners Help Participants Hit Their Goals",
      content: `Professional pacers ran with time flags to help runners hit their goals—from sub-4-hour finishes to just crossing the line. Many first-timers said it gave them extra confidence.`,
      img: "https://images.pexels.com/photos/3638093/pexels-photo-3638093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 p-4 font-serif">
      <title>Run.Marathon News</title>

      <div className="bg-orange-500 text-gray-900 font-bold py-2 px-4 mb-4 rounded">
        <marquee>
          {topHeadlines.map((headline, i) => (
            <span key={i} className="mx-4">📰 {headline}</span>
          ))}
        </marquee>
      </div>

      <header className="text-center border-b border-base-content pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase">Marathon Times</h1>
        <p className="text-sm">{currentDate} • New York City</p>
        <p className="italic text-base-content/70">“All the news from the world of endurance”</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{news[0].title}</h2>
        <img src={news[0].img} alt="Main Marathon" className="rounded shadow mb-3 w-full object-cover" />
        <p className="text-lg leading-relaxed">{news[0].content}</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {news.slice(1).map((story, idx) => (
          <article key={idx} className="bg-base-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <img src={story.img} alt="Marathon" className="rounded mb-2 h-78 object-cover w-full" />
            <p>{story.content}</p>
          </article>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-base-content">Marathon Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://images.pexels.com/photos/2530137/pexels-photo-2530137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded shadow" />
          <img src="https://images.pexels.com/photos/1568806/pexels-photo-1568806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded shadow" />
          <img src="https://images.pexels.com/photos/21317467/pexels-photo-21317467/free-photo-of-men-running-a-marathon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded shadow" />
          <img src="https://images.pexels.com/photos/2403029/pexels-photo-2403029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded shadow" />
        </div>
      </section>
    </div>
  );
};

export default MarathonNewsPage;
